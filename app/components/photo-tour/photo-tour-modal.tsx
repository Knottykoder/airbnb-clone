"use client";

import React, { useRef, useState, useEffect } from "react";
import { PhotoItem, tourRooms, allPhotos } from "../../data/photos";
import { ChevronLeftIcon, HeartIcon, ShareIcon } from "../icons/airbnb-icons";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

interface PhotoTourModalProps {
  photos: PhotoItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (index: number) => void;
  onShareClick: () => void;
}

export function PhotoTourModal({
  isOpen,
  onClose,
  onSelectPhoto,
  onShareClick,
}: PhotoTourModalProps) {
  useLockBodyScroll(isOpen);
  const [isSaved, setIsSaved] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll on open
  useEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  const jumpToRoom = (roomId: string) => {
    const el = document.getElementById(`tour-${roomId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isOpen) return null;

  // Track global photo index across rooms
  let globalIndexCounter = 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 bg-white flex flex-col animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-[#EBEBEB] px-6 sm:px-12 h-18 flex items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          aria-label="Back to listing"
          className="w-10 h-10 rounded-full hover:bg-[#F7F7F7] flex items-center justify-center text-[#222222] transition-colors"
        >
          <ChevronLeftIcon size={20} />
        </button>

        <h1 className="text-[16px] font-semibold text-[#222222]">Photo tour</h1>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onShareClick}
            aria-label="Share photos"
            className="w-10 h-10 rounded-full hover:bg-[#F7F7F7] flex items-center justify-center text-[#222222] transition-colors"
          >
            <ShareIcon size={18} />
          </button>
          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            aria-label="Save to wishlist"
            className="w-10 h-10 rounded-full hover:bg-[#F7F7F7] flex items-center justify-center text-[#222222] transition-colors"
          >
            <HeartIcon size={18} filled={isSaved} />
          </button>
        </div>
      </header>

      {/* Main Scrollable Content Area */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-16 py-8">
          {/* Top Category Thumbnail Cards Grid */}
          <div className="pb-10 border-b border-[#EBEBEB]">
            <div className="flex flex-wrap gap-4 items-start">
              {tourRooms.map((room) => (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => jumpToRoom(room.id)}
                  className="group flex flex-col items-start text-left focus-visible:ring-2 focus-visible:ring-[#222222] rounded-xl p-1 transition-transform hover:-translate-y-0.5 cursor-pointer w-[96px]"
                >
                  <div className="w-[90px] h-[68px] rounded-xl overflow-hidden bg-[#EBEBEB] border border-[#EBEBEB] group-hover:border-[#222222] transition-colors shadow-xs">
                    <img
                      src={room.thumb}
                      alt={room.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <span className="text-[12px] font-medium text-[#222222] mt-1.5 leading-tight group-hover:underline">
                    {room.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Categorized Room Sections (2-Column Layout) */}
          <div className="divide-y divide-[#EBEBEB]">
            {tourRooms.map((room) => {
              // Extract photo layout chunks for this room
              let imageIndex = 0;
              const blocks: { type: number; imgs: { src: string; alt: string; globalIdx: number }[] }[] = [];

              for (const blockSize of room.layout) {
                const chunk = room.images.slice(imageIndex, imageIndex + blockSize);
                const chunkWithGlobal = chunk.map((img) => {
                  const gIdx = globalIndexCounter;
                  globalIndexCounter++;
                  return { ...img, globalIdx: gIdx };
                });
                blocks.push({ type: blockSize, imgs: chunkWithGlobal });
                imageIndex += blockSize;
              }

              return (
                <section
                  key={room.id}
                  id={`tour-${room.id}`}
                  className="scroll-mt-24 py-12 grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start"
                >
                  {/* Left Column: Room Title + Subtitle */}
                  <div className="lg:sticky lg:top-28">
                    <h2 className="text-[28px] lg:text-[32px] font-semibold text-[#222222] leading-tight">
                      {room.title}
                    </h2>
                    {room.subtitle && (
                      <p className="text-[14px] text-[#717171] mt-2 leading-relaxed">
                        {room.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Right Column: Room Photos Layout */}
                  <div className="space-y-4">
                    {blocks.map((block, bIdx) => {
                      if (block.type === 1) {
                        const img = block.imgs[0];
                        if (!img) return null;
                        return (
                          <div
                            key={bIdx}
                            onClick={() => onSelectPhoto(img.globalIdx)}
                            className="group cursor-pointer rounded-2xl overflow-hidden bg-[#EBEBEB] shadow-xs hover:opacity-95 transition-opacity aspect-[16/10]"
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
                            />
                          </div>
                        );
                      }

                      // 2-column paired layout
                      return (
                        <div key={bIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {block.imgs.map((img, iIdx) => (
                            <div
                              key={iIdx}
                              onClick={() => onSelectPhoto(img.globalIdx)}
                              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#EBEBEB] shadow-xs hover:opacity-95 transition-opacity aspect-[16/11]"
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
                              />
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
