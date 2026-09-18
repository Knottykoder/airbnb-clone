"use client";

import React from "react";
import { RoomItem } from "../../data/rooms";

interface SleepingArrangementsProps {
  rooms: RoomItem[];
  onOpenTour?: () => void;
}

export function SleepingArrangements({ rooms, onOpenTour }: SleepingArrangementsProps) {
  return (
    <section className="py-8 border-b border-[#EBEBEB]" aria-labelledby="sleep-heading">
      <h2 id="sleep-heading" className="text-[22px] font-semibold text-[#222222] mb-6">
        Where you&apos;ll sleep
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            onClick={onOpenTour}
            className="flex flex-col cursor-pointer group"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#EBEBEB] aspect-[16/10] mb-3 shadow-xs">
              <img
                src={room.photoSrc}
                alt={room.name}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
              />
            </div>
            <h3 className="text-[16px] font-semibold text-[#222222] group-hover:underline">{room.name}</h3>
            <p className="text-[14px] text-[#717171] mt-0.5">{room.bedConfig}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
