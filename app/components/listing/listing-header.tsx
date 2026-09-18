"use client";

import React, { useState } from "react";
import { HeartIcon, ShareIcon, StarIcon } from "../icons/airbnb-icons";

interface ListingHeaderProps {
  title: string;
  rating: number;
  reviewsCount: number;
  location: string;
  isSuperhost?: boolean;
  onShareClick: () => void;
  onReviewsClick?: () => void;
  onLocationClick?: () => void;
}

export function ListingHeader({
  title,
  rating,
  reviewsCount,
  location,
  isSuperhost = true,
  onShareClick,
  onReviewsClick,
  onLocationClick,
}: ListingHeaderProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [justToggled, setJustToggled] = useState(false);

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
    setJustToggled(true);
    setTimeout(() => setJustToggled(false), 300);
  };

  return (
    <section className="pt-6 pb-4" aria-label="Listing title and actions">
      <div className="flex flex-col gap-1">
        {/* Title */}
        <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-semibold text-[#222222] tracking-[-0.02em] leading-tight md:leading-[1.2]">
          {title}
        </h1>

        {/* Subtitle Details & Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 pt-1">
          <div className="flex flex-wrap items-center gap-1.5 text-[14px] font-medium text-[#222222]">
            <span className="flex items-center gap-1">
              <StarIcon size={14} className="fill-[#222222] text-[#222222]" />
              <span className="font-semibold">{rating.toFixed(2)}</span>
            </span>

            <span className="text-[#717171]">·</span>

            <button
              type="button"
              onClick={onReviewsClick}
              className="font-semibold underline underline-offset-2 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
            >
              {reviewsCount} reviews
            </button>

            {isSuperhost && (
              <>
                <span className="text-[#717171]">·</span>
                <span className="text-[#717171] font-normal">Superhost</span>
              </>
            )}

            <span className="text-[#717171]">·</span>

            <button
              type="button"
              onClick={onLocationClick}
              className="font-semibold underline underline-offset-2 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
            >
              {location}
            </button>
          </div>

          {/* Action Buttons: Share & Save */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onShareClick}
              className="flex items-center gap-2 px-3 py-2 text-[14px] font-semibold text-[#222222] underline underline-offset-2 hover:bg-[#F7F7F7] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <ShareIcon size={16} />
              <span>Share</span>
            </button>

            <button
              type="button"
              onClick={handleSaveToggle}
              className="flex items-center gap-2 px-3 py-2 text-[14px] font-semibold text-[#222222] underline underline-offset-2 hover:bg-[#F7F7F7] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <span className={`transition-transform duration-200 ${justToggled ? "scale-125" : "scale-100"}`}>
                <HeartIcon size={16} filled={isSaved} />
              </span>
              <span>{isSaved ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
