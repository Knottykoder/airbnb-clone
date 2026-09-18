"use client";

import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons/airbnb-icons";

interface DatePickerInlineProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onSelectRange: (start: Date | null, end: Date | null) => void;
  locationName?: string;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function DatePickerInline({
  checkIn,
  checkOut,
  onSelectRange,
  locationName = "Candolim",
}: DatePickerInlineProps) {
  // Base month starting October 2026
  const [currentMonthIndex, setCurrentMonthIndex] = useState(9); // Oct (0-indexed)
  const [currentYear, setCurrentYear] = useState(2026);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const nextMonthIndex = (currentMonthIndex + 1) % 12;
  const nextYear = currentMonthIndex === 11 ? currentYear + 1 : currentYear;

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonthIndex((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonthIndex((m) => m + 1);
    }
  };

  const handleDayClick = (date: Date) => {
    if (!checkIn || (checkIn && checkOut)) {
      onSelectRange(date, null);
    } else if (checkIn && !checkOut) {
      if (date < checkIn) {
        onSelectRange(date, null);
      } else {
        onSelectRange(checkIn, date);
      }
    }
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 5;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDateString = (date: Date | null) => {
    if (!date) return "";
    return `${MONTH_NAMES[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const renderMonthGrid = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    // Empty cells for alignment
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isStart = checkIn && date.toDateString() === checkIn.toDateString();
      const isEnd = checkOut && date.toDateString() === checkOut.toDateString();
      const isInRange =
        checkIn &&
        checkOut &&
        date > checkIn &&
        date < checkOut;
      const isHovered =
        checkIn &&
        !checkOut &&
        hoverDate &&
        date > checkIn &&
        date <= hoverDate;

      let cellStyle = "text-[#222222] hover:border hover:border-[#222222] rounded-full";
      let containerBg = "";

      if (isStart && isEnd) {
        cellStyle = "bg-[#222222] text-white rounded-full font-semibold";
      } else if (isStart) {
        cellStyle = "bg-[#222222] text-white rounded-full font-semibold";
        containerBg = checkOut ? "bg-[#F7F7F7] rounded-l-full" : "";
      } else if (isEnd) {
        cellStyle = "bg-[#222222] text-white rounded-full font-semibold";
        containerBg = "bg-[#F7F7F7] rounded-r-full";
      } else if (isInRange || isHovered) {
        cellStyle = "text-[#222222]";
        containerBg = "bg-[#F7F7F7]";
      }

      days.push(
        <div key={day} className={`h-10 w-10 flex items-center justify-center relative ${containerBg}`}>
          <button
            type="button"
            onClick={() => handleDayClick(date)}
            onMouseEnter={() => setHoverDate(date)}
            onMouseLeave={() => setHoverDate(null)}
            className={`w-9 h-9 flex items-center justify-center text-[14px] transition-colors ${cellStyle}`}
          >
            {day}
          </button>
        </div>
      );
    }

    return days;
  };

  const nights = calculateNights();

  return (
    <section className="py-8" aria-labelledby="calendar-heading">
      {/* Calendar Header */}
      <div className="mb-6">
        <h2 id="calendar-heading" className="text-[22px] font-semibold text-[#222222]">
          {checkIn && checkOut
            ? `${nights} nights in ${locationName}`
            : `Select check-in date`}
        </h2>
        <p className="text-[14px] text-[#717171] mt-1">
          {checkIn && checkOut
            ? `${formatDateString(checkIn)} – ${formatDateString(checkOut)}`
            : "Add your travel dates for exact pricing"}
        </p>
      </div>

      {/* 2-Month Side-by-Side Calendar */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Month 1 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeftIcon size={18} />
              </button>
              <h3 className="font-semibold text-[16px] text-[#222222]">
                {MONTH_NAMES[currentMonthIndex]} {currentYear}
              </h3>
              <div className="w-8 md:hidden" />
            </div>

            {/* Days of week */}
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {DAYS_OF_WEEK.map((d) => (
                <span key={d} className="text-[12px] font-medium text-[#717171]">
                  {d}
                </span>
              ))}
            </div>

            {/* Day Cells */}
            <div className="grid grid-cols-7 gap-y-1 gap-x-0 justify-items-center">
              {renderMonthGrid(currentYear, currentMonthIndex)}
            </div>
          </div>

          {/* Month 2 */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between mb-4">
              <div className="w-8" />
              <h3 className="font-semibold text-[16px] text-[#222222]">
                {MONTH_NAMES[nextMonthIndex]} {nextYear}
              </h3>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors"
                aria-label="Next month"
              >
                <ChevronRightIcon size={18} />
              </button>
            </div>

            {/* Days of week */}
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {DAYS_OF_WEEK.map((d) => (
                <span key={d} className="text-[12px] font-medium text-[#717171]">
                  {d}
                </span>
              ))}
            </div>

            {/* Day Cells */}
            <div className="grid grid-cols-7 gap-y-1 gap-x-0 justify-items-center">
              {renderMonthGrid(nextYear, nextMonthIndex)}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6 mt-4">
          <button
            type="button"
            onClick={() => onSelectRange(null, null)}
            className="text-[14px] font-semibold text-[#222222] underline underline-offset-2 hover:text-black py-1 px-2 rounded hover:bg-[#F7F7F7]"
          >
            Clear dates
          </button>
        </div>
      </div>
    </section>
  );
}
