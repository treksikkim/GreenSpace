import { NAV_ITEMS } from "@/constant";
import { Category, GalleryItem } from "@/types";

export const galleryItems: GalleryItem[] = [];

export const categories: Category[] = [
  { id: "all", name: "All Items", count: galleryItems.length },
];

NAV_ITEMS[1].submenu?.forEach((item) => {
  categories.push({
    id: item.id.toString(),
    count: galleryItems.filter((gItem) => gItem.id == item.id).length,
    name: item.name,
  });
});
