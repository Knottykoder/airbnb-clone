# TASK: Pixel-Accurate Recreation of the Reference Airbnb Listing Page

## Reference
Use this website as the primary visual and interaction reference:
[https://airbnb-clone-umber-two.vercel.app/](https://airbnb-clone-umber-two.vercel.app/)

Your goal is to recreate the visual design, layout, spacing, typography, animations, interactions, responsive behavior, and overall UX of the reference website.
This is NOT a request to create a generic Airbnb clone.
The implementation should feel like the same product and should reproduce the reference as closely as possible.

---

## 1. CORE REQUIREMENT
Build a production-quality Airbnb-style property listing page based on the reference.

**Priorities, in this exact order:**
1. Visual fidelity
2. Layout accuracy
3. Typography accuracy
4. Spacing and sizing accuracy
5. Image/gallery composition
6. Interactions
7. Animations and transitions
8. Responsive behavior
9. Accessibility
10. Code quality and maintainability

- Do not invent a different design.
- Do not introduce unnecessary gradients, cards, shadows, animations, colors, or UI patterns that are not present in the reference.
- The final result should look like a carefully reverse-engineered version of the reference website.

---

## 2. TECHNOLOGY
**Use:**
- React
- TypeScript
- Next.js
- Tailwind CSS where appropriate
- CSS modules or well-structured global CSS where needed
- Lucide React or inline SVG for icons
- Framer Motion only where animation complexity genuinely requires it

- Do NOT add unnecessary libraries.
- Prefer native CSS transitions and animations for simple interactions.
- Use semantic HTML.
- Use reusable components.

---

## 3. PROJECT ARCHITECTURE
Structure the application cleanly.

**Suggested structure:**
```text
src/ (or app/)
  app/
    page.tsx
    layout.tsx
  components/
    header/
    listing/
    gallery/
    booking/
    amenities/
    calendar/
    reviews/
    location/
    host/
    recommendations/
    photo-tour/
    lightbox/
    modals/
  data/
    listing.ts
    reviews.ts
    amenities.ts
    rooms.ts
    photos.ts
  hooks/
    useScrollPosition.ts
    useLockBodyScroll.ts
    useMediaQuery.ts
    useKeyboardNavigation.ts
  lib/
    constants.ts
    utils.ts
```
- Do not put the entire application inside one page component.
- Break the UI into meaningful reusable components.

---

## 4. PAGE WIDTH AND GLOBAL LAYOUT
Desktop content should use a centered container.

**Primary desktop container:**
- `max-width: 1120px;`
- `margin-inline: auto;`

- Do not allow the primary content to stretch across the entire viewport on large screens.
- Desktop horizontal padding should be approximately: `24px`.
- At smaller viewport sizes, reduce the padding appropriately.
- Use `box-sizing: border-box;` globally.
- Avoid arbitrary widths that cause overflow.

---

## 5. GLOBAL COLOR SYSTEM
Use a restrained Airbnb-like color palette:
- **Primary text:** `#222222`
- **Secondary text:** `#717171`
- **Borders:** `#DDDDDD`
- **Light background:** `#F7F7F7`
- **Page background:** `#FFFFFF`
- **Primary Airbnb-style accent:** `#FF385C`
- **Dark overlay:** `rgba(0, 0, 0, 0.5)`

Do not overuse the accent color. Most of the page should remain white, black, gray, and image-driven.

---

## 6. TYPOGRAPHY
Typography must feel like Airbnb's clean geometric typography.
- Prefer Airbnb Cereal if font files are available.
- Fallback: `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;`

**Typography feel:** clean, geometric, compact, modern, highly readable.
- Do not use decorative fonts.
- Do not use excessive letter spacing.

**Suggested hierarchy:**
- **Listing title:** 28–32px, `font-weight: 600–700`, `line-height: 1.2`
- **Section headings:** 22–26px, `font-weight: 600`
- **Body:** 15–17px, `font-weight: 400`, `line-height: 1.5–1.6`
- **Secondary text:** 14px, `color: #717171`
- **Navigation:** 13–15px, `font-weight: 500`
- **Buttons:** 14–16px, `font-weight: 600`
- **Large price:** 22–26px, `font-weight: 600`

Tune the exact values visually against the reference. Do not make headings unnecessarily large.

---

## 7. SPACING SYSTEM
Use a consistent spacing scale:
- `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`

**Usage guidelines:**
- **8px:** small gaps and image gaps
- **12px:** tight component spacing
- **16px:** normal internal spacing
- **24px:** component spacing
- **32px:** heading/content separation
- **48px:** section spacing
- **64px:** major section spacing

Avoid random values such as 13px, 27px, 37px, 53px unless visual comparison proves they are required.

---

## 8. HEADER
Create a clean Airbnb-style desktop header (approx 72–80px tall):
- **LEFT:** Airbnb-style logo
- **CENTER:** Search pill (`| Anywhere | Any week | Add guests 🔍 |`) with subtle separators
- **RIGHT:** Airbnb your home, language/globe, profile/menu control
- Use generous horizontal spacing.
- Use a soft shadow only if visually necessary. Header should remain visually lightweight.

---

## 9. MOBILE HEADER
On mobile:
- Hide desktop search structure
- Keep logo
- Provide compact search control
- Provide profile/menu button
- Preserve the clean Airbnb appearance (do not simply shrink the desktop header).

---

## 10. LISTING TITLE AREA
Below the header, create the property information section:
- **Title:** Property title (visually dominant)
- **Subtitle:** Location · rating · reviews (secondary)
- **Right side:** Share and Save compact action controls (icon + text, not large filled buttons).

---

## 11. HERO IMAGE GALLERY
Desktop layout:
- **Primary image:** ~560 × 494px (spans 2 rows)
- **Four secondary images:** ~272 × 243px each (2x2 grid)
- **Grid layout:** `grid-template-columns: 2fr 1fr 1fr;`
- **Gap:** `8px`
- **Border radius:** ~12px overall gallery radius, `overflow: hidden;` on image wrappers
- All images: `width: 100%; height: 100%; object-fit: cover;`

---

## 12. IMAGE HOVER EFFECT
- On hover: `transform: scale(1.045);`
- Transition: `300ms cubic-bezier(0.2, 0, 0, 1)`
- The image should zoom slightly while container stays fixed (overflow hidden).
- Optional subtle dark overlay on hover. Premium and restrained.

---

## 13. GALLERY CLICK INTERACTION
- Every gallery image must be clickable.
- Clicking an image should open the photo experience at that photo.
- Clicking "Show all photos" opens the full Photo Tour.
- Do not navigate away to an unrelated page.

---

## 14. SHOW ALL PHOTOS BUTTON
- Compact outlined/light button placed over bottom-right of gallery.
- On hover: slightly darker background, subtle transition.
- On click: Open the Photo Tour.

---

## 15. PHOTO TOUR
Full-screen photo browsing experience (~9 photo categories, ~43 photos):
- **Top bar:** Close button, listing/property context.
- **Main content:** Categorized photos (Living room, Bedroom, Kitchen, Bathroom, Outdoor, Dining, Workspace, Pool, Other).
- Use realistic property photography.

---

## 16. PHOTO TOUR LAYOUT
- Desktop width: ~976px wide.
- Two-column visual structure: Large image ~458px wide, second column ~458px wide, gap ~60px. Smaller grid ~223px.
- Images: `object-fit: cover;` rounded corners. Photographs should visually dominate.

---

## 17. PHOTO TOUR CATEGORY BEHAVIOR
- Category headings should become sticky (`position: sticky;`) while scrolling their associated photos.
- Sticky headings remain readable without obstructing photos. Smooth transitions between categories.

---

## 18. LIGHTBOX
Clicking any photo inside the Photo Tour opens a full-screen lightbox:
- Large photo display
- Controls: Previous (`←`), Next (`→`), Close (`✕`), photo counter (`6 / 43`)
- Keyboard navigation (Arrow keys, Escape)
- Touch/swipe support on mobile

---

## 19. LIGHTBOX ANIMATION
- Smooth opacity and small horizontal translation (`~24px`, duration `~260ms`, `cubic-bezier(0.2, 0, 0, 1)`).
- No exaggerated bounce animations.

---

## 20. KEYBOARD NAVIGATION
- `ArrowLeft`: Previous image
- `ArrowRight`: Next image
- `Escape`: Close current overlay
- **Escape hierarchy:** Lightbox → Photo Tour → Listing page (do not close everything in one press).

---

## 21. URL / HISTORY STATE
- Deep-linkable state: `?view=photos`, `?view=photos&photo=6`, `?view=amenities`
- Pressing browser Back closes Lightbox first, then Photo Tour, then returns to listing page without reloading.

---

## 22. STICKY NAVIGATION
Appears after scrolling past the hero/title area:
- Navigation items: *About*, *Where you'll sleep*, *Amenities*, *Reviews*, *Location*
- White background, subtle bottom border, high z-index, no heavy shadow.

---

## 23. STICKY NAV ANIMATION
- Slide in from top: `translateY(-100%)` to `translateY(0)`
- Duration: `250–300ms`, easing: `cubic-bezier(0.2, 0, 0, 1)`.

---

## 24. SECTION SCROLLING
- Smooth scrolling on click (`scroll-behavior: smooth`).
- Account for sticky header offset so section headings are not obscured.

---

## 25. MAIN CONTENT LAYOUT
- Two-column desktop grid: Left ~652px (listing details), Right 340–400px (booking card).
- Responsive collapse on tablet/mobile.

---

## 26. BOOKING CARD
Sticky reservation card:
- Price per night, Check-in / Check-out dates, Guests selector
- Reserve button with price breakdown calculations
- White background, 1px `#DDDDDD` border, rounded corners, subtle shadow.

---

## 27. BOOKING CARD STICKINESS
- `position: sticky;` respecting column boundaries.

---

## 28. DATE SELECTOR
- Two-month calendar experience (current month & next month).
- Previous / Next controls.
- States: default, hover, selected, range start, range end, in-range, disabled.

---

## 29. GUEST SELECTOR
Dropdown with rows for:
- Adults, Children, Infants, Pets
- Label, description, circular minus/plus counter buttons with min/max validation.

---

## 30. RESERVE BUTTON
- Accent color `#FF385C`, full width, rounded, font-weight 600.
- Hover: slightly darker. Active: slight press feedback (`scale(0.98)`). Transition `150–200ms`.

---

## 31. ABOUT THIS PLACE
- Clean text section with heading, multi-line body, and "Show more" modal trigger.

---

## 32. SLEEPING ARRANGEMENTS
- Room cards with room name, bed configuration, and lightweight border/radius styling.

---

## 33. AMENITIES
- Multi-column grid showing top amenities with consistent 18–24px stroke icons.

---

## 34. ALL AMENITIES MODAL
- Triggered by "Show all amenities".
- Max width ~700–800px, grouped categories, search/filter, dark backdrop overlay.

---

## 35. MODAL BEHAVIOR
- Lock body scroll when open.
- Trap focus, Escape to close, focus restoration on close.

---

## 36. REVIEWS
- Review summary with overall rating and 6 category breakdown bars (Cleanliness, Accuracy, Communication, Location, Check-in, Value).

---

## 37. REVIEW CARDS
- Avatar, reviewer name, date, and review text separated by clean whitespace/dividers.

---

## 38. REVIEW TOPICS
- Topic filter chips (Location, Cleanliness, Communication, Check-in, Amenities) in rounded pill style.

---

## 39. LOCATION
- "Where you'll be" with interactive/clean map presentation, neighborhood info, and property pin marker.

---

## 40. HOST SECTION
- Host avatar (circular), name, hosting duration, badges (Superhost), response time, and bio.

---

## 41. SIMILAR / NEARBY LISTINGS
- "More stays nearby" horizontal card carousel with image, wishlist heart button, title, rating, and price.

---

## 42. CARD IMAGE INTERACTION
- Image scale ~1.03–1.05 on hover with `overflow: hidden;`. Heart icon remains stable.

---

## 43. ANIMATION SYSTEM
- Unified easing: `cubic-bezier(0.2, 0, 0, 1)`.
- Restrained durations: 150ms (buttons), 200ms (controls), 250–300ms (nav/modals), 260ms (lightbox).
- No bouncy or exaggerated animations.

---

## 44. HOVER STATES
- Clear, subtle hover states for all buttons, links, images, and icon buttons.

---

## 45. ACTIVE STATES
- Immediate tactile feedback (`scale(0.98)` or color shift).

---

## 46. FOCUS STATES
- Visible, accessible focus rings for keyboard navigation.

---

## 47. REDUCED MOTION
- Honor `@media (prefers-reduced-motion: reduce)` by disabling transitions/zooms while preserving functionality.

---

## 48. RESPONSIVE DESIGN
- **Desktop:** 1200px+
- **Tablet:** 768–1199px
- **Mobile:** <768px (custom layouts, not just scaled-down desktop).

---

## 49. TABLET LAYOUT
- Adapted widths, reduced gallery dimensions, booking card repositioned below main content if needed.

---

## 50. MOBILE LAYOUT
- Full-width swipeable image carousel with counter.
- Single column content.
- Bottom floating sticky booking bar with dates & Reserve button.
- 16–24px padding.

---

## 51. MOBILE PHOTO VIEWER
- Touch swipe gestures (left/right), tap to view/close, visible counter badge.

---

## 52. ACCESSIBILITY
- Semantic HTML tags, aria labels on icon buttons, aria-expanded/aria-modal dialogs, contrast compliant.

---

## 53. PERFORMANCE
- Next.js Image with lazy loading, responsive sizes, zero unnecessary re-renders.

---

## 54. INTERACTION STATE MANAGEMENT
- Modular state management (local vs URL sync for shareable overlays).

---

## 55. STRUCTURED MOCK DATA
- Centralized data layer in `app/data/` (listing, photos, reviews, amenities, rooms).

---

## 56. IMAGE QUALITY & COMPOSITION
- High-resolution, realistic architectural/interior property photography with `object-fit: cover;`.

---

## 57. EDITORIAL DESIGN INTEGRITY
- Pure Airbnb aesthetic: clean, editorial, white, photo-first, spacious. No SaaS/dashboard styling.

---

## 58. DO NOT OVER-DESIGN
- ❌ No excessive gradients
- ❌ No glassmorphism
- ❌ No giant shadows
- ❌ No animated blobs or bouncy cards

---

## 59. PIXEL-LEVEL VALIDATION
Test and verify against breakpoints:
- 1440 × 900
- 1366 × 768
- 1280 × 800
- 1024 × 768
- 768 × 1024
- 390 × 844

---

## 60. VISUAL QA CHECKLIST
- [ ] Header matches reference
- [ ] Main container width matches reference
- [ ] Listing title hierarchy matches
- [ ] Gallery proportions match
- [ ] Gallery spacing is correct
- [ ] Image border radius is correct
- [ ] Hover zoom is subtle
- [ ] Typography feels like Airbnb
- [ ] Section spacing is consistent
- [ ] Booking card is positioned correctly
- [ ] Booking card sticks correctly
- [ ] Sticky navigation appears at the correct scroll position
- [ ] Sticky navigation animation is smooth
- [ ] Amenities layout matches
- [ ] Amenities modal works
- [ ] Calendar works
- [ ] Guest selector works
- [ ] Photo Tour works
- [ ] Photo Tour categories work
- [ ] Lightbox works
- [ ] Arrow keys work
- [ ] Escape works
- [ ] Browser Back behaves correctly
- [ ] Focus is restored after modal closing
- [ ] Body scroll is locked during modal/lightbox
- [ ] Reviews render correctly
- [ ] Map section looks appropriate
- [ ] Host section matches
- [ ] Similar listings work
- [ ] Mobile gallery works
- [ ] Mobile layout is not simply a shrunken desktop
- [ ] Reduced-motion mode works
- [ ] No horizontal overflow
- [ ] No console errors
- [ ] No hydration errors
- [ ] Images are optimized
- [ ] No broken links
- [ ] No unnecessary dependencies

---

## 61. CODE QUALITY
- TypeScript strict mode
- Reusable components
- Clear naming & clean imports
- No magic numbers without constants
- Responsive CSS & semantic HTML

---

## 62. FINAL IMPLEMENTATION STANDARD
The result must look and feel like a pixel-accurate reverse engineering of [https://airbnb-clone-umber-two.vercel.app/](https://airbnb-clone-umber-two.vercel.app/).
