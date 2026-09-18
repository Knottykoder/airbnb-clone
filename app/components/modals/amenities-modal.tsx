"use client";

import React, { useRef, useEffect } from "react";
import { amenityGroups, AmenityItem } from "../../data/amenities";
import { CloseIcon } from "../icons/airbnb-icons";
import { DynamicAmenityIcon } from "../icons/dynamic-amenity-icon";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";

interface AmenitiesModalProps {
  amenities?: AmenityItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function AmenitiesModal({ isOpen, onClose }: AmenitiesModalProps) {
  useLockBodyScroll(isOpen);
  useKeyboardNavigation({ onEscape: onClose, enabled: isOpen });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="amenities-modal-title"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[780px] max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <header className="sticky top-0 bg-white border-b border-[#EBEBEB] px-6 h-16 flex items-center z-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close amenities modal"
            className="w-9 h-9 rounded-full hover:bg-[#F7F7F7] flex items-center justify-center text-[#222222] transition-colors"
          >
            <CloseIcon size={16} />
          </button>
        </header>

        {/* Scrollable Modal Content */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 sm:px-10 py-8">
          <h2 id="amenities-modal-title" className="text-[22px] sm:text-[24px] font-semibold text-[#222222] mb-8">
            What this place offers
          </h2>

          {/* 12 Categorized Sections */}
          <div className="space-y-10">
            {amenityGroups.map((group) => (
              <section key={group.title} aria-labelledby={`amen-group-${group.title.replace(/\s+/g, "-")}`}>
                <h3
                  id={`amen-group-${group.title.replace(/\s+/g, "-")}`}
                  className="text-[18px] font-semibold text-[#222222] mb-4"
                >
                  {group.title}
                </h3>

                <div className="divide-y divide-[#EBEBEB]">
                  {group.items.map((item, index) => (
                    <div
                      key={`${group.title}-${item.label}-${index}`}
                      className="flex items-center gap-4 py-4.5"
                    >
                      <div className="w-7 h-7 flex items-center justify-center shrink-0">
                        <DynamicAmenityIcon
                          label={item.label}
                          size={24}
                          struck={item.struck}
                          className="text-[#222222]"
                        />
                      </div>
                      <span
                        className={`text-[15px] sm:text-[16px] text-[#222222] ${
                          item.struck ? "line-through text-[#717171]" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
