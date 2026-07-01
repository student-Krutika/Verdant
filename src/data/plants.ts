import type { Plant } from "@/components/PlantCard";
import type { Testimonial } from "@/components/TestimonialCard";

import monstera from "@/assets/plant-monstera.jpg";
import snake from "@/assets/plant-snake.jpg";
import fiddle from "@/assets/plant-fiddle.jpg";
import peacelily from "@/assets/plant-peacelily.jpg";
import zz from "@/assets/plant-zz.jpg";
import pothos from "@/assets/plant-pothos.jpg";
import aloe from "@/assets/plant-aloe.jpg";
import calathea from "@/assets/plant-calathea.jpg";

import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const trendingPlants: Plant[] = [
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    description: "Iconic split leaves that bring instant jungle vibes to any room",
    price: 39,
    image: monstera,
    rating: 4.9,
    badge: "Trending",
  },
  {
    id: "snake",
    name: "Snake Plant",
    description: "Nearly indestructible and a powerful overnight air purifier.",
    price: 28.0,
    image: snake,
    rating: 4.8,
  },
  {
    id: "fiddle",
    name: "Fiddle Leaf Fig",
    description: "Sculptural statement plant with big, glossy violin-shaped leaves.",
    price: 54.0,
    image: fiddle,
    rating: 4.7,
  },
  {
    id: "peacelily",
    name: "Peace Lily",
    description: "Elegant white blooms and lush foliage that thrive in low light.",
    price: 32.0,
    image: peacelily,
    rating: 4.8,
    badge: "New",
  },
];

export const topSellingPlants: Plant[] = [
  {
    id: "zz",
    name: "ZZ Plant",
    description: "Glossy leaves, low maintenance, happy in almost any corner.",
    price: 34.0,
    image: zz,
    rating: 4.9,
    badge: "Best seller",
  },
  {
    id: "pothos",
    name: "Golden Pothos",
    description: "Fast-growing trailing vine perfect for shelves and hangers.",
    price: 22.0,
    image: pothos,
    rating: 4.8,
  },
  {
    id: "aloe",
    name: "Aloe Vera",
    description: "Healing succulent that loves the sun and barely needs water.",
    price: 19.0,
    image: aloe,
    rating: 4.7,
  },
  {
    id: "calathea",
    name: "Calathea",
    description: "Striking patterned leaves that gently fold up each night.",
    price: 36.0,
    image: calathea,
    rating: 4.6,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amelia Carter",
    location: "Austin, TX",
    avatar: avatar1,
    rating: 5,
    review:
      "My monstera arrived perfectly packed and healthier than anything from my local nursery. The care card made it so easy to keep it thriving.",
  },
  {
    id: "t2",
    name: "Daniel Reyes",
    location: "Seattle, WA",
    avatar: avatar2,
    rating: 5,
    review:
      "I’ve ordered four plants now and every single one has been gorgeous. Delivery is quick and the support team genuinely knows their stuff.",
  },
  {
    id: "t3",
    name: "Sophie Nguyen",
    location: "Brooklyn, NY",
    avatar: avatar3,
    rating: 4,
    review:
      "Verdant turned my tiny apartment into a little jungle. The air feels fresher and the plants are still flourishing months later.",
  },
];
