"use client";

import React, { useState } from "react";
import { ChevronRightIcon } from "../icons/airbnb-icons";

interface AboutSectionProps {
  description: string;
  extendedDescription?: string;
  onShowMoreClick?: () => void;
}

export function AboutSection({ description, onShowMoreClick }: AboutSectionProps) {
  return (
    <section className="py-8 border-b border-[#EBEBEB]" aria-labelledby="about-heading">
      <h2 id="about-heading" className="text-[22px] font-semibold text-[#222222] mb-4">
        About this place
      </h2>
      <div className="text-[15px] sm:text-[16px] text-[#222222] leading-relaxed space-y-4 font-normal">
        {description.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <button
        type="button"
        onClick={onShowMoreClick}
        className="mt-4 inline-flex items-center gap-1 font-semibold text-[#222222] underline underline-offset-4 hover:text-black py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
      >
        <span>Show more</span>
        <ChevronRightIcon size={16} />
      </button>
    </section>
  );
}
