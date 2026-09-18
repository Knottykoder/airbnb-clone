"use client";

import React from "react";
import { GlobeIcon } from "../icons/airbnb-icons";

export function SiteFooter() {
  return (
    <footer className="bg-[#F7F7F7] border-t border-[#DDDDDD] pt-12 pb-24 md:pb-12 text-[14px] text-[#222222]">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Footnote Directory */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-[#DDDDDD]">
          <div>
            <h3 className="font-semibold text-[#222222] mb-3">Support</h3>
            <ul className="space-y-2.5 text-[#717171]">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#222222] mb-3">Hosting</h3>
            <ul className="space-y-2.5 text-[#717171]">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#222222] mb-3">Airbnb</h3>
            <ul className="space-y-2.5 text-[#717171]">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Emergency stays</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Settings */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-[#717171]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold text-[#222222]">
            <button type="button" className="flex items-center gap-2 hover:underline">
              <GlobeIcon size={16} />
              <span>English (IN)</span>
            </button>
            <button type="button" className="hover:underline">
              ₹ INR
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
