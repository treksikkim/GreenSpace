import { Category, GalleryItem, INav } from "./types";

export const OFFER_LISTS = [
  {
    id: "1",
    content: `FLAT 25% OFF on Modular Interiors. Hurry, Book Before 31st May 2025! <a style = "text-decoration: underline;" href = '/'>Get Offer</a>`,
  },
  {
    id: "2",
    content: `2 FLAT 25% OFF on Modular Interiors. Hurry, Book Before 31st May 2025! <a href = '/' style = "text-decoration: underline;">Get Offer</a>`,
  },
];

export const NAV_ITEMS: INav[] = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  {
    id: 2,
    name: "Design Gallery",
    slug: "/design-gallery",
    submenu: [
      {
        id: "2-1",
        name: "Home Interior Design",
        slug: "/design-gallery",
      },
      {
        id: "2-2",
        name: "Home Interior Design",
        slug: "/design-gallery",
      },
      {
        id: "2-3",
        name: "Home Interior Design",
        slug: "/design-gallery",
      },
    ],
  },
  {
    id: 9,
    name: "About",
    slug: "/about-us",
  },
  {
    id: 3,
    name: "Our Projects",
    slug: "/our-projects",
  },
  {
    id: 4,
    name: "Reviews",
    slug: "#",
  },
  {
    id: 5,
    name: "Site Services",
    slug: "#",
  },
  // {
  //   id: 6,
  //   name: "FAQ",
  //   slug: "#",
  // },
  // {
  //   id: 7,
  //   name: "Blog",
  //   slug: "#",
  // },
  // {
  //   id: 8,
  //   name: "Contact",
  //   slug: "#",
  // },
  // {
  //   id: 9,
  //   name: "More",
  //   slug: "#",
  // },
];

export const BANNER_ITEMS = [
  {
    id: "1",
    heading: "From Concept to Creation",
    subheading:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem veniam praesentium atque.",
    bannerImage: "/banners/4.png",
  },
  {
    id: "2",
    heading: "From Concept to Creation 2",
    subheading:
      "2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem veniam praesentium atque.",
    bannerImage: "/banners/3.png",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    src: "/testimages/interior.jpg",
    category: "living-room",
    title: "Modern Living Room Design",
    description: "Contemporary living space with minimalist approach",
  },
  {
    id: 2,
    type: "image",
    src: "/testimages/interior.jpg",
    category: "bedroom",
    title: "Luxury Bedroom Suite",
    description: "Elegant bedroom with premium finishes",
  },
  {
    id: 3,
    type: "video",
    src: "",
    videoSrc: "https://www.youtube.com/watch?v=bIsBeLTmeLk",
    category: "kitchen",
    title: "Kitchen Renovation Tour",
    description: "Complete kitchen transformation showcase",
  },
  {
    id: 4,
    type: "image",
    src: "/testimages/interior.jpg",
    category: "bathroom",
    title: "Spa-Inspired Bathroom",
    description: "Relaxing bathroom with natural elements",
  },
  {
    id: 5,
    type: "image",
    src: "/testimages/interior.jpg",
    category: "living-room",
    title: "Cozy Family Room",
    description: "Warm and inviting family gathering space",
  },
  {
    id: 6,
    type: "video",
    src: "",
    videoSrc: "https://www.youtube.com/watch?v=bIsBeLTmeLk",
    category: "office",
    title: "Home Office Setup",
    description: "Productive workspace design ideas",
  },
  {
    id: 7,
    type: "image",
    src: "/testimages/interior.jpg",
    category: "dining-room",
    title: "Elegant Dining Area",
    description: "Sophisticated dining room for entertaining",
  },
  {
    id: 8,
    type: "image",
    src: "/testimages/interior.jpg",
    category: "kitchen",
    title: "Modern Kitchen Island",
    description: "Functional kitchen with stylish island",
  },
  {
    id: 9,
    type: "image",
    src: "/testimages/interior.jpg",
    category: "bedroom",
    title: "Master Bedroom Retreat",
    description: "Peaceful master bedroom sanctuary",
  },
];

export const categories: Category[] = [
  { id: "all", name: "All Projects", count: galleryItems.length },
  {
    id: "living-room",
    name: "Living Room",
    count: galleryItems.filter((item) => item.category === "living-room")
      .length,
  },
  {
    id: "bedroom",
    name: "Bedroom",
    count: galleryItems.filter((item) => item.category === "bedroom").length,
  },
  {
    id: "kitchen",
    name: "Kitchen",
    count: galleryItems.filter((item) => item.category === "kitchen").length,
  },
  {
    id: "bathroom",
    name: "Bathroom",
    count: galleryItems.filter((item) => item.category === "bathroom").length,
  },
  {
    id: "dining-room",
    name: "Dining Room",
    count: galleryItems.filter((item) => item.category === "dining-room")
      .length,
  },
  {
    id: "office",
    name: "Office",
    count: galleryItems.filter((item) => item.category === "office").length,
  },
];
