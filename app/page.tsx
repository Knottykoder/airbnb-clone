"use client";

import React, { useState, useEffect, useCallback } from "react";
import { SiteHeader } from "./components/header/site-header";
import { ListingHeader } from "./components/listing/listing-header";
import { HeroGallery } from "./components/gallery/hero-gallery";
import { MobileGallery } from "./components/gallery/mobile-gallery";
import { StickyNav } from "./components/listing/sticky-nav";
import { GuestFavoriteBadge } from "./components/listing/guest-favorite-badge";
import { HostHighlights } from "./components/listing/host-highlights";
import { SleepingArrangements } from "./components/listing/sleeping-arrangements";
import { AmenitiesPreview } from "./components/amenities/amenities-preview";
import { DatePickerInline } from "./components/calendar/date-picker-inline";
import { ReviewsSummary } from "./components/reviews/reviews-summary";
import { ReviewTopicChips } from "./components/reviews/review-topic-chips";
import { ReviewsList } from "./components/reviews/reviews-list";
import { LocationMap } from "./components/location/location-map";
import { HostProfile } from "./components/host/host-profile";
import { ThingsToKnow } from "./components/listing/things-to-know";
import { BookingCard } from "./components/booking/booking-card";
import { MobileBookingBar } from "./components/booking/mobile-booking-bar";
import { SimilarListings } from "./components/recommendations/similar-listings";
import { SiteFooter } from "./components/footer/site-footer";
import { PhotoTourModal } from "./components/photo-tour/photo-tour-modal";
import { PhotoLightbox } from "./components/lightbox/photo-lightbox";
import { AmenitiesModal } from "./components/modals/amenities-modal";
import { ShareModal } from "./components/modals/share-modal";
import { DescriptionModal } from "./components/modals/description-modal";
import { GuestCounts } from "./components/booking/guest-selector";

import { listing, sections } from "./data/listing";
import { photosData } from "./data/photos";
import { amenitiesData } from "./data/amenities";
import { roomsData } from "./data/rooms";
import { reviewsSummary, reviewsData } from "./data/reviews";
import { nearbyStaysData } from "./data/nearby-stays";
import { useScrollPosition, useActiveSection } from "./hooks/useScrollPosition";

export default function ListingPage() {
  // Modal & Overlay state
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  // Booking & Selection state
  const [checkIn, setCheckIn] = useState<Date | null>(new Date(2026, 9, 18)); // Oct 18, 2026
  const [checkOut, setCheckOut] = useState<Date | null>(new Date(2026, 9, 23)); // Oct 23, 2026
  const [guests, setGuests] = useState<GuestCounts>({
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [activeReviewChip, setActiveReviewChip] = useState("all");

  // Sticky nav & scroll tracking
  const { isScrolledPast: navVisible } = useScrollPosition(520);
  const activeSection = useActiveSection(sections, 160);

  // History / URL Synchronization
  const updateUrl = useCallback((search: string) => {
    if (typeof window !== "undefined") {
      const url = search ? `${window.location.pathname}?${search}` : window.location.pathname;
      window.history.pushState({}, "", url);
    }
  }, []);

  const openPhotoTour = () => {
    updateUrl("view=photos");
    setPhotoTourOpen(true);
    setLightboxIndex(null);
  };

  const closePhotoTour = () => {
    if (window.location.search.includes("view=photos")) {
      window.history.back();
    } else {
      setPhotoTourOpen(false);
      setLightboxIndex(null);
    }
  };

  const openLightbox = (index: number) => {
    updateUrl(`view=photos&photo=${index + 1}`);
    setLightboxIndex(index);
    setPhotoTourOpen(true);
  };

  const closeLightbox = () => {
    updateUrl("view=photos");
    setLightboxIndex(null);
  };

  const openAmenities = () => {
    updateUrl("view=amenities");
    setAmenitiesOpen(true);
  };

  const closeAmenities = () => {
    if (window.location.search.includes("view=amenities")) {
      window.history.back();
    } else {
      setAmenitiesOpen(false);
    }
  };

  // Sync state on popstate (Back/Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const view = params.get("view");
      const photoParam = params.get("photo");

      if (view === "photos") {
        setPhotoTourOpen(true);
        if (photoParam) {
          const pIndex = parseInt(photoParam, 10) - 1;
          if (pIndex >= 0 && pIndex < photosData.length) {
            setLightboxIndex(pIndex);
          } else {
            setLightboxIndex(null);
          }
        } else {
          setLightboxIndex(null);
        }
      } else {
        setPhotoTourOpen(false);
        setLightboxIndex(null);
      }

      if (view === "amenities") {
        setAmenitiesOpen(true);
      } else {
        setAmenitiesOpen(false);
      }
    };

    handlePopState();
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Smooth scroll handler
  const handleScrollToSection = (sectionName: string) => {
    const targetId = sectionName.toLowerCase();
    if (targetId === "photos" || targetId === "overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  const handleReserve = () => {
    alert(`Reservation requested for ${listing.title} (${guests.adults + guests.children} guests). Enjoy your stay!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Site Header */}
      <SiteHeader onSearchClick={() => handleScrollToSection("photos")} />

      {/* Sticky Navigation Bar */}
      <StickyNav
        isVisible={navVisible}
        activeSection={activeSection}
        onSectionClick={handleScrollToSection}
        priceTotal={listing.priceTotal5Nights}
        totalNights={5}
        rating={listing.rating}
        reviewsCount={listing.reviewsCount}
        onReserve={handleReserve}
      />

      {/* Primary Centered Desktop Container (max-width: 1120px) */}
      <main className="w-full max-w-[1120px] mx-auto px-6 sm:px-8 lg:px-6 flex-1">
        {/* Listing Title & Actions */}
        <ListingHeader
          title={listing.displayTitle || listing.title}
          rating={listing.rating}
          reviewsCount={listing.reviewsCount}
          location={listing.location}
          isSuperhost={listing.isSuperhost}
          onShareClick={() => setShareOpen(true)}
          onReviewsClick={() => handleScrollToSection("reviews")}
          onLocationClick={() => handleScrollToSection("location")}
        />

        {/* Hero Photo Gallery (Desktop 5-image mosaic / Mobile Carousel) */}
        <div id="photos" className="scroll-mt-24">
          <div className="hidden md:block">
            <HeroGallery
              photos={photosData}
              onOpenTour={openPhotoTour}
              onOpenPhoto={openLightbox}
            />
          </div>
          <div className="md:hidden">
            <MobileGallery
              photos={photosData}
              onOpenTour={openPhotoTour}
              onOpenPhoto={openLightbox}
              onShareClick={() => setShareOpen(true)}
            />
          </div>
        </div>

        {/* Main Content & Booking Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,652px)_minmax(340px,400px)] gap-12 lg:gap-20 pt-8 pb-12">
          {/* Left Column (Property Details) */}
          <div className="min-w-0">
            {/* Title Summary from Screenshot 1 */}
            <section className="pb-6">
              <h2 className="text-[22px] font-semibold text-[#222222]">
                {listing.title}
              </h2>
              <p className="text-[15px] text-[#222222] mt-1 font-normal">
                {listing.guestsMax} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.bathrooms} bathroom
              </p>
            </section>

            {/* Guest Favourite Laurel Banner from Screenshot 1 */}
            <GuestFavoriteBadge
              rating={listing.rating}
              reviewsCount={listing.reviewsCount}
            />

            {/* Host & Highlights from Screenshot 1 */}
            <HostHighlights
              hostName={listing.host.name}
              yearsHosting={listing.host.yearsHosting}
              highlights={listing.highlights}
            />

            {/* Where you'll sleep from Screenshot 2 */}
            <SleepingArrangements rooms={roomsData} onOpenTour={openPhotoTour} />

            {/* What this place offers (Amenities) from Screenshot 2 */}
            <AmenitiesPreview
              totalCount={50}
              onShowAllClick={openAmenities}
            />

            {/* 2-Month Inline Date Picker */}
            <DatePickerInline
              checkIn={checkIn}
              checkOut={checkOut}
              onSelectRange={(start, end) => {
                setCheckIn(start);
                setCheckOut(end);
              }}
              locationName={listing.city}
            />
          </div>

          {/* Right Column (Sticky Booking Card on Desktop - Sticks until end of Calendar section) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-28">
              <BookingCard
                priceTotal={listing.priceTotal5Nights}
                totalNights={5}
                checkInDateStr={listing.checkInDateStr}
                checkOutDateStr={listing.checkOutDateStr}
                cancellationDeadline={listing.cancellationDeadline}
                checkIn={checkIn}
                checkOut={checkOut}
                guests={guests}
                onSelectDates={(start, end) => {
                  setCheckIn(start);
                  setCheckOut(end);
                }}
                onSelectGuests={setGuests}
                onReserve={handleReserve}
              />
            </div>
          </div>
        </div>

        {/* Reviews Section from Screenshot 3 (Spans Full 1120px Container) */}
        <section id="reviews" className="py-8 border-t border-[#EBEBEB] scroll-mt-24" aria-labelledby="reviews-heading">
          <ReviewsSummary
            overallRating={reviewsSummary.overallRating}
            totalReviews={reviewsSummary.totalReviews}
            ratingBreakdown={reviewsSummary.ratingBreakdown}
          />

          <ReviewTopicChips
            chips={reviewsSummary.reviewChips}
            activeChipId={activeReviewChip}
            onSelectChip={setActiveReviewChip}
          />

          <ReviewsList
            reviews={reviewsData}
            activeChip={activeReviewChip}
          />
        </section>

        {/* Location Map Section from Screenshot 4 */}
        <LocationMap
          location={listing.location}
          city={listing.city}
          state={listing.state}
          country={listing.country}
        />

        {/* Neighbourhood highlights & Meet your host from Screenshot 5 */}
        <HostProfile
          neighbourhoodHighlights={listing.neighbourhoodHighlights}
          host={listing.host}
          onShowNeighbourhoodMore={() => setDescriptionOpen(true)}
        />

        {/* Things to Know */}
        <ThingsToKnow
          houseRules={listing.houseRules}
          safetyPolicies={listing.safetyPolicies}
          cancellationPolicy={listing.cancellationPolicy}
          cancellationPolicyDetails={listing.cancellationPolicyDetails}
        />

        {/* Similar Stays Carousel */}
        <SimilarListings stays={nearbyStaysData} />
      </main>

      {/* Mobile Sticky Bottom Booking Bar */}
      <MobileBookingBar
        pricePerNight={listing.pricePerNight}
        rating={listing.rating}
        checkIn={checkIn}
        checkOut={checkOut}
        onReserve={handleReserve}
        onSelectDates={() => handleScrollToSection("photos")}
      />

      {/* Footer */}
      <SiteFooter />

      {/* Modals & Overlays */}
      <PhotoTourModal
        photos={photosData}
        isOpen={photoTourOpen && lightboxIndex === null}
        onClose={closePhotoTour}
        onSelectPhoto={openLightbox}
        onShareClick={() => setShareOpen(true)}
      />

      <PhotoLightbox
        photos={photosData}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNavigate={(newIndex) => {
          updateUrl(`view=photos&photo=${newIndex + 1}`);
          setLightboxIndex(newIndex);
        }}
        onShareClick={() => setShareOpen(true)}
      />

      <AmenitiesModal
        amenities={amenitiesData}
        isOpen={amenitiesOpen}
        onClose={closeAmenities}
      />

      <ShareModal
        title={listing.title}
        image={photosData[0].src}
        rating={listing.rating}
        reviewsCount={listing.reviewsCount}
        location={listing.location}
        isOpen={shareOpen}
        onClose={() => setShareOpen(false)}
      />

      <DescriptionModal
        isOpen={descriptionOpen}
        onClose={() => setDescriptionOpen(false)}
        description={listing.description}
        extendedDescription={listing.extendedDescription}
      />
    </div>
  );
}
