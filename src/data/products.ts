import portableToilet from "@/assets/port-toilet.jpg";
import mobileVan from "@/assets/mtv.png";
import bioDigester from "@/assets/tank.png";
import portableCabin from "@/assets/product-portable-cabin.jpg";
import publicToilet from "@/assets/lux-port-toilet.png";

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  specs?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "frp-portable-toilet",
    name: "FRP Portable Toilet",
    image: portableToilet,
    description:
      "Durable and weather-resistant FRP portable toilets designed for outdoor sanitation needs at construction sites, events, and remote locations.",
    features: [
      "Lightweight yet sturdy FRP construction",
      "Weather & corrosion resistant",
      "Easy to install and relocate",
      "Low maintenance",
      "Hygienic interior finish",
    ],
    specs: { Size: "3×8 feet", Material: "FRP", Usage: "Outdoor Sanitation" },
  },
  {
    id: "mobile-toilet-van",
    name: "Mobile Toilet Van",
    image: mobileVan,
    description:
      "Fully equipped mobile toilet vans that can be deployed anywhere, providing convenient sanitation for outdoor events, disaster relief, and temporary setups.",
    features: [
      "Multiple toilet units per van",
      "Built-in water tank & waste system",
      "Can be towed to any location",
      "Western & Indian toilet options",
      "Ventilated & well-lit interiors",
    ],
  },
  {
    id: "bio-digester-tank",
    name: "FRP Bio Digester Tank",
    image: bioDigester,
    description:
      "Eco-friendly bio digester tanks that use anaerobic bacteria to decompose waste, providing a sustainable sewage treatment solution without septic pits.",
    features: [
      "Zero discharge technology",
      "Eco-friendly bacterial decomposition",
      "No manual scavenging required",
      "Long-lasting FRP body",
      "Low operating cost",
    ],
  },
  {
    id: "portable-cabin",
    name: "Portable Cabin",
    image: portableCabin,
    description:
      "Prefabricated portable cabins suitable for site offices, guard rooms, storage, and accommodation—built for quick deployment and durability.",
    features: [
      "Quick assembly & disassembly",
      "Customizable layouts & sizes",
      "Insulated walls & roofing",
      "Electrical fittings included",
      "Reusable & relocatable",
    ],
  },
  {
    id: "public-toilet-solution",
    name: "Public Toilet Solutions",
    image: publicToilet,
    description:
      "Comprehensive public toilet complexes for municipalities, parks, highways, and commercial areas—designed for heavy usage and easy maintenance.",
    features: [
      "Designed for high foot traffic",
      "Separate male & female sections",
      "Accessible & ADA-compliant options",
      "Automated cleaning-friendly design",
      "Durable FRP & steel construction",
    ],
  },
];
