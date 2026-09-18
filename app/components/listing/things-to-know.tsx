"use client";

import React from "react";
import {
  CalendarCancelIcon,
  HouseKeyIcon,
  SafetyShieldIcon,
} from "../icons/airbnb-icons";

interface ThingsToKnowProps {
  houseRules: string[];
  safetyPolicies: string[];
  cancellationPolicy: string;
  cancellationPolicyDetails?: string;
}

export function ThingsToKnow({
  houseRules,
  safetyPolicies,
  cancellationPolicy,
  cancellationPolicyDetails,
}: ThingsToKnowProps) {
  return (
    <section className="py-12 border-t border-[#EBEBEB]" aria-labelledby="rules-heading">
      <h2 id="rules-heading" className="text-[22px] font-semibold text-[#222222] mb-6">
        Things to know
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* 1. Cancellation Policy */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <CalendarCancelIcon size={24} className="text-[#222222]" />
          </div>
          <h3 className="text-[16px] font-semibold text-[#222222] mb-3">Cancellation policy</h3>
          <div className="space-y-2 text-[14px] text-[#222222] leading-[1.43] mb-3">
            <p>{cancellationPolicy}</p>
            {cancellationPolicyDetails && <p>{cancellationPolicyDetails}</p>}
          </div>
          <button
            type="button"
            className="mt-auto pt-1 font-semibold text-[14px] text-[#222222] underline underline-offset-2 hover:text-black transition-colors"
          >
            Learn more
          </button>
        </div>

        {/* 2. House Rules */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <HouseKeyIcon size={24} className="text-[#222222]" />
          </div>
          <h3 className="text-[16px] font-semibold text-[#222222] mb-3">House rules</h3>
          <ul className="space-y-2 text-[14px] text-[#222222] leading-[1.43] mb-3">
            {houseRules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-auto pt-1 font-semibold text-[14px] text-[#222222] underline underline-offset-2 hover:text-black transition-colors"
          >
            Learn more
          </button>
        </div>

        {/* 3. Safety & Property */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <SafetyShieldIcon size={24} className="text-[#222222]" />
          </div>
          <h3 className="text-[16px] font-semibold text-[#222222] mb-3">Safety &amp; property</h3>
          <ul className="space-y-2 text-[14px] text-[#222222] leading-[1.43] mb-3">
            {safetyPolicies.map((policy, idx) => (
              <li key={idx}>{policy}</li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-auto pt-1 font-semibold text-[14px] text-[#222222] underline underline-offset-2 hover:text-black transition-colors"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

