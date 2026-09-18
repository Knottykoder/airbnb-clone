export interface NearbyStay {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewsCount: number;
  pricePerNight: number;
  dates: string;
  superhost: boolean;
  image: string;
}

export const nearbyStaysData: NearbyStay[] = [
  {
    id: "stay-1",
    title: "Boho Luxury Villa with Private Infinity Pool",
    location: "Candolim, Goa",
    rating: 4.98,
    reviewsCount: 42,
    pricePerNight: 8500,
    dates: "Oct 12 – 17",
    superhost: true,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stay-2",
    title: "Serene Garden Suite with Private Plunge Tub",
    location: "Calangute, Goa",
    rating: 4.92,
    reviewsCount: 28,
    pricePerNight: 4900,
    dates: "Oct 15 – 20",
    superhost: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stay-3",
    title: "Modern Minimalist Penthouse overlooking Palms",
    location: "Sinquerim, Goa",
    rating: 4.96,
    reviewsCount: 35,
    pricePerNight: 6200,
    dates: "Nov 2 – 7",
    superhost: false,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stay-4",
    title: "Heritage Portuguese Villa with Courtyard Jacuzzi",
    location: "Saligao, Goa",
    rating: 4.99,
    reviewsCount: 64,
    pricePerNight: 9800,
    dates: "Nov 10 – 15",
    superhost: true,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
];
