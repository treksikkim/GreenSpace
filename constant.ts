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
        id: "modular-kitchen-designs",
        name: "Modular Kitchen Designs",
        slug: "/design-gallery?type=modular-kitchen-designs",
      },
      {
        id: "living-room-designs",
        name: "Living Room Designs",
        slug: "/design-gallery?type=living-room-designs",
      },
      {
        id: "bedroom-designs",
        name: "Bedroom Designs",
        slug: "/design-gallery?type=bedroom-designs",
      },
      {
        id: "kids-badroom-designs",
        name: "Kids Bedroom Designs",
        slug: "/design-gallery?type=kids-badroom-designs",
      },
      {
        id: "wardrobe-designs",
        name: "Wardrobe Designs",
        slug: "/design-gallery?type=wardrobe-designs",
      },
      {
        id: "dining-room-designs",
        name: "Dining Room Designs",
        slug: "/design-gallery?type=dining-room-designs",
      },
      {
        id: "pooja-room-designs",
        name: "Pooja Room Designs",
        slug: "/design-gallery?type=pooja-room-designs",
      },
      {
        id: "space-saving-designs",
        name: "Space Saving Designs",
        slug: "/design-gallery?type=space-saving-designs",
      },
      {
        id: "bathroom-designs",
        name: "Bathroom Designs",
        slug: "/design-gallery?type=bathroom-designs",
      },

      {
        id: "balcony-designs",
        name: "Balcony Designs",
        slug: "/design-gallery?type=balcony-designs",
      },
      {
        id: "1bhk-designs",
        name: "1 BHK Designs",
        slug: "/design-gallery?type=1bhk-designs",
      },
      {
        id: "2bhk-designs",
        name: "2 BHK Designs",
        slug: "/design-gallery?type=2bhk-designs",
      },
      {
        id: "3bhk-designs",
        name: "3 BHK Designs",
        slug: "/design-gallery?type=3bhk-designs",
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
    heading: "Modern Elegance for Every Corner",
    subheading:
      "Transform your 2 BHK with sleek, stylish interiors that reflect your unique taste and lifestyle.",
    bannerImage: "/banners/4.png",
  },
  {
    id: "2",
    heading: "Smart Spaces, Stunning Designs",
    subheading:
      "Maximize every inch of your home with creative layouts and multifunctional furniture tailored for compact living.",
    bannerImage: "/banners/3.png",
  },
];

// export const categories: Category[] = [
//   { id: "all", name: "All Items", count: galleryItems.length },
//   {
//     id: "living-room",
//     name: "Living Room",
//     count: galleryItems.filter((item) => item.category === "living-room")
//       .length,
//   },
//   {
//     id: "bedroom",
//     name: "Bedroom",
//     count: galleryItems.filter((item) => item.category === "bedroom").length,
//   },
//   {
//     id: "kitchen",
//     name: "Kitchen",
//     count: galleryItems.filter((item) => item.category === "kitchen").length,
//   },
//   {
//     id: "bathroom",
//     name: "Bathroom",
//     count: galleryItems.filter((item) => item.category === "bathroom").length,
//   },
//   {
//     id: "dining-room",
//     name: "Dining Room",
//     count: galleryItems.filter((item) => item.category === "dining-room")
//       .length,
//   },
//   {
//     id: "office",
//     name: "Office",
//     count: galleryItems.filter((item) => item.category === "office").length,
//   },
// ];
