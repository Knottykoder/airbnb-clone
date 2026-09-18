"use client";

import React from "react";
import { ICONS } from "../../data/icon-data";

interface DynamicAmenityIconProps {
  label: string;
  className?: string;
  size?: number;
  struck?: boolean;
}

export function DynamicAmenityIcon({
  label,
  className = "w-6 h-6",
  size = 24,
  struck = false,
}: DynamicAmenityIconProps) {

  const rawSvg =
    ICONS[`amenFull:${label}`] ||
    ICONS[`amen:${label}`] ||
    ICONS["amen:Kitchen"];

  if (!rawSvg) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }

  return (
    <span
      className={`inline-block shrink-0 ${className} ${struck ? "opacity-60" : ""}`}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: rawSvg }}
    />
  );
}
