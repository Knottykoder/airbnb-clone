"use client";

import React, { useState } from "react";
import { SearchIcon } from "../icons/airbnb-icons";

interface SearchPillProps {
  onSearchClick?: () => void;
}

export function SearchPill({ onSearchClick }: SearchPillProps) {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  return (
    <div
      className="inline-flex items-center bg-white border border-[#DDDDDD] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-shadow duration-200 pl-4 pr-2 py-1.5 cursor-pointer text-sm font-medium"
      onClick={onSearchClick}
      role="button"
      tabIndex={0}
      aria-label="Search destinations, dates, and guests"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSearchClick?.();
        }
      }}
    >
      <button
        type="button"
        className="px-3 py-1 font-semibold text-[#222222] hover:bg-black/5 rounded-full transition-colors text-[14px]"
        onClick={(e) => {
          e.stopPropagation();
          setActiveSegment("where");
        }}
      >
        Anywhere
      </button>

      <span className="h-6 w-[1px] bg-[#DDDDDD] mx-1" aria-hidden="true" />

      <button
        type="button"
        className="px-3 py-1 font-semibold text-[#222222] hover:bg-black/5 rounded-full transition-colors text-[14px]"
        onClick={(e) => {
          e.stopPropagation();
          setActiveSegment("when");
        }}
      >
        Any week
      </button>

      <span className="h-6 w-[1px] bg-[#DDDDDD] mx-1" aria-hidden="true" />

      <button
        type="button"
        className="px-3 py-1 font-normal text-[#717171] hover:bg-black/5 rounded-full transition-colors text-[14px]"
        onClick={(e) => {
          e.stopPropagation();
          setActiveSegment("who");
        }}
      >
        Add guests
      </button>

      <div className="ml-2 w-8 h-8 rounded-full bg-[#FF385C] flex items-center justify-center text-white shrink-0 hover:bg-[#E00B41] transition-colors">
        <SearchIcon size={14} className="stroke-[3]" />
      </div>
    </div>
  );
}
