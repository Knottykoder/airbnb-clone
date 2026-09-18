export interface AmenityItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description?: string;
  isPopular?: boolean;
  unavailable?: boolean;
}

export interface AmenityGroup {
  title: string;
  items: {
    label: string;
    struck?: boolean;
  }[];
}

export const amenityGroups: AmenityGroup[] = [
  {
    title: "Bathroom",
    items: [
      { label: "Hairdryer" },
      { label: "Cleaning products" },
      { label: "Shampoo" },
      { label: "Hot water" },
      { label: "Shower gel" },
    ],
  },
  {
    title: "Bedroom and laundry",
    items: [
      { label: "Washing machine" },
      { label: "Hangers" },
      { label: "Bed linen" },
      { label: "Room-darkening blinds" },
      { label: "Iron" },
      { label: "Clothes storage" },
      { label: "Cot" },
    ],
  },
  {
    title: "Entertainment",
    items: [{ label: "TV" }],
  },
  {
    title: "Family",
    items: [{ label: "Cot" }],
  },
  {
    title: "Heating and cooling",
    items: [
      { label: "Air conditioning" },
      { label: "Ceiling fan" },
    ],
  },
  {
    title: "Home safety",
    items: [
      { label: "Exterior security cameras on property" },
      { label: "Carbon monoxide alarm", struck: true },
      { label: "Smoke alarm", struck: true },
    ],
  },
  {
    title: "Internet and office",
    items: [
      { label: "Wifi" },
      { label: "Dedicated workspace" },
    ],
  },
  {
    title: "Kitchen and dining",
    items: [
      { label: "Kitchen" },
      { label: "Fridge" },
      { label: "Freezer" },
      { label: "Microwave" },
      { label: "Cooking basics" },
      { label: "Crockery and cutlery" },
      { label: "Kettle" },
      { label: "Coffee" },
      { label: "Wine glasses" },
      { label: "Toaster" },
      { label: "Blender" },
      { label: "Cooker" },
    ],
  },
  {
    title: "Location features",
    items: [{ label: "Private entrance" }],
  },
  {
    title: "Outdoor",
    items: [
      { label: "Patio or balcony" },
      { label: "Outdoor dining area" },
    ],
  },
  {
    title: "Parking and facilities",
    items: [
      { label: "Free parking on premises" },
      { label: "Pool" },
      { label: "Hot tub" },
      { label: "Gym" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Pets allowed" },
      { label: "Cleaning available during stay" },
      { label: "Long-term stays allowed" },
      { label: "Self check-in" },
    ],
  },
];

export const previewAmenities = [
  { id: "kitchen", name: "Kitchen", iconName: "Kitchen", column: "left" },
  { id: "wifi", name: "Wifi", iconName: "Wifi", column: "right" },
  { id: "workspace", name: "Dedicated workspace", iconName: "Dedicated workspace", column: "left" },
  { id: "parking", name: "Free parking on premises", iconName: "Free parking on premises", column: "right" },
  { id: "pool", name: "Pool", iconName: "Pool", column: "left" },
  { id: "hottub", name: "Hot tub", iconName: "Hot tub", column: "right" },
  { id: "pets", name: "Pets allowed", iconName: "Pets allowed", column: "left" },
  { id: "cameras", name: "Exterior security cameras on property", iconName: "Exterior security cameras on property", column: "right" },
  { id: "co-alarm", name: "Carbon monoxide alarm", iconName: "Carbon monoxide alarm", column: "left", unavailable: true },
  { id: "smoke-alarm", name: "Smoke alarm", iconName: "Smoke alarm", column: "right", unavailable: true },
];

export const AMENITY_CATEGORIES = amenityGroups.map((g) => g.title);

export const amenitiesData: AmenityItem[] = amenityGroups.flatMap((group) =>
  group.items.map((item, index) => ({
    id: `${group.title.toLowerCase().replace(/\s+/g, "-")}-${index}`,
    name: item.label,
    category: group.title,
    iconName: item.label,
    unavailable: item.struck,
  }))
);
