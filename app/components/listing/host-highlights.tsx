"use client";

import React from "react";
import {
  DoorStaffIcon,
  OutdoorEntertainmentIcon,
  PropellerFanIcon,
  CheckIcon,
} from "../icons/airbnb-icons";

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

interface HostHighlightsProps {
  hostName: string;
  yearsHosting: number;
  highlights: Highlight[];
}

export function HostHighlights({
  hostName = "Mirashya Homes",
  yearsHosting = 2,
  highlights,
}: HostHighlightsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "outdoor":
        return <OutdoorEntertainmentIcon size={26} className="text-[#222222]" />;
      case "cool":
        return <PropellerFanIcon size={26} className="text-[#222222]" />;
      case "self-checkin":
      default:
        return <DoorStaffIcon size={26} className="text-[#222222]" />;
    }
  };

  return (
    <div className="py-6 border-b border-[#EBEBEB] space-y-6">
      {/* Host Row */}
      <div className="flex items-center gap-4 pb-2">
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-bold text-[10px] tracking-wider text-center p-1 uppercase select-none">
            Mirashya
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#FF385C] rounded-full flex items-center justify-center text-white shadow-xs">
            <CheckIcon size={9} className="text-white stroke-[3]" />
          </div>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold text-[#222222] leading-tight">
            Hosted by {hostName}
          </h3>
          <p className="text-[14px] text-[#717171] leading-tight mt-0.5">
            {yearsHosting} years hosting
          </p>
        </div>
      </div>

      {/* Highlights List */}
      <div className="space-y-6 pt-1">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="shrink-0 pt-0.5 text-[#222222]">
              {getIcon(item.icon)}
            </div>
            <div>
              <h4 className="text-[16px] font-semibold text-[#222222] leading-tight">
                {item.title}
              </h4>
              <p className="text-[14px] text-[#717171] mt-1 leading-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
