"use client";

import React from "react";
import { StarIcon } from "../icons/airbnb-icons";

interface MobileBookingBarProps {
  pricePerNight: number;
  rating: number;
  checkIn: Date | null;
  checkOut: Date | null;
  onReserve: () => void;
  onSelectDates: () => void;
}

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function MobileBookingBar({
  pricePerNight,
  rating,
  checkIn,
  checkOut,
  onReserve,
  onSelectDates,
}: MobileBookingBarProps) {
  const formatDateRange = () => {
    if (checkIn && checkOut) {
      return `${checkIn.getDate()} ${MONTH_NAMES[checkIn.getMonth()]} – ${checkOut.getDate()} ${MONTH_NAMES[checkOut.getMonth()]}`;
    }
    return "Select dates";
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-[#DDDDDD] px-6 py-3.5 flex items-center justify-between shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-[17px] font-bold text-[#222222]">
            ₹{pricePerNight.toLocaleString()}
          </span>
          <span className="text-[13px] text-[#717171]">night</span>
        </div>

        <button
          type="button"
          onClick={onSelectDates}
          className="text-[13px] font-semibold text-[#222222] underline text-left block"
        >
          {formatDateRange()}
        </button>
      </div>

      <button
        type="button"
        onClick={onReserve}
        className="bg-[#FF385C] hover:bg-[#E00B41] active:scale-[0.98] text-white px-7 py-3 rounded-lg text-[16px] font-semibold transition-all duration-150 shadow-sm"
      >
        Reserve
      </button>
    </div>
  );
}
