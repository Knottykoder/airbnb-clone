"use client";

import React, { useState, useRef } from "react";
import { PhotoItem } from "../../data/photos";
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon, ShareIcon } from "../icons/airbnb-icons";

interface MobileGalleryProps {
  photos: PhotoItem[];
  onOpenTour: () => void;
  onOpenPhoto: (index: number) => void;
  onShareClick: () => void;
}

export function MobileGallery({ photos, onOpenTour, onOpenPhoto, onShareClick }: MobileGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50 && currentIndex < photos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < -50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < photos.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div
      className="md:hidden relative w-full h-[280px] sm:h-[340px] overflow-hidden -mx-4 sm:mx-0 sm:rounded-xl bg-[#EBEBEB]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={() => onOpenTour()}
    >
      <img
        src={photos[currentIndex]?.src}
        alt={photos[currentIndex]?.title}
        className="w-full h-full object-cover select-none"
      />

      {/* Floating Action Buttons */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onShareClick();
          }}
          className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md text-[#222222]"
          aria-label="Share listing"
        >
          <ShareIcon size={14} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md text-[#222222]"
          aria-label="Save to wishlist"
        >
          <HeartIcon size={14} filled={isSaved} />
        </button>
      </div>

      {/* Previous / Next Arrow Controls */}
      {currentIndex > 0 && (
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md text-[#222222] z-10"
          aria-label="Previous photo"
        >
          <ChevronLeftIcon size={16} />
        </button>
      )}

      {currentIndex < photos.length - 1 && (
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md text-[#222222] z-10"
          aria-label="Next photo"
        >
          <ChevronRightIcon size={16} />
        </button>
      )}

      {/* Photo Counter Badge */}
      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-[12px] font-medium px-2.5 py-1 rounded-md tracking-wider">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
}
