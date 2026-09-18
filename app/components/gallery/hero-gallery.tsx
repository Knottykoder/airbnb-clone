"use client";

import React from "react";
import { PhotoItem, heroImages } from "../../data/photos";
import { GridIcon } from "../icons/airbnb-icons";

interface HeroGalleryProps {
  photos: PhotoItem[];
  onOpenTour: () => void;
  onOpenPhoto: (index: number) => void;
}

export function HeroGallery({ photos, onOpenTour, onOpenPhoto }: HeroGalleryProps) {
  const heroPhotos = heroImages || photos.slice(0, 5);

  return (
    <section className="relative w-full rounded-2xl overflow-hidden" aria-label="Photo gallery">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[340px] sm:h-[420px] md:h-[460px] lg:h-[494px]">
        {/* 1. Main Large Left Image (Spans 2 cols, 2 rows on desktop) */}
        {heroPhotos[0] && (
          <div
            className="relative md:col-span-2 md:row-span-2 overflow-hidden cursor-pointer group bg-[#EBEBEB] h-full"
            onClick={() => onOpenTour()}
            role="button"
            tabIndex={0}
            aria-label="Open photo tour"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenTour();
              }
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={heroPhotos[0].src}
                alt={heroPhotos[0].title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          </div>
        )}

        {/* 2. Top Middle Image */}
        {heroPhotos[1] && (
          <div
            className="hidden md:block relative col-span-1 row-span-1 overflow-hidden cursor-pointer group bg-[#EBEBEB] h-full"
            onClick={() => onOpenTour()}
            role="button"
            tabIndex={0}
            aria-label={`Open photo tour for ${heroPhotos[1].title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenTour();
              }
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={heroPhotos[1].src}
                alt={heroPhotos[1].title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          </div>
        )}

        {/* 3. Top Right Image */}
        {heroPhotos[2] && (
          <div
            className="hidden md:block relative col-span-1 row-span-1 overflow-hidden cursor-pointer group bg-[#EBEBEB] h-full"
            onClick={() => onOpenTour()}
            role="button"
            tabIndex={0}
            aria-label={`Open photo tour for ${heroPhotos[2].title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenTour();
              }
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={heroPhotos[2].src}
                alt={heroPhotos[2].title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          </div>
        )}

        {/* 4. Bottom Middle Image */}
        {heroPhotos[3] && (
          <div
            className="hidden md:block relative col-span-1 row-span-1 overflow-hidden cursor-pointer group bg-[#EBEBEB] h-full"
            onClick={() => onOpenTour()}
            role="button"
            tabIndex={0}
            aria-label={`Open photo tour for ${heroPhotos[3].title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenTour();
              }
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={heroPhotos[3].src}
                alt={heroPhotos[3].title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          </div>
        )}

        {/* 5. Bottom Right Image */}
        {heroPhotos[4] && (
          <div
            className="hidden md:block relative col-span-1 row-span-1 overflow-hidden cursor-pointer group bg-[#EBEBEB] h-full"
            onClick={() => onOpenTour()}
            role="button"
            tabIndex={0}
            aria-label={`Open photo tour for ${heroPhotos[4].title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenTour();
              }
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={heroPhotos[4].src}
                alt={heroPhotos[4].title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          </div>
        )}
      </div>

      {/* Show All Photos Button */}
      <button
        type="button"
        onClick={onOpenTour}
        className="absolute bottom-5 right-5 flex items-center gap-2 bg-white/90 hover:bg-white text-[#222222] border border-[#222222] px-3.5 py-1.5 rounded-lg text-[14px] font-semibold shadow-sm transition-all duration-200 active:scale-[0.98] z-10"
      >
        <GridIcon size={16} />
        <span>Show all {photos.length} photos</span>
      </button>
    </section>
  );
}

