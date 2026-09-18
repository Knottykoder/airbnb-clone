"use client";

import React from "react";
import {
  BalloonIcon,
  CheckIcon,
  ChevronRightIcon,
  GraduationCapIcon,
  ShieldCheckIcon,
} from "../icons/airbnb-icons";

interface CoHost {
  name: string;
  avatar?: string;
  initial?: string;
  bg?: string;
}

interface HostProfileProps {
  neighbourhoodHighlights?: string;
  host: {
    name: string;
    yearsHosting: number;
    rating: number;
    reviewsCount: number;
    responseRate: number;
    responseTime: string;
    bornIn?: string;
    school?: string;
    coHosts: CoHost[];
  };
  onShowNeighbourhoodMore?: () => void;
}

export function HostProfile({
  neighbourhoodHighlights = "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
  host,
  onShowNeighbourhoodMore,
}: HostProfileProps) {
  return (
    <div className="py-8">
      {/* 1. Neighbourhood highlights Section */}
      <section className="pb-10 border-b border-[#EBEBEB]" aria-labelledby="neighbourhood-heading">
        <h2 id="neighbourhood-heading" className="text-[22px] font-semibold text-[#222222] mb-3">
          Neighbourhood highlights
        </h2>
        <p className="text-[15px] text-[#222222] leading-relaxed mb-3">
          {neighbourhoodHighlights}
        </p>
        <button
          type="button"
          onClick={onShowNeighbourhoodMore}
          className="inline-flex items-center gap-1 font-semibold text-[15px] text-[#222222] underline underline-offset-4 hover:text-black"
        >
          <span>Show more</span>
          <ChevronRightIcon size={14} />
        </button>
      </section>

      {/* 2. Meet your host Section */}
      <section className="pt-10 pb-12" aria-labelledby="host-heading">
        <h2 id="host-heading" className="text-[22px] font-semibold text-[#222222] mb-8">
          Meet your host
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">
          {/* Left Host Card */}
          <div className="space-y-6">
            <div className="bg-white border border-[#DDDDDD] rounded-3xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex justify-between items-center gap-6">
              {/* Left Column in card: Avatar + Name */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <div className="w-24 h-24 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-bold text-[12px] tracking-wider text-center p-2 uppercase select-none">
                    Mirashya
                  </div>
                  <div className="absolute bottom-0 right-1 w-6 h-6 bg-[#FF385C] rounded-full flex items-center justify-center text-white shadow-xs">
                    <CheckIcon size={13} className="text-white stroke-[3]" />
                  </div>
                </div>

                <h3 className="text-[22px] font-bold text-[#222222] leading-tight">
                  {host.name}
                </h3>
                <p className="text-[14px] text-[#717171] mt-0.5">Host</p>
              </div>

              {/* Right Stats in card */}
              <div className="space-y-3 pr-2">
                <div>
                  <div className="text-[20px] font-bold text-[#222222]">
                    {host.reviewsCount.toLocaleString()}
                  </div>
                  <div className="text-[12px] text-[#717171]">Reviews</div>
                </div>

                <div className="h-[1px] bg-[#EBEBEB]" />

                <div>
                  <div className="text-[20px] font-bold text-[#222222]">
                    {host.rating.toFixed(2)} ★
                  </div>
                  <div className="text-[12px] text-[#717171]">Rating</div>
                </div>

                <div className="h-[1px] bg-[#EBEBEB]" />

                <div>
                  <div className="text-[20px] font-bold text-[#222222]">
                    {host.yearsHosting}
                  </div>
                  <div className="text-[12px] text-[#717171]">Years hosting</div>
                </div>
              </div>
            </div>

            {/* Host Facts (Born & School) */}
            <div className="space-y-3.5 pt-2 text-[15px] text-[#222222]">
              {host.bornIn && (
                <div className="flex items-center gap-3">
                  <BalloonIcon size={22} className="text-[#222222] shrink-0" />
                  <span>{host.bornIn}</span>
                </div>
              )}
              {host.school && (
                <div className="flex items-center gap-3">
                  <GraduationCapIcon size={22} className="text-[#222222] shrink-0" />
                  <span>{host.school}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Co-Hosts & Details */}
          <div className="space-y-8">
            {/* Co-Hosts */}
            {host.coHosts && host.coHosts.length > 0 && (
              <div>
                <h4 className="text-[16px] font-semibold text-[#222222] mb-4">
                  Co-Hosts
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {host.coHosts.map((coHost, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {coHost.avatar ? (
                        <img
                          src={coHost.avatar}
                          alt={coHost.name}
                          className="w-10 h-10 rounded-full object-cover border border-[#DDDDDD]"
                        />
                      ) : (
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-[14px] ${
                            coHost.bg || "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {coHost.initial}
                        </div>
                      )}
                      <span className="text-[15px] text-[#222222] font-normal">
                        {coHost.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Host details */}
            <div>
              <h4 className="text-[16px] font-semibold text-[#222222] mb-2">
                Host details
              </h4>
              <div className="text-[14px] text-[#222222] space-y-1">
                <div>Response rate: {host.responseRate}%</div>
                <div>Responds {host.responseTime}</div>
              </div>
            </div>

            {/* Message host CTA */}
            <div>
              <button
                type="button"
                className="bg-[#F7F7F7] hover:bg-[#EBEBEB] text-[#222222] font-semibold text-[14px] px-6 py-3 rounded-xl border border-[#DDDDDD] transition-colors"
              >
                Message host
              </button>
            </div>

            {/* Security note */}
            <div className="flex items-start gap-3 pt-4 text-[12px] text-[#717171] leading-normal">
              <ShieldCheckIcon size={18} className="text-[#222222] shrink-0 mt-0.5" />
              <span>
                To help protect your payment, always use Airbnb to send money and communicate with hosts.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
