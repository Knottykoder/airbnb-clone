"use client";

import React from "react";
import { DynamicAmenityIcon } from "../icons/dynamic-amenity-icon";

interface AmenitiesPreviewProps {
  totalCount?: number;
  onShowAllClick: () => void;
}

const ORDERED_PREVIEW_AMENITIES = [
  { id: "kitchen", name: "Kitchen", iconName: "Kitchen", unavailable: false },
  { id: "wifi", name: "Wifi", iconName: "Wifi", unavailable: false },
  { id: "workspace", name: "Dedicated workspace", iconName: "Dedicated workspace", unavailable: false },
  { id: "parking", name: "Free parking on premises", iconName: "Free parking on premises", unavailable: false },
  { id: "pool", name: "Pool", iconName: "Pool", unavailable: false },
  { id: "hottub", name: "Hot tub", iconName: "Hot tub", unavailable: false },
  { id: "pets", name: "Pets allowed", iconName: "Pets allowed", unavailable: false },
  { id: "cameras", name: "Exterior security cameras on property", iconName: "Exterior security cameras on property", unavailable: false },
  { id: "co-alarm", name: "Carbon monoxide alarm", iconName: "Carbon monoxide alarm", unavailable: true },
  { id: "smoke-alarm", name: "Smoke alarm", iconName: "Smoke alarm", unavailable: true },
];

export function AmenitiesPreview({
  totalCount = 50,
  onShowAllClick,
}: AmenitiesPreviewProps) {
  const getAmenityIcon = (iconName: string, unavailable?: boolean) => {
    return (
      <DynamicAmenityIcon
        label={iconName}
        size={24}
        struck={unavailable}
        className="text-[#222222]"
      />
    );
  };

  return (
    <section id="amenities" className="py-8 border-b border-[#EBEBEB] scroll-mt-24" aria-labelledby="amenities-heading">
      <h2 id="amenities-heading" className="text-[22px] font-semibold text-[#222222] mb-6">
        What this place offers
      </h2>

      {/* 2-Column CSS Grid - All 5 Rows aligned across both columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-8">
        {ORDERED_PREVIEW_AMENITIES.map((item) => (
          <div key={item.id} className="flex items-start gap-4 text-[16px] text-[#222222]">
            <div className="shrink-0 w-7 flex justify-center pt-0.5">
              {getAmenityIcon(item.iconName)}
            </div>
            <span className={`leading-snug ${item.unavailable ? "line-through text-[#717171]" : "text-[#222222]"}`}>
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onShowAllClick}
        className="px-6 py-3 border border-[#222222] hover:bg-[#F7F7F7] active:scale-[0.98] transition-all duration-150 rounded-lg text-[15px] font-semibold text-[#222222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        Show all {totalCount} amenities
      </button>
    </section>
  );
}
