export interface INav {
  id: string | number;
  name: string;
  slug: string;
  submenu?: INav[];
}

// Types
export interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  videoSrc?: string;
  category: string;
  title: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface IGalleryDialogContext {
  galleryItem: GalleryItem;
  isOpen: boolean;
}

export interface IOurProject {
  id: number;
  title: string;
  location: string;
  area: string;
  completedDate: string;
  client: string;
  category: string;
  description: string;
  images: string[];
  featured: boolean;
  budget: string;
  duration: string;
  style: string;
  rating: number;
  highlights: string[];
}

export interface IGetQuoteDialog<T = undefined> {
  isOpen: boolean;
  extraValue?: T;
}
