"use client";

import React from "react";
import { ReviewChipItem } from "../../data/reviews";

interface ReviewTopicChipsProps {
  chips: ReviewChipItem[];
  activeChipId: string;
  onSelectChip: (chipId: string) => void;
}

export function ReviewTopicChips({
  chips,
  activeChipId,
  onSelectChip,
}: ReviewTopicChipsProps) {
  return (
    <div
      className="flex items-center gap-3 overflow-x-auto py-3 scrollbar-none"
      aria-label="Filter reviews by topic"
    >
      {chips.map((chip) => {
        const isActive = activeChipId === chip.id;

        return (
          <button
            key={chip.id}
            type="button"
            onClick={() => onSelectChip(isActive ? "all" : chip.id)}
            className={`h-11 px-4 rounded-2xl text-[14px] whitespace-nowrap transition-all duration-150 inline-flex items-center gap-2 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-[0.98] ${
              isActive
                ? "bg-[#222222] text-white border border-[#222222]"
                : "bg-white text-[#222222] border border-[#EBEBEB] hover:border-[#DDDDDD]"
            }`}
          >
            {chip.img ? (
              <img
                src={chip.img}
                alt=""
                className="w-5 h-5 object-contain shrink-0"
              />
            ) : (
              <span className="text-[16px]">{chip.emoji}</span>
            )}
            <span className="font-semibold text-[14px]">{chip.label}</span>
            <span className={`text-[13px] font-normal ml-0.5 ${isActive ? "text-white/80" : "text-[#717171]"}`}>
              {chip.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
