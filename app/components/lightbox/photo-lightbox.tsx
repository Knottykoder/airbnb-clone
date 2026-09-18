"use client";

import React, { useState, useEffect, useRef } from "react";
import { PhotoItem } from "../../data/photos";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  HeartIcon,
  ShareIcon,
} from "../icons/airbnb-icons";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";

interface PhotoLightboxProps {
  photos: PhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  onShareClick: () => void;
}

export function PhotoLightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
  onShareClick,
}: PhotoLightboxProps) {
  const isOpen = currentIndex !== null;
  useLockBodyScroll(isOpen);

  const [direction, setDirection] = useState<"next" | "prev" | "none">("none");
  const [isSaved, setIsSaved] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const activePhoto = currentIndex !== null ? photos[currentIndex] : null;

  const handlePrev = () => {
    if (currentIndex === null) return;
    setDirection("prev");
    const prevIndex = (currentIndex + photos.length - 1) % photos.length;
    onNavigate(prevIndex);
  };

  const handleNext = () => {
    if (currentIndex === null) return;
    setDirection("next");
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(nextIndex);
  };

  useKeyboardNavigation({
    onEscape: onClose,
    onArrowLeft: handlePrev,
    onArrowRight: handleNext,
    enabled: isOpen,
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  if (!isOpen || !activePhoto || currentIndex === null) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${currentIndex + 1} of ${photos.length}: ${activePhoto.title}`}
      className="fixed inset-0 z-60 bg-[#111111] text-white flex flex-col justify-between select-none animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar */}
      <header className="px-6 h-18 flex items-center justify-between z-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
        >
          <CloseIcon size={20} />
        </button>

        <div className="text-[14px] font-medium tracking-wide">
          {currentIndex + 1} / {photos.length}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onShareClick}
            aria-label="Share this photo"
            className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
          >
            <ShareIcon size={18} />
          </button>
          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            aria-label="Save to wishlist"
            className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
          >
            <HeartIcon size={18} filled={isSaved} />
          </button>
        </div>
      </header>

      {/* Main Image Center Stage with Prev/Next Controls */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 overflow-hidden">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 items-center justify-center text-white transition-all z-10"
        >
          <ChevronLeftIcon size={24} />
        </button>

        {/* Center Main Photo Container */}
        <div className="relative max-w-5xl max-h-[72vh] flex items-center justify-center">
          <img
            key={activePhoto.id}
            src={activePhoto.src}
            alt={activePhoto.title}
            className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-260 ease-[cubic-bezier(0.2,0,0,1)] animate-in fade-in"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 items-center justify-center text-white transition-all z-10"
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>

      {/* Bottom Caption & Mini Thumbnails Strip */}
      <footer className="px-6 py-4 flex flex-col items-center justify-center z-10 text-center max-w-2xl mx-auto">
        <h3 className="text-[15px] font-semibold text-white/90 leading-tight">
          {activePhoto.title}
        </h3>
        {activePhoto.description && (
          <p className="text-[13px] text-white/60 mt-1 line-clamp-1">
            {activePhoto.description}
          </p>
        )}
      </footer>
    </div>
  );
}
