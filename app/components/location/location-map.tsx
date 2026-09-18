"use client";

import React, { useState } from "react";
import { HousePinIcon, SearchIcon } from "../icons/airbnb-icons";

interface LocationMapProps {
  location?: string;
  city?: string;
  state?: string;
  country?: string;
}

export function LocationMap({
  city = "Candolim",
  state = "Goa",
  country = "India",
}: LocationMapProps) {
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <section id="location" className="py-8 border-b border-[#EBEBEB] scroll-mt-24" aria-labelledby="location-heading">
      <h2 id="location-heading" className="text-[22px] font-semibold text-[#222222] mb-3">
        Where you&apos;ll be
      </h2>

      <p className="text-[15px] text-[#222222] mb-6">
        {city}, {state}, {country}
      </p>

      {/* Stylized Reference Map Canvas */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-2xl overflow-hidden border border-[#DDDDDD] bg-[#EDF4E8] shadow-xs">
        {/* Soft Grid Lines */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #D5E2CE 1px, transparent 1px),
              linear-gradient(to bottom, #D5E2CE 1px, transparent 1px)
            `,
            backgroundSize: `${48 * zoomLevel}px ${48 * zoomLevel}px`,
          }}
        />

        {/* Coastal Diagonal Ocean (Left) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 1000 500"
        >
          {/* Blue Sea Section */}
          <polygon
            points="0,0 340,0 180,500 0,500"
            fill="#A8D1E7"
          />
        </svg>

        {/* Translucent Green Circular Zones */}
        <div className="absolute top-[38%] left-[26%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#C3E1B9]/80 pointer-events-none" />
        <div className="absolute top-[62%] right-[28%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-[#C3E1B9]/80 pointer-events-none" />

        {/* Center Home Marker */}
        <div className="absolute top-1/2 left-[46%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 drop-shadow-md">
          <HousePinIcon size={44} />
        </div>

        {/* Top-Left Search / Loupe Button */}
        <div className="absolute top-4 left-4 z-10">
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#222222] shadow-[0_2px_6px_rgba(0,0,0,0.15)] border border-[#DDDDDD] hover:bg-[#F7F7F7] transition-colors"
            aria-label="Search map"
          >
            <SearchIcon size={16} />
          </button>
        </div>

        {/* Top-Right Zoom Controls Pill */}
        <div className="absolute top-4 right-4 z-10 flex flex-col bg-white rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.15)] border border-[#DDDDDD] overflow-hidden">
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.15))}
            className="w-10 h-9 flex items-center justify-center text-[20px] font-medium text-[#222222] hover:bg-[#F7F7F7] border-b border-[#EBEBEB] transition-colors"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.15))}
            className="w-10 h-9 flex items-center justify-center text-[20px] font-medium text-[#222222] hover:bg-[#F7F7F7] transition-colors"
            aria-label="Zoom out"
          >
            −
          </button>
        </div>
      </div>

      {/* Subtext */}
      <div className="mt-4 text-[14px] text-[#222222]">
        Exact location will be provided after booking.
      </div>
    </section>
  );
}
