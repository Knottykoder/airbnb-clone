"use client";

import React from "react";
import Link from "next/link";
import { AirbnbLogo, SearchIcon } from "../icons/airbnb-icons";
import { SearchPill } from "./search-pill";
import { UserMenu } from "./user-menu";

interface SiteHeaderProps {
  onSearchClick?: () => void;
}

export function SiteHeader({ onSearchClick }: SiteHeaderProps) {
  return (
    <header className="relative z-10 bg-white border-b border-[#EBEBEB] w-full">
      <div className="max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-20 h-20 flex items-center justify-between gap-4">
        {/* Left Logo */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[#FF385C] focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg p-1"
            aria-label="Airbnb homepage"
          >
            <AirbnbLogo className="w-32 h-32 text-[#FF385C]" />
          </Link>
        </div>

        {/* Center Search Pill (Desktop) */}
        <div className="hidden md:block">
          <SearchPill onSearchClick={onSearchClick} />
        </div>

        {/* Center Compact Search (Mobile) */}
        <div className="md:hidden flex-1 max-w-sm mx-2">
          <button
            type="button"
            onClick={onSearchClick}
            className="w-full flex items-center gap-3 bg-white border border-[#DDDDDD] rounded-full py-2 px-4 shadow-[0_1px_4px_rgba(0,0,0,0.1)] text-left"
          >
            <SearchIcon size={18} className="text-[#222222]" />
            <div className="flex flex-col">
              <span className="text-[13px] font-semibold text-[#222222] leading-tight">Anywhere</span>
              <span className="text-[11px] text-[#717171] leading-tight">Any week · Add guests</span>
            </div>
          </button>
        </div>

        {/* Right Menu */}
        <div className="flex items-center shrink-0">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
