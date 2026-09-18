"use client";

import React, { useState, useRef, useEffect } from "react";
import { GlobeIcon, MenuIcon, UserIcon } from "../icons/airbnb-icons";

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-1 relative" ref={menuRef}>
      <button
        type="button"
        className="px-3.5 py-2.5 rounded-full text-[14px] font-semibold text-[#222222] hover:bg-[#F7F7F7] transition-colors"
      >
        Airbnb your home
      </button>

      <button
        type="button"
        aria-label="Choose language and currency"
        className="p-3 rounded-full text-[#222222] hover:bg-[#F7F7F7] transition-colors"
      >
        <GlobeIcon size={18} />
      </button>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Main navigation menu"
        className="flex items-center gap-3 pl-3.5 pr-2 py-1.5 border border-[#DDDDDD] rounded-full hover:shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-shadow duration-200 bg-white"
      >
        <MenuIcon size={16} className="text-[#222222]" />
        <div className="w-8 h-8 rounded-full bg-[#717171] text-white flex items-center justify-center overflow-hidden">
          <UserIcon size={18} />
        </div>
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-14 w-60 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#EBEBEB] py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="py-1">
            <button
              type="button"
              role="menuitem"
              className="w-full text-left px-4 py-2.5 text-[14px] font-semibold text-[#222222] hover:bg-[#F7F7F7] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign up
            </button>
            <button
              type="button"
              role="menuitem"
              className="w-full text-left px-4 py-2.5 text-[14px] text-[#222222] hover:bg-[#F7F7F7] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Log in
            </button>
          </div>

          <div className="h-[1px] bg-[#EBEBEB] my-1" />

          <div className="py-1">
            <button
              type="button"
              role="menuitem"
              className="w-full text-left px-4 py-2.5 text-[14px] text-[#222222] hover:bg-[#F7F7F7] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Airbnb your home
            </button>
            <button
              type="button"
              role="menuitem"
              className="w-full text-left px-4 py-2.5 text-[14px] text-[#222222] hover:bg-[#F7F7F7] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Host an experience
            </button>
            <button
              type="button"
              role="menuitem"
              className="w-full text-left px-4 py-2.5 text-[14px] text-[#222222] hover:bg-[#F7F7F7] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Help Centre
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
