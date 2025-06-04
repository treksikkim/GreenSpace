"use client";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CircleArrowRight,
  Eye,
  ArrowRight,
  GalleryHorizontal,
} from "lucide-react";
import CustomLink from "../CustomLink";

const galleryItems = [
  {
    id: 1,
    title: "Modern Minimalistic 4 BHK Home Of Auro Smitha",
    image: "/gallery-image.jpg",
    category: "Residential",
    area: "2400 sq ft",
  },
  {
    id: 2,
    title: "Contemporary Office Space Design",
    image: "/gallery-image.jpg",
    category: "Commercial",
    area: "1800 sq ft",
  },
  {
    id: 3,
    title: "Luxury Villa Interior Design",
    image: "/gallery-image.jpg",
    category: "Residential",
    area: "3200 sq ft",
  },
  {
    id: 4,
    title: "Modern Apartment Renovation",
    image: "/gallery-image.jpg",
    category: "Residential",
    area: "1600 sq ft",
  },
  {
    id: 5,
    title: "Restaurant Interior Design",
    image: "/gallery-image.jpg",
    category: "Commercial",
    area: "2000 sq ft",
  },
  {
    id: 6,
    title: "Boutique Hotel Lobby Design",
    image: "/gallery-image.jpg",
    category: "Hospitality",
    area: "1200 sq ft",
  },
  {
    id: 7,
    title: "Executive Office Suite",
    image: "/gallery-image.jpg",
    category: "Commercial",
    area: "800 sq ft",
  },
];

export default function NewDesignGallery() {
  SwiperCore.use([Navigation, Pagination]);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [sliderPreviewView, setSliderPreviewView] = useState(2);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth <= 639) {
          setSliderPreviewView(1);
        } else if (window.innerWidth <= 1024) {
          setSliderPreviewView(2);
        } else {
          setSliderPreviewView(3.5);
        }
        console.log(hoveredItem);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goBack = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <section className="w-full py-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            {/* <span className="text-[#00776d] text-sm font-medium tracking-wider uppercase mb-2 block">
              Portfolio
            </span> */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6">
              <GalleryHorizontal className="w-5 h-5 text-[#00776e]" />
              <span className="text-[#00776e] font-medium">Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Design Gallery
            </h2>
            <div className="w-20 h-1 bg-[#00776d] mx-auto mb-6"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our collection of stunning interior designs that transform
            spaces into extraordinary experiences. Each project reflects our
            commitment to excellence and innovation.
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="relative">
          <Swiper
            slidesPerView={sliderPreviewView}
            centeredSlides={false}
            spaceBetween={30}
            className="w-full"
            pagination={{
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#00776d] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>

                    {/* View Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                        <Eye size={18} />
                      </button>
                    </div>

                    {/* Hover Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-200">
                          {item.area}
                        </span>
                        <ArrowRight size={20} className="text-[#00776d]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-[#00776d] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{item.area}</span>
                      <Link
                        href={`/gallery/${item.id}`}
                        className="text-[#00776d] font-medium text-sm hover:underline flex items-center gap-1"
                      >
                        View Details
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="max-sm:flex max-sm:items-center max-sm:justify-center max-sm:gap-4">
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10 max-sm:static">
              <button
                onClick={goBack}
                className="bg-white shadow-lg rounded-full p-3 hover:bg-[#00776d] hover:text-white transition-all duration-300 group"
              >
                <CircleArrowRight
                  className="rotate-180 group-hover:scale-110 transition-transform"
                  size={24}
                />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10 max-sm:static">
              <button
                onClick={goNext}
                className="bg-white shadow-lg rounded-full p-3 hover:bg-[#00776d] hover:text-white transition-all duration-300 group"
              >
                <CircleArrowRight
                  className="group-hover:scale-110 transition-transform"
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-5">
          <button className="inline-flex items-center gap-2 bg-[#00776d] text-white rounded-full font-medium hover:bg-[#005a52] transition-colors duration-300 hover:gap-3">
            <CustomLink href="/design-gallery" className="px-8 py-3 ">
              View All Projects
              <ArrowRight size={18} />
            </CustomLink>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          position: static !important;
          margin-top: 2rem;
        }

        .custom-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          background: #00776d !important;
          opacity: 0.3 !important;
          border-radius: 50% !important;
          cursor: pointer !important;
          transition: opacity 0.3s ease !important;
        }

        .custom-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
