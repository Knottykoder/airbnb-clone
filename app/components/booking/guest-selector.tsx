"use client";

import React from "react";

export interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

interface GuestSelectorProps {
  guests: GuestCounts;
  maxGuests?: number;
  onChange: (guests: GuestCounts) => void;
  onClose: () => void;
}

export function GuestSelector({
  guests,
  maxGuests = 3,
  onChange,
  onClose,
}: GuestSelectorProps) {
  const totalGuests = guests.adults + guests.children;

  const updateCount = (key: keyof GuestCounts, delta: number) => {
    const newGuests = { ...guests };
    if (delta > 0) {
      if (key === "adults" || key === "children") {
        if (totalGuests < maxGuests) {
          newGuests[key] += 1;
        }
      } else if (key === "infants" && guests.infants < 5) {
        newGuests.infants += 1;
      } else if (key === "pets" && guests.pets < 2) {
        newGuests.pets += 1;
      }
    } else {
      if (key === "adults" && guests.adults > 1) {
        newGuests.adults -= 1;
      } else if (key !== "adults" && newGuests[key] > 0) {
        newGuests[key] -= 1;
      }
    }
    onChange(newGuests);
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-full sm:w-[320px] bg-white rounded-2xl border border-[#DDDDDD] shadow-[0_6px_20px_rgba(0,0,0,0.15)] p-5 z-40 animate-in fade-in duration-150">
      <div className="space-y-5">
        {/* Adults */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[16px] font-semibold text-[#222222]">Adults</div>
            <div className="text-[13px] text-[#717171]">Age 13+</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={guests.adults <= 1}
              onClick={() => updateCount("adults", -1)}
              className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:border-[#EBEBEB] disabled:cursor-not-allowed transition-colors"
              aria-label="Decrease adults"
            >
              −
            </button>
            <span className="w-5 text-center font-medium text-[15px]">{guests.adults}</span>
            <button
              type="button"
              disabled={totalGuests >= maxGuests}
              onClick={() => updateCount("adults", 1)}
              className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:border-[#EBEBEB] disabled:cursor-not-allowed transition-colors"
              aria-label="Increase adults"
            >
              +
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[16px] font-semibold text-[#222222]">Children</div>
            <div className="text-[13px] text-[#717171]">Ages 2–12</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={guests.children <= 0}
              onClick={() => updateCount("children", -1)}
              className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:border-[#EBEBEB] disabled:cursor-not-allowed transition-colors"
              aria-label="Decrease children"
            >
              −
            </button>
            <span className="w-5 text-center font-medium text-[15px]">{guests.children}</span>
            <button
              type="button"
              disabled={totalGuests >= maxGuests}
              onClick={() => updateCount("children", 1)}
              className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:border-[#EBEBEB] disabled:cursor-not-allowed transition-colors"
              aria-label="Increase children"
            >
              +
            </button>
          </div>
        </div>

        {/* Infants */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[16px] font-semibold text-[#222222]">Infants</div>
            <div className="text-[13px] text-[#717171]">Under 2</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={guests.infants <= 0}
              onClick={() => updateCount("infants", -1)}
              className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:border-[#EBEBEB] disabled:cursor-not-allowed transition-colors"
              aria-label="Decrease infants"
            >
              −
            </button>
            <span className="w-5 text-center font-medium text-[15px]">{guests.infants}</span>
            <button
              type="button"
              disabled={guests.infants >= 5}
              onClick={() => updateCount("infants", 1)}
              className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:border-[#EBEBEB] disabled:cursor-not-allowed transition-colors"
              aria-label="Increase infants"
            >
              +
            </button>
          </div>
        </div>

        {/* Pets */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[16px] font-semibold text-[#222222]">Pets</div>
            <div className="text-[13px] text-[#717171]">Bringing a service animal?</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={guests.pets <= 0}
              onClick={() => updateCount("pets", -1)}
              className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:border-[#EBEBEB] disabled:cursor-not-allowed transition-colors"
              aria-label="Decrease pets"
            >
              −
            </button>
            <span className="w-5 text-center font-medium text-[15px]">{guests.pets}</span>
            <button
              type="button"
              disabled={guests.pets >= 2}
              onClick={() => updateCount("pets", 1)}
              className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-[#222222] hover:text-[#222222] disabled:opacity-30 disabled:border-[#EBEBEB] disabled:cursor-not-allowed transition-colors"
              aria-label="Increase pets"
            >
              +
            </button>
          </div>
        </div>

        <p className="text-[12px] text-[#717171] pt-1">
          This place has a maximum of {maxGuests} guests, not including infants.
        </p>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="text-[14px] font-semibold text-[#222222] underline hover:text-black py-1 px-3 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
