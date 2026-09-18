"use client";

import React from "react";
import { CloseIcon } from "../icons/airbnb-icons";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";

interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: string;
  extendedDescription: string;
}

export function DescriptionModal({
  isOpen,
  onClose,
  description,
  extendedDescription,
}: DescriptionModalProps) {
  useLockBodyScroll(isOpen);
  useKeyboardNavigation({ onEscape: onClose, enabled: isOpen });

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="description-modal-title"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="sticky top-0 bg-white border-b border-[#EBEBEB] px-6 h-18 flex items-center justify-between z-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close description dialog"
            className="w-10 h-10 rounded-full hover:bg-[#F7F7F7] flex items-center justify-center text-[#222222] transition-colors"
          >
            <CloseIcon size={20} />
          </button>
          <div className="w-10" />
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 space-y-6 text-[#222222]">
          <h2 id="description-modal-title" className="text-[24px] font-bold">
            About this space
          </h2>

          <div className="text-[16px] leading-relaxed space-y-4">
            {description.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="h-[1px] bg-[#EBEBEB] my-6" />

          <div className="text-[15px] leading-relaxed space-y-4">
            {extendedDescription.split("\n\n").map((block, i) => {
              if (block.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-[18px] font-semibold text-[#222222] pt-2">
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              return (
                <div key={i} className="space-y-2">
                  {block.split("\n").map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
