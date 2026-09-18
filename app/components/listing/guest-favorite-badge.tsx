"use client";

import React from "react";
import { LaurelLeft, LaurelRight, StarIcon } from "../icons/airbnb-icons";

interface GuestFavoriteBadgeProps {
  rating: number;
  reviewsCount: number;
}

export function GuestFavoriteBadge({ rating, reviewsCount }: GuestFavoriteBadgeProps) {
  return (
    <div className="border border-[#DDDDDD] rounded-2xl p-4 sm:p-5 my-6 flex items-center justify-between gap-4 bg-white shadow-xs">
      {/* Left Badge with Laurel Wreaths */}
      <div className="flex items-center gap-1.5 shrink-0">
        <LaurelLeft className="w-5 h-8 text-[#222222]" />
        <div className="text-center font-bold text-[14px] sm:text-[15px] leading-[1.1] text-[#222222]">
          Guest<br />favourite
        </div>
        <LaurelRight className="w-5 h-8 text-[#222222] -scale-x-100" />
      </div>

      {/* Middle Description */}
      <div className="hidden md:block text-[14px] text-[#222222] font-normal leading-snug max-w-xs">
        One of the most loved homes on Airbnb, according to guests
      </div>

      {/* Right Stats Columns */}
      <div className="flex items-center gap-6 divide-x divide-[#DDDDDD] shrink-0">
        {/* Rating */}
        <div className="text-center pl-2">
          <div className="text-[17px] font-bold text-[#222222]">{rating.toFixed(2)}</div>
          <div className="flex items-center justify-center gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} size={10} className="fill-[#222222] text-[#222222]" />
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="text-center pl-6">
          <div className="text-[17px] font-bold text-[#222222]">{reviewsCount}</div>
          <div className="text-[12px] text-[#222222] font-medium">Reviews</div>
        </div>
      </div>
    </div>
  );
}
