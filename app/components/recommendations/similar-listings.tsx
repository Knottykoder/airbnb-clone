"use client";

import React, { useState } from "react";
import { NearbyStay } from "../../data/nearby-stays";
import { HeartIcon, StarIcon } from "../icons/airbnb-icons";

interface SimilarListingsProps {
  stays: NearbyStay[];
}

export function SimilarListings({ stays }: SimilarListingsProps) {
  const [savedIds, setSavedIds] = useState<Record<string, boolean>>({});

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSavedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-12 border-t border-[#EBEBEB]" aria-labelledby="similar-heading">
      <h2 id="similar-heading" className="text-[22px] font-semibold text-[#222222] mb-6">
        More stays nearby
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stays.map((stay) => {
          const isSaved = savedIds[stay.id] || false;

          return (
            <div
              key={stay.id}
              className="group cursor-pointer flex flex-col"
              tabIndex={0}
              role="button"
              aria-label={`View stay: ${stay.title}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[20/19] rounded-xl overflow-hidden bg-[#EBEBEB] mb-3">
                <img
                  src={stay.image}
                  alt={stay.title}
                  className="w-full h-full object-cover group-hover:scale-[1.045] transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
                />

                {/* Heart Button */}
                <button
                  type="button"
                  onClick={(e) => toggleSave(stay.id, e)}
                  aria-label="Save to wishlist"
                  className="absolute top-3 right-3 p-1 text-white hover:scale-110 active:scale-95 transition-transform z-10 drop-shadow-md"
                >
                  <HeartIcon size={20} filled={isSaved} />
                </button>
              </div>

              {/* Information */}
              <div className="flex justify-between items-start text-[15px] leading-snug">
                <h3 className="font-semibold text-[#222222] line-clamp-1 group-hover:text-black">
                  {stay.location}
                </h3>
                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <StarIcon size={12} className="fill-[#222222] text-[#222222]" />
                  <span className="text-[14px] font-medium text-[#222222]">
                    {stay.rating.toFixed(2)}
                  </span>
                </div>
              </div>

              <p className="text-[14px] text-[#717171] line-clamp-1 mt-0.5">
                {stay.title}
              </p>
              <p className="text-[14px] text-[#717171]">{stay.dates}</p>

              <div className="mt-1.5 text-[15px]">
                <span className="font-semibold text-[#222222]">
                  ₹{stay.pricePerNight.toLocaleString()}
                </span>
                <span className="text-[#717171]"> night</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
