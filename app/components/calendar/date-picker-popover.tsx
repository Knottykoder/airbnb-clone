"use client";

import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "../icons/airbnb-icons";

interface DatePickerPopoverProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onSelectRange: (start: Date | null, end: Date | null) => void;
  onClose: () => void;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function DatePickerPopover({
  checkIn,
  checkOut,
  onSelectRange,
  onClose,
}: DatePickerPopoverProps) {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(9); // Oct 2026
  const [currentYear, setCurrentYear] = useState(2026);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

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

  const renderMonthGrid = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-9 w-9" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isStart = checkIn && date.toDateString() === checkIn.toDateString();
      const isEnd = checkOut && date.toDateString() === checkOut.toDateString();
      const isInRange = checkIn && checkOut && date > checkIn && date < checkOut;
      const isHovered = checkIn && !checkOut && hoverDate && date > checkIn && date <= hoverDate;

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
        <div key={day} className={`h-9 w-9 flex items-center justify-center relative ${containerBg}`}>
          <button
            type="button"
            onClick={() => handleDayClick(date)}
            onMouseEnter={() => setHoverDate(date)}
            onMouseLeave={() => setHoverDate(null)}
            className={`w-8 h-8 flex items-center justify-center text-[13px] transition-colors ${cellStyle}`}
          >
            {day}
          </button>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-[#DDDDDD] shadow-[0_6px_20px_rgba(0,0,0,0.15)] p-4 z-40 animate-in fade-in duration-150">
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="p-1.5 rounded-full hover:bg-[#F7F7F7] text-[#222222]"
          aria-label="Previous month"
        >
          <ChevronLeftIcon size={16} />
        </button>
        <span className="font-semibold text-[15px] text-[#222222]">
          {MONTH_NAMES[currentMonthIndex]} {currentYear}
        </span>
        <button
          type="button"
          onClick={handleNextMonth}
          className="p-1.5 rounded-full hover:bg-[#F7F7F7] text-[#222222]"
          aria-label="Next month"
        >
          <ChevronRightIcon size={16} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-1">
        {DAYS_OF_WEEK.map((d) => (
          <span key={d} className="text-[11px] font-medium text-[#717171]">
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1 justify-items-center mb-3">
        {renderMonthGrid(currentYear, currentMonthIndex)}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#EBEBEB]">
        <button
          type="button"
          onClick={() => onSelectRange(null, null)}
          className="text-[13px] font-semibold text-[#222222] underline hover:text-black py-1 px-2"
        >
          Clear dates
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-[13px] font-semibold bg-[#222222] text-white px-3 py-1.5 rounded-lg hover:bg-black"
        >
          Close
        </button>
      </div>
    </div>
  );
}
