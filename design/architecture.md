# System Architecture & Component Design

This document details the component hierarchy, data flow, modal state synchronization, and interaction lifecycle for the Airbnb Listing recreation.

---

## 1. High-Level Architecture Diagram

![System Architecture Diagram](./designDiagram.png)

```mermaid
graph TD
    subgraph Browser ["Client Browser"]
        URL["URL State Query Params (?view=photos, ?photo=N, ?view=amenities)"]
        ScrollState["Scroll Position & Viewport Observer"]
    end

    subgraph AppLayer ["Next.js App Router (app/page.tsx)"]
        Page["ListingPage (Client Root Component)"]
        Hooks["Custom Hooks (useScrollPosition, useActiveSection)"]
    end

    subgraph DataLayer ["Data Layer (app/data)"]
        ListingData["listing.ts"]
        PhotosData["photos.ts"]
        AmenitiesData["amenities.ts"]
        ReviewsData["reviews.ts"]
        RoomsData["rooms.ts"]
        NearbyData["nearby-stays.ts"]
        IconData["icon-data.ts"]
    end

    subgraph UIComponents ["UI Component Tree"]
        Header["SiteHeader (Search Pill, Auth/Menu)"]
        ListingHead["ListingHeader (Title, Ratings, Share/Save)"]
        Gallery["HeroGallery / MobileGallery (5-Photo Grid & Carousel)"]
        StickyNav["StickyNav (Smooth Scroll Section Tabs)"]
        
        subgraph MainContentGrid ["2-Column Main Content Grid (1120px)"]
            subgraph LeftCol ["Left Column (~652px)"]
                Badge["GuestFavoriteBadge"]
                Highlights["HostHighlights"]
                Rooms["SleepingArrangements"]
                Amenities["AmenitiesPreview"]
                Calendar["DatePickerInline"]
                Reviews["ReviewsSummary, ReviewTopicChips, ReviewsList"]
                Location["LocationMap"]
                Host["HostProfile"]
                Things["ThingsToKnow"]
            end
            
            subgraph RightCol ["Right Column (~400px Sticky)"]
                Booking["BookingCard (Price Breakdown, Dates, GuestSelector)"]
            end
        end

        MobileBar["MobileBookingBar (Sticky Bottom on Mobile)"]
        Recommendations["SimilarListings (Nearby Stays)"]
        Footer["SiteFooter"]
    end

    subgraph Overlays ["Full-Screen Overlays & Modals"]
        PhotoTour["PhotoTourModal (Categorized Photo Tour)"]
        Lightbox["PhotoLightbox (Keyboard Navigation, Zoom, Counter)"]
        AmenitiesModal["AmenitiesModal (Categorized Amenities Dialog)"]
        ShareModal["ShareModal (Social Share & Copy Link)"]
        DescModal["DescriptionModal (Expanded Space Overview)"]
    end

    %% Data Connections
    DataLayer --> Page
    Page --> UIComponents
    Page --> Overlays
    URL <--> Page
    ScrollState --> Hooks
    Hooks --> StickyNav
    Hooks --> Header
```

---

## 2. Component Hierarchy & Data Flow

```mermaid
classDiagram
    class ListingPage {
        +state photoTourOpen: boolean
        +state lightboxIndex: number | null
        +state amenitiesOpen: boolean
        +state shareOpen: boolean
        +state checkIn: Date | null
        +state checkOut: Date | null
        +state guests: GuestCounts
        +updateUrl(search: string)
    }

    class HeroGallery {
        +photos: Photo[]
        +onOpenTour()
        +onSelectPhoto(index: number)
    }

    class BookingCard {
        +checkIn: Date
        +checkOut: Date
        +guests: GuestCounts
        +pricePerNight: number
        +cleaningFee: number
        +serviceFee: number
    }

    class PhotoTourModal {
        +categories: PhotoCategory[]
        +onClose()
        +onSelectPhoto(index: number)
    }

    class PhotoLightbox {
        +currentIndex: number
        +photos: Photo[]
        +onNext()
        +onPrev()
        +onClose()
    }

    ListingPage --> HeroGallery
    ListingPage --> BookingCard
    ListingPage --> PhotoTourModal
    ListingPage --> PhotoLightbox
```

---

## 3. Modal & URL History Flow

```mermaid
stateDiagram-v2
    [*] --> DefaultListingPage : "/"
    
    DefaultListingPage --> PhotoTour : Click "Show all photos" (?view=photos)
    DefaultListingPage --> LightboxDirect : Click gallery image (?view=photos&photo=N)
    DefaultListingPage --> AmenitiesModal : Click "Show all amenities" (?view=amenities)
    
    PhotoTour --> Lightbox : Click any photo (?view=photos&photo=N)
    Lightbox --> PhotoTour : Press Escape / Back / Close (?view=photos)
    PhotoTour --> DefaultListingPage : Press Escape / Back / Close ("/")
    
    AmenitiesModal --> DefaultListingPage : Press Escape / Close ("/")
```
