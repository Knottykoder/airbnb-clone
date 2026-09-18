"use client";

import React, { useState } from "react";
import { CheckIcon, CloseIcon, StarIcon } from "../icons/airbnb-icons";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";

interface ShareModalProps {
  title: string;
  image: string;
  rating: number;
  reviewsCount: number;
  location: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({
  title,
  image,
  rating,
  reviewsCount,
  location,
  isOpen,
  onClose,
}: ShareModalProps) {
  useLockBodyScroll(isOpen);
  useKeyboardNavigation({ onEscape: onClose, enabled: isOpen });
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close share dialog"
            className="w-10 h-10 rounded-full hover:bg-[#F7F7F7] flex items-center justify-center text-[#222222] transition-colors"
          >
            <CloseIcon size={20} />
          </button>
          <div className="w-10" />
        </div>

        <h2 id="share-modal-title" className="text-[22px] font-bold text-[#222222] mb-6">
          Share this place
        </h2>

        {/* Listing Mini Card */}
        <div className="flex items-center gap-4 p-3 bg-[#F7F7F7] rounded-xl border border-[#DDDDDD] mb-6">
          <img
            src={image}
            alt={title}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <h3 className="text-[14px] font-semibold text-[#222222] line-clamp-1">{title}</h3>
            <p className="text-[13px] text-[#717171] line-clamp-1">{location}</p>
            <div className="flex items-center gap-1 text-[12px] text-[#222222] mt-0.5">
              <StarIcon size={11} className="fill-[#222222] text-[#222222]" />
              <span className="font-semibold">{rating.toFixed(2)}</span>
              <span className="text-[#717171]">({reviewsCount})</span>
            </div>
          </div>
        </div>

        {/* Share Options */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 p-3.5 border border-[#DDDDDD] rounded-xl hover:border-[#222222] font-semibold text-[14px] text-[#222222] transition-colors"
          >
            {copied ? (
              <>
                <CheckIcon size={16} className="text-[#108910]" />
                <span>Link copied!</span>
              </>
            ) : (
              <span>Copy Link</span>
            )}
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 p-3.5 border border-[#DDDDDD] rounded-xl hover:border-[#222222] font-semibold text-[14px] text-[#222222] transition-colors"
          >
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
