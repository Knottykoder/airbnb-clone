"use client";

import React from "react";
import {
  CheckCircleIcon,
  FoldedMapIcon,
  KeyOutlinedIcon,
  LaurelLeft,
  LaurelRight,
  PriceTagIcon,
  SpeechBubbleIcon,
  SprayBottleIcon,
} from "../icons/airbnb-icons";
import { ReviewCategoryScore } from "../../data/reviews";

interface ReviewsSummaryProps {
  overallRating: number;
  totalReviews: number;
  ratingBreakdown: ReviewCategoryScore[];
}

export function ReviewsSummary({
  overallRating,
  ratingBreakdown,
}: ReviewsSummaryProps) {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "spray":
        return <SprayBottleIcon size={30} className="text-[#222222]" />;
      case "check-circle":
        return <CheckCircleIcon size={30} className="text-[#222222]" />;
      case "key":
        return <KeyOutlinedIcon size={30} className="text-[#222222]" />;
      case "speech":
        return <SpeechBubbleIcon size={30} className="text-[#222222]" />;
      case "map":
        return <FoldedMapIcon size={30} className="text-[#222222]" />;
      case "tag":
      default:
        return <PriceTagIcon size={30} className="text-[#222222]" />;
    }
  };

  return (
    <div className="py-8">
      {/* Top Center Laurel Header */}
      <div className="flex flex-col items-center justify-center text-center pb-8">
        <div className="flex items-center gap-3">
          <LaurelLeft className="w-10 h-20 text-[#222222]" />
          <div className="text-[72px] sm:text-[88px] font-bold text-[#222222] tracking-tighter leading-none select-none">
            {overallRating.toFixed(2)}
          </div>
          <LaurelRight className="w-10 h-20 text-[#222222] -scale-x-100" />
        </div>

        <h3 className="font-semibold text-[20px] text-[#222222] mt-3">
          Guest favourite
        </h3>
        <p className="text-[14px] text-[#717171] max-w-sm mt-1 leading-normal">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <a href="#" className="text-[13px] text-[#222222] underline font-medium mt-2">
          How reviews work
        </a>
      </div>

      {/* 7-Column Rating Breakdown Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 py-8 text-left">
        {/* Column 1: Overall rating bars */}
        <div className="flex flex-col justify-between pr-2">
          <div className="text-[14px] font-semibold text-[#222222]">Overall rating</div>
          <div className="space-y-1.5 my-2">
            <div className="flex items-center gap-2 text-[11px] text-[#717171]">
              <span>5</span>
              <div className="flex-1 h-1 bg-[#222222] rounded-full" />
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#717171]">
              <span>4</span>
              <div className="flex-1 h-1 bg-[#DDDDDD] rounded-full" />
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#717171]">
              <span>3</span>
              <div className="flex-1 h-1 bg-[#DDDDDD] rounded-full" />
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#717171]">
              <span>2</span>
              <div className="flex-1 h-1 bg-[#DDDDDD] rounded-full" />
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#717171]">
              <span>1</span>
              <div className="flex-1 h-1 bg-[#DDDDDD] rounded-full" />
            </div>
          </div>
        </div>

        {/* Columns 2-7: Sub-category score columns with border dividers */}
        {ratingBreakdown.map((category) => (
          <div
            key={category.name}
            className="flex flex-col border-l border-[#DDDDDD] pl-4 sm:pl-6"
          >
            <div>
              <div className="text-[14px] font-semibold text-[#222222] mb-0.5">
                {category.name}
              </div>
              <div className="text-[18px] font-bold text-[#222222]">
                {category.score.toFixed(1)}
              </div>
            </div>
            <div className="mt-4 text-[#222222]">{getCategoryIcon(category.iconName)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
