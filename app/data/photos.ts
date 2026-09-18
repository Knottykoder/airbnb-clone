export interface PhotoItem {
  id: number;
  src: string;
  category: string;
  title: string;
  description?: string;
  isHero?: boolean;
}

export interface TourImage {
  src: string;
  alt: string;
  description?: string;
}

export interface TourRoom {
  id: string;
  title: string;
  subtitle?: string;
  thumb: string;
  layout: number[];
  images: TourImage[];
}

const IMG = "/assets/images";

export const tourRooms: TourRoom[] = [
  {
    id: "living-room-1",
    title: "Living room 1",
    subtitle: "Sofa · Air conditioning · Ceiling fan · TV",
    thumb: `${IMG}/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg`,
    layout: [1, 2],
    images: [
      { src: `${IMG}/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg`, alt: "Living room 1" },
      { src: `${IMG}/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg`, alt: "Living room 1" },
      { src: `${IMG}/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg`, alt: "Living room 1" },
    ],
  },
  {
    id: "living-room-2",
    title: "Living room 2",
    subtitle: "Ceiling fan · Hot tub",
    thumb: `${IMG}/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg`,
    layout: [1, 2, 1, 2, 1],
    images: [
      { src: `${IMG}/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg`, alt: "Living room 2" },
      { src: `${IMG}/9be71047-fc52-438a-9270-75cb470f6752.jpeg`, alt: "Living room 2" },
      { src: `${IMG}/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg`, alt: "Living room 2" },
      { src: `${IMG}/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg`, alt: "Living room 2" },
      { src: `${IMG}/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg`, alt: "Living room 2" },
      { src: `${IMG}/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg`, alt: "Living room 2" },
      { src: `${IMG}/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg`, alt: "Living room 2" },
    ],
  },
  {
    id: "full-kitchen",
    title: "Full kitchen",
    subtitle: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    thumb: `${IMG}/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg`,
    layout: [2],
    images: [
      { src: `${IMG}/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg`, alt: "Full kitchen" },
      { src: `${IMG}/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg`, alt: "Full kitchen" },
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    subtitle: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay",
    thumb: `${IMG}/67c61c6f-6260-4809-9510-0360e58a345d.jpeg`,
    layout: [1, 2, 1, 2],
    images: [
      { src: `${IMG}/67c61c6f-6260-4809-9510-0360e58a345d.jpeg`, alt: "Bedroom" },
      { src: `${IMG}/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg`, alt: "Bedroom" },
      { src: `${IMG}/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg`, alt: "Bedroom" },
      { src: `${IMG}/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg`, alt: "Bedroom" },
      { src: `${IMG}/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg`, alt: "Bedroom" },
      { src: `${IMG}/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg`, alt: "Bedroom" },
    ],
  },
  {
    id: "full-bathroom",
    title: "Full bathroom",
    subtitle: "Hairdryer · Hot water · Shampoo · Shower gel",
    thumb: `${IMG}/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg`,
    layout: [1],
    images: [{ src: `${IMG}/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg`, alt: "Full bathroom" }],
  },
  {
    id: "gym",
    title: "Gym",
    subtitle: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    thumb: `${IMG}/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg`,
    layout: [1, 2, 2],
    images: [
      { src: `${IMG}/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg`, alt: "Gym" },
      { src: `${IMG}/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg`, alt: "Gym" },
      { src: `${IMG}/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg`, alt: "Gym" },
      { src: `${IMG}/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg`, alt: "Gym" },
      { src: `${IMG}/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg`, alt: "Gym" },
    ],
  },
  {
    id: "exterior",
    title: "Exterior",
    thumb: `${IMG}/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg`,
    layout: [1, 2, 1, 2],
    images: [
      { src: `${IMG}/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg`, alt: "Exterior" },
      { src: `${IMG}/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg`, alt: "Exterior" },
      { src: `${IMG}/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg`, alt: "Exterior" },
      { src: `${IMG}/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg`, alt: "Exterior" },
      { src: `${IMG}/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg`, alt: "Exterior" },
      { src: `${IMG}/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg`, alt: "Exterior" },
    ],
  },
  {
    id: "pool",
    title: "Pool",
    subtitle: "Pool",
    thumb: `${IMG}/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg`,
    layout: [1, 2],
    images: [
      { src: `${IMG}/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg`, alt: "Pool" },
      { src: `${IMG}/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg`, alt: "Pool" },
      { src: `${IMG}/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg`, alt: "Pool" },
    ],
  },
  {
    id: "additional",
    title: "Additional photos",
    thumb: `${IMG}/70325367-cbae-4993-b560-18cd3f6edd53.jpeg`,
    layout: [1, 2, 1, 2, 1, 2, 1],
    images: [
      { src: `${IMG}/70325367-cbae-4993-b560-18cd3f6edd53.jpeg`, alt: "Additional photos" },
      { src: `${IMG}/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg`, alt: "Additional photos" },
      { src: `${IMG}/30ad93b2-293f-494d-b645-626303c6cb93.jpeg`, alt: "Additional photos" },
      { src: `${IMG}/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg`, alt: "Additional photos" },
      { src: `${IMG}/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg`, alt: "Additional photos" },
      { src: `${IMG}/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg`, alt: "Additional photos" },
      { src: `${IMG}/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg`, alt: "Additional photos" },
      { src: `${IMG}/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg`, alt: "Additional photos" },
      { src: `${IMG}/862d936c-0f34-4e50-af87-b519e2781d19.jpeg`, alt: "Additional photos" },
      { src: `${IMG}/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg`, alt: "Additional photos" },
    ],
  },
];

export const heroImages = [
  { id: 1, src: `${IMG}/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg`, title: "Living room", alt: "Living room 1" },
  { id: 2, src: `${IMG}/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg`, title: "Living room", alt: "Living room 2" },
  { id: 3, src: `${IMG}/9be71047-fc52-438a-9270-75cb470f6752.jpeg`, title: "Hot tub", alt: "Hot tub" },
  { id: 4, src: `${IMG}/67c61c6f-6260-4809-9510-0360e58a345d.jpeg`, title: "Bedroom", alt: "Bedroom" },
  { id: 5, src: `${IMG}/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg`, title: "Exterior", alt: "Exterior" },
];

// Flat ordered list of all 43 photos
export const allPhotos: TourImage[] = tourRooms.flatMap((r) => r.images);

export const photosData: PhotoItem[] = allPhotos.map((img, index) => ({
  id: index + 1,
  src: img.src,
  category: tourRooms.find((r) => r.images.some((i) => i.src === img.src))?.title || "Living room 1",
  title: img.alt,
  isHero: index < 5,
}));

export const PHOTO_CATEGORIES = [
  "All photos",
  "Living room 1",
  "Living room 2",
  "Full kitchen",
  "Bedroom",
  "Full bathroom",
  "Gym",
  "Exterior",
  "Pool",
  "Additional photos",
] as const;
