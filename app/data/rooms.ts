export interface RoomItem {
  id: string;
  name: string;
  bedConfig: string;
  photoSrc: string;
}

export const roomsData: RoomItem[] = [
  {
    id: "bedroom",
    name: "Bedroom",
    bedConfig: "1 double bed",
    photoSrc: "/assets/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg",
  },
  {
    id: "living-room",
    name: "Living room",
    bedConfig: "1 sofa",
    photoSrc: "/assets/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg",
  },
];
