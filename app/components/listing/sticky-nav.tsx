"use client";

import React from "react";
import { StarIcon } from "../icons/airbnb-icons";

interface StickyNavProps {
  isVisible: boolean;
  activeSection: string;
  onSectionClick: (sectionName: string) => void;
  priceTotal?: number;
  totalNights?: number;
  rating?: number;
  reviewsCount?: number;
  onReserve: () => void;
}

const NAV_ITEMS = ["Photos", "Amenities", "Reviews", "Location"];

export function StickyNav({
  isVisible,
  activeSection,
  onSectionClick,
  priceTotal = 28499,
  totalNights = 5,
  rating = 4.95,
  reviewsCount = 19,
  onReserve,
}: StickyNavProps) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-[#EBEBEB] transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
        isVisible ? "translate-y-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "-translate-y-full pointer-events-none"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Navigation Tabs */}
        <nav className="flex items-center gap-8 h-full" aria-label="Listing content navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection.toLowerCase() === item.toLowerCase();
            return (
              <button
                key={item}
                type="button"
                onClick={() => onSectionClick(item)}
                className={`font-semibold text-[14px] transition-colors py-2 relative flex items-center ${
                  isActive
                    ? "text-[#222222]"
                    : "text-[#717171] hover:text-[#222222]"
                }`}
              >
                <span className="relative py-1">
                  {item}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[2.5px] bg-[#222222] rounded-full animate-in fade-in duration-150" />
                  )}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Mini Booking Trigger (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col text-right">
            <div className="text-[14px] text-[#222222]">
              <span className="font-bold text-[15px]">₹{priceTotal.toLocaleString()}</span>
              <span className="text-[#222222] font-normal"> for {totalNights} nights</span>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-[#222222] justify-end">
              <StarIcon size={11} className="fill-[#222222] text-[#222222]" />
              <span className="font-semibold">{rating.toFixed(2)}</span>
              <span className="text-[#717171]">·</span>
              <span className="text-[#717171] underline cursor-pointer">{reviewsCount} reviews</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onReserve}
            className="bg-[#E00B41] hover:bg-[#D70466] text-white px-6 py-3 rounded-xl text-[15px] font-semibold transition-all duration-150 active:scale-[0.98] shadow-xs"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
