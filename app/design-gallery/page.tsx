import CustomLink from "@/components/CustomLink";
import DesignGalleryDialog from "@/components/gallery/DesignGalleryDialog";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";
import { categories, galleryItems } from "@/constant";
import { GalleryItem } from "@/types";
import { cn } from "@/utils/cn";
import { extractYouTubeThumbnail } from "@/utils/extractYouTubeThumbnail";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  searchParams: Promise<{ category: string | undefined }>;
}

export default async function GalleryPage({ searchParams }: IProps) {
  let activeCategory = (await searchParams).category;

  if (!activeCategory) {
    activeCategory = "all";
  }

  const filteredItems: GalleryItem[] =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <DesignGalleryDialog />
      <main>
        <section className="wrapper pb-10">
          <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Our <span className="text-[#00776e]">Design Gallery</span>
                  </h1>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore our collection of stunning interior designs that
                    showcase our commitment to creating beautiful, functional
                    spaces that reflect your unique style and personality.
                  </p>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={cn(
                      "rounded-full text-sm font-medium transition-all duration-300",
                      activeCategory === category.id
                        ? "bg-teal-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm border border-gray-200"
                    )}
                  >
                    <CustomLink
                      queryParams={true}
                      className="px-6 py-3"
                      href={`?category=${category.id}`}
                    >
                      {category.name} ({category.count})
                    </CustomLink>
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  // <OpenGallery key={item.id} galleryItem={item} isOpen={true}>
                  <Link
                    key={item.id}
                    href={"/design-gallery/1"}
                    className="block"
                  >
                    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={
                            item.type === "video" && item.src === ""
                              ? extractYouTubeThumbnail(item.videoSrc || "")
                              : item.src
                          }
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.type === "video" && (
                          <div className="absolute inset-0 bg-[#00000056] bg-opacity-30 flex items-center justify-center">
                            <div className="bg-white bg-opacity-90 rounded-full p-3 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                              <Play className="w-6 h-6" />
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                            {categories.find((cat) => cat.id === item.category)
                              ?.name || "General"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  // </OpenGallery>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">
                    No items found
                  </p>
                </div>
              )}
            </div>

            {/* <DesignGalleryPage /> */}

            {/* Call to Action */}
            <div className="bg-teal-600 py-16">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-xl text-teal-100 mb-8">
                  Let our expert designers create a beautiful and functional
                  space that reflects your unique style.
                </p>
                <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
                  <OpenGetQuoteDialog isOpen>
                    <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                      Get Free Consultation
                    </button>
                  </OpenGetQuoteDialog>
                  <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-300">
                    View Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
