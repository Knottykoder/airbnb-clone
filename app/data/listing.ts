import { photosData } from "./photos";

export const listing = {
  id: "mirashya-candolim",
  title: "Entire serviced apartment in Candolim, India",
  displayTitle: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment",
  location: "Candolim, Goa, India",
  city: "Candolim",
  state: "Goa",
  country: "India",
  rating: 4.95,
  reviewsCount: 19,
  isGuestFavorite: true,
  isSuperhost: true,
  guestsMax: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  priceTotal5Nights: 28499,
  pricePerNight: 5700,
  checkInDateStr: "10/18/2026",
  checkOutDateStr: "10/23/2026",
  cancellationDeadline: "17 October",
  
  host: {
    name: "Mirashya Homes",
    avatar: "/assets/images/avatars/host.jpeg",
    yearsHosting: 2,
    rating: 4.68,
    reviewsCount: 1463,
    responseRate: 100,
    responseTime: "within an hour",
    bornIn: "Born in the 80s",
    school: "Where I went to school: NICMAR GOA",
    bio: "Welcome to Mirashya Homes! We curate serene boutique stays designed for slow living, comfort, and peaceful coastal escapes in Candolim, Goa.",
    coHosts: [
      { name: "Sharath", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80" },
      { name: "Aman Dev Pahwa", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80" },
      { name: "Maria Karen Priyanka", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80" },
      { name: "Simran", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" },
      { name: "Pallavi", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" },
      { name: "Sanyukta", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80" },
      { name: "Shruti", initial: "S", bg: "bg-pink-100 text-pink-700" },
      { name: "Amisha", initial: "A", bg: "bg-blue-100 text-blue-700" },
    ],
  },

  highlights: [
    {
      icon: "outdoor",
      title: "Outdoor entertainment",
      description: "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: "cool",
      title: "Designed for staying cool",
      description: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      icon: "self-checkin",
      title: "Self check-in",
      description: "You can check in with the building staff.",
    },
  ],

  neighbourhoodHighlights: "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",

  description: `Settle into a calm pocket of Candolim. This light-filled luxury serviced apartment is designed as a peaceful oasis for slow mornings, beach walks, and evenings spent unwinding in your private heated jacuzzi and plunge pool.

The space combines modern minimalist aesthetics with warm coastal elegance. Floor-to-ceiling glass doors open onto a private shaded patio and garden area, welcoming gentle sea breezes and golden morning light.`,

  extendedDescription: `### The Space
- **Living Area:** Bright and airy with a sofa, 65" 4K Smart TV, and curated local artwork.
- **Bedroom:** Plush double bed with premium linens and blackout drapes.
- **Ensuite Spa Bathroom:** Hydrotherapy jacuzzi hot tub and rainfall shower.
- **Kitchen & Dining:** Fully equipped kitchen, microwave, refrigerator, and dining table.
- **Outdoor & Pool:** Private plunge pool and outdoor alfresco dining area.`,

  houseRules: [
    "Check-in after 2:00 pm",
    "Checkout before 11:00 am",
    "3 guests maximum",
  ],

  safetyPolicies: [
    "Carbon monoxide alarm not reported",
    "Smoke alarm not reported",
    "Exterior security cameras on property",
  ],

  cancellationPolicy: "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
  cancellationPolicyDetails: "Review this host’s full policy for details.",

  photos: photosData,
};

export const sections = ["Overview", "Amenities", "Reviews", "Location"];
