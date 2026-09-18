"use client";

import React, { useState } from "react";
import { ReviewItem } from "../../data/reviews";
import { StarIcon } from "../icons/airbnb-icons";

interface ReviewsListProps {
  reviews: ReviewItem[];
  activeChip?: string;
}

export function ReviewsList({ reviews }: ReviewsListProps) {
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-6">
      {/* Reviews 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
        {reviews.map((review) => {
          const isExpanded = expandedReviews[review.id];
          const isLong = review.content.length > 200;
          const displayContent =
            isLong && !isExpanded
              ? `${review.content.slice(0, 200)}...`
              : review.content;

          return (
            <article key={review.id} className="flex flex-col justify-between">
              <div>
                {/* Author Header */}
                <div className="flex items-center gap-3.5 mb-2.5">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-[17px] select-none ${
                        review.avatarBg || "bg-[#F3E7D7] text-[#8C6D4F]"
                      }`}
                    >
                      {review.initial}
                    </div>
                  )}

                  <div>
                    <h4 className="text-[16px] font-semibold text-[#222222] leading-tight">
                      {review.author}
                    </h4>
                    <p className="text-[14px] text-[#717171] leading-tight mt-0.5 font-normal">
                      {review.yearsOnAirbnb}
                    </p>
                  </div>
                </div>

                {/* Rating & Date */}
                <div className="flex items-center gap-1.5 text-[14px] text-[#222222] mb-2 font-medium">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} size={10} className="fill-[#222222] text-[#222222]" />
                    ))}
                  </div>
                  <span className="font-semibold text-[12px]">·</span>
                  <span className="font-semibold text-[13px]">{review.ratingDate}</span>
                </div>

                {/* Review Text */}
                <p className="text-[15px] text-[#222222] leading-relaxed font-normal">
                  {displayContent}
                </p>

                {isLong && (
                  <button
                    type="button"
                    onClick={() => toggleExpand(review.id)}
                    className="mt-1 font-semibold text-[14px] text-[#222222] underline underline-offset-2 hover:text-black block"
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {reviews.length === 0 && (
        <div className="py-12 text-center text-[#717171]">
          No reviews available.
        </div>
      )}
    </div>
  );
}
