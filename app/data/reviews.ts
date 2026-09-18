export interface ReviewCategoryScore {
  name: string;
  score: number;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar?: string;
  initial?: string;
  avatarBg?: string;
  yearsOnAirbnb: string;
  ratingDate: string;
  rating: number;
  content: string;
  topics?: string[];
}

export interface ReviewChipItem {
  id: string;
  label: string;
  count: number;
  img: string;
  emoji?: string;
}

export const reviewsSummary = {
  overallRating: 4.95,
  totalReviews: 19,
  isGuestFavorite: true,
  ratingBreakdown: [
    { name: "Cleanliness", score: 5.0, iconName: "spray" },
    { name: "Accuracy", score: 5.0, iconName: "check-circle" },
    { name: "Check-in", score: 5.0, iconName: "key" },
    { name: "Communication", score: 5.0, iconName: "speech" },
    { name: "Location", score: 4.8, iconName: "map" },
    { name: "Value", score: 4.8, iconName: "tag" },
  ],
  reviewChips: [
    { id: "pool", label: "Pool", count: 2, img: "/assets/images/chips/amenities.png" },
    { id: "indoor-spaces", label: "Indoor spaces", count: 2, img: "/assets/images/chips/indoor-spaces.png" },
    { id: "hospitality", label: "Hospitality", count: 3, img: "/assets/images/chips/hospitality.png" },
    { id: "comfort", label: "Comfort", count: 6, img: "/assets/images/chips/comfort.png" },
    { id: "accuracy", label: "Accuracy", count: 5, img: "/assets/images/chips/accuracy.png" },
    { id: "hottub", label: "Hot tub", count: 5, img: "/assets/images/chips/hot-tub.png" },
    { id: "condition", label: "Condition", count: 4, img: "/assets/images/chips/condition.png" },
    { id: "cleanliness", label: "Cleanliness", count: 4, img: "/assets/images/chips/cleanliness.png" },
    { id: "decor", label: "Decor", count: 2, img: "/assets/images/chips/decor.png" },
    { id: "location", label: "Location", count: 2, img: "/assets/images/chips/location.png" },
  ] as ReviewChipItem[],
};

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Amit",
    initial: "A",
    avatarBg: "bg-[#F3E7D7] text-[#8C6D4F]",
    yearsOnAirbnb: "2 months on Airbnb",
    ratingDate: "1 week ago",
    rating: 5,
    content: "Very helpful and responsive team. Safe and peaceful stay. Loved everything about the property.",
  },
  {
    id: "rev-2",
    author: "Aheesh",
    avatar: "/assets/images/avatars/rev1.jpeg",
    yearsOnAirbnb: "3 years on Airbnb",
    ratingDate: "2 weeks ago",
    rating: 5,
    content: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
  },
  {
    id: "rev-3",
    author: "Samiksha",
    avatar: "/assets/images/avatars/rev2.jpeg",
    yearsOnAirbnb: "8 months on Airbnb",
    ratingDate: "May 2026",
    rating: 5,
    content: "the host nitish was really great help",
  },
  {
    id: "rev-4",
    author: "Vedant",
    initial: "V",
    avatarBg: "bg-[#DDD6FE] text-[#6D28D9]",
    yearsOnAirbnb: "4 years on Airbnb",
    ratingDate: "May 2026",
    rating: 5,
    content: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....",
  },
  {
    id: "rev-5",
    author: "Vaibhav S",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    yearsOnAirbnb: "3 years on Airbnb",
    ratingDate: "May 2026",
    rating: 5,
    content: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
  },
  {
    id: "rev-6",
    author: "Mohd",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    yearsOnAirbnb: "5 years on Airbnb",
    ratingDate: "May 2026",
    rating: 5,
    content: "Great place. Exactly as described in the listing.",
  },
];
