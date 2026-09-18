"use client";

import React, { useState } from "react";
import { ChevronDownIcon, FlagIcon } from "../icons/airbnb-icons";
import { DatePickerPopover } from "../calendar/date-picker-popover";
import { GuestCounts, GuestSelector } from "./guest-selector";

interface BookingCardProps {
  priceTotal: number;
  totalNights?: number;
  checkInDateStr?: string;
  checkOutDateStr?: string;
  cancellationDeadline?: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: GuestCounts;
  onSelectDates: (start: Date | null, end: Date | null) => void;
  onSelectGuests: (guests: GuestCounts) => void;
  onReserve: () => void;
}

export function BookingCard({
  priceTotal = 28499,
  totalNights = 5,
  checkInDateStr = "10/18/2026",
  checkOutDateStr = "10/23/2026",
  cancellationDeadline = "17 October",
  checkIn,
  checkOut,
  guests,
  onSelectDates,
  onSelectGuests,
  onReserve,
}: BookingCardProps) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);

  const totalGuests = guests.adults + guests.children;
  const guestsLabel = `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`;

  const formatDisplayDate = (d: Date | null, fallback: string) => {
    if (!d) return fallback;
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  };

  return (
    <aside className="w-full">
      {/* Top Promo Banner */}
      <div className="bg-white border border-[#DDDDDD] rounded-xl p-3 mb-5 flex items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-[#E8F5E9] flex items-center justify-center text-[18px]">
            🏷️
          </div>
          <div className="text-[13px] text-[#222222] leading-tight">
            <div className="font-normal">Get 10% off your next stay.</div>
            <a href="#" className="underline text-[#222222] text-[12px] font-medium">
              Terms apply
            </a>
          </div>
        </div>

        <button
          type="button"
          className="bg-[#F7F7F7] hover:bg-[#EBEBEB] text-[#222222] text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors border border-[#DDDDDD]"
        >
          Claim
        </button>
      </div>

      {/* Main Reservation Card Box */}
      <div className="bg-white border border-[#DDDDDD] rounded-2xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        {/* Price Header */}
        <div className="flex items-baseline gap-1.5 mb-5">
          <span className="text-[22px] font-bold text-[#222222]">
            ₹{priceTotal.toLocaleString()}
          </span>
          <span className="text-[15px] text-[#222222] font-normal">
            for {totalNights} nights
          </span>
        </div>

        {/* Boxed Inputs */}
        <div className="border border-[#B0B0B0] rounded-xl overflow-visible relative mb-4 bg-white">
          {/* Check-in / Checkout Row */}
          <div className="grid grid-cols-2 border-b border-[#B0B0B0]">
            <button
              type="button"
              onClick={() => {
                setGuestsOpen(false);
                setCalendarOpen(!calendarOpen);
              }}
              className="p-3 text-left border-r border-[#B0B0B0] hover:bg-[#F7F7F7] rounded-tl-xl transition-colors focus:outline-none"
            >
              <div className="text-[10px] font-bold tracking-wider text-[#222222] uppercase">
                Check-in
              </div>
              <div className="text-[13px] text-[#222222] mt-0.5 truncate font-normal">
                {formatDisplayDate(checkIn, checkInDateStr)}
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setGuestsOpen(false);
                setCalendarOpen(!calendarOpen);
              }}
              className="p-3 text-left hover:bg-[#F7F7F7] rounded-tr-xl transition-colors focus:outline-none"
            >
              <div className="text-[10px] font-bold tracking-wider text-[#222222] uppercase">
                Checkout
              </div>
              <div className="text-[13px] text-[#222222] mt-0.5 truncate font-normal">
                {formatDisplayDate(checkOut, checkOutDateStr)}
              </div>
            </button>
          </div>

          {/* Guests Row */}
          <button
            type="button"
            onClick={() => {
              setCalendarOpen(false);
              setGuestsOpen(!guestsOpen);
            }}
            className="w-full p-3 text-left hover:bg-[#F7F7F7] rounded-b-xl transition-colors flex items-center justify-between focus:outline-none"
          >
            <div>
              <div className="text-[10px] font-bold tracking-wider text-[#222222] uppercase">
                Guests
              </div>
              <div className="text-[13px] text-[#222222] mt-0.5 truncate font-normal">
                {guestsLabel}
              </div>
            </div>
            <ChevronDownIcon size={18} className="text-[#222222] shrink-0" />
          </button>

          {/* Date Picker Popover */}
          {calendarOpen && (
            <DatePickerPopover
              checkIn={checkIn}
              checkOut={checkOut}
              onSelectRange={(start, end) => {
                onSelectDates(start, end);
                if (start && end) setCalendarOpen(false);
              }}
              onClose={() => setCalendarOpen(false)}
            />
          )}

          {/* Guest Selector Dropdown */}
          {guestsOpen && (
            <GuestSelector
              guests={guests}
              onChange={onSelectGuests}
              onClose={() => setGuestsOpen(false)}
            />
          )}
        </div>

        {/* Cancellation Notice Pill */}
        <div className="bg-[#F7F7F7] text-[#222222] text-[13px] font-medium py-3 px-4 rounded-xl text-center mb-4">
          Free cancellation before <span className="font-bold">{cancellationDeadline}</span>
        </div>

        {/* Reserve CTA Button */}
        <button
          type="button"
          onClick={onReserve}
          className="w-full bg-[#E00B41] hover:bg-[#D70466] active:scale-[0.98] text-white font-semibold text-[16px] py-3.5 rounded-lg shadow-sm transition-all duration-150"
        >
          Reserve
        </button>

        <p className="text-center text-[13px] text-[#717171] mt-3">
          You won&apos;t be charged yet
        </p>
      </div>

      {/* Report Listing */}
      <div className="text-center mt-6">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-[13px] text-[#717171] hover:text-[#222222] underline py-1"
        >
          <FlagIcon size={14} />
          <span>Report this listing</span>
        </button>
      </div>
    </aside>
  );
}
