"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";

export default function ImprovedReviewsSection2() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [sliderPreviewView, setSliderPreviewView] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateSliderView = () => {
        if (window.innerWidth <= 639) {
          setSliderPreviewView(1);
        } else if (window.innerWidth <= 1024) {
          setSliderPreviewView(2);
        } else {
          setSliderPreviewView(3);
        }
      };

      updateSliderView();
      window.addEventListener("resize", updateSliderView);
      return () => window.removeEventListener("resize", updateSliderView);
    }
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Sumit Mukherjee",
      location: "Kolkata",
      review:
        "Their service is one of the best service in kolkata and provide customized designs which has transformed our home completely. The attention to detail is remarkable.",
      rating: 5,
      image: "/happy-customer.png",
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      review:
        "Exceptional work quality and professional approach. They understood our vision perfectly and delivered beyond our expectations. Highly recommended!",
      rating: 5,
      image: "/happy-customer.png",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      location: "Delhi",
      review:
        "Amazing modular kitchen design! The team was very cooperative and completed the project on time. The quality of materials used is top-notch.",
      rating: 5,
      image: "/happy-customer.png",
    },
    {
      id: 4,
      name: "Anjali Patel",
      location: "Bangalore",
      review:
        "Beautiful interior design work. They have great creativity and the final result exceeded our expectations. Very satisfied with their service.",
      rating: 5,
      image: "/happy-customer.png",
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Pune",
      review:
        "Professional team with excellent craftsmanship. They completed our home renovation project flawlessly. Great value for money.",
      rating: 5,
      image: "/happy-customer.png",
    },
    {
      id: 6,
      name: "Meera Reddy",
      location: "Hyderabad",
      review:
        "Outstanding service from start to finish. The team was professional, punctual, and delivered exactly what we envisioned for our dream home.",
      rating: 5,
      image: "/happy-customer.png",
    },
    {
      id: 7,
      name: "Arjun Gupta",
      location: "Chennai",
      review:
        "Impressed with their innovative designs and quality execution. They turned our small space into a beautiful and functional home.",
      rating: 5,
      image: "/happy-customer.png",
    },
  ];

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goBack = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            {/* <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 block">
              Testimonials
            </span> */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6">
              <Star className="w-5 h-5 text-[#00776e]" />
              <span className="text-[#00776e] font-medium">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span style={{ color: "#00776e" }}>What Our Happy</span>
              <br />
              <span className="relative">
                Customers Say
                <div
                  className="absolute -bottom-2 left-0 right-0 h-3 opacity-30 rounded-full"
                  style={{ backgroundColor: "#fef3c6" }}
                ></div>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Don&apos;t just take our word for it. Here&apos;s what our
              satisfied customers have to say about their experience with us.
            </p>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-[90%] mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goBack}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-100 -ml-16 hover:scale-110"
            style={{
              backgroundColor: "white",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#00776e";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-100 -mr-16 hover:scale-110"
            style={{
              backgroundColor: "white",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#00776e";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
          </button>

          {/* Swiper Component */}
          <Swiper
            slidesPerView={sliderPreviewView}
            spaceBetween={30}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            className="w-full hover:cursor-grab pb-16"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2 mb-8">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={review.image}
                      alt={`${review.name} testimonial`}
                      height={1200}
                      width={1200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group">
                        <Play
                          className="w-4 h-4 text-white ml-0.5"
                          fill="white"
                        />
                      </button>
                    </div>

                    {/* Quote Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#00776e" }}
                      >
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4"
                          fill="#00776e"
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      &quot;{review.review}&quot;
                    </p>

                    {/* Customer Info */}
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: "#00776e" }}
            >
              <Star className="w-8 h-8 text-white" fill="white" />
            </div>
            <div
              className="text-3xl font-bold mb-1"
              style={{ color: "#00776e" }}
            >
              4.9
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>

          <div className="text-center group">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: "#ab6447" }}
            >
              <div className="text-xl font-bold text-white">500+</div>
            </div>
            <div
              className="text-3xl font-bold mb-1"
              style={{ color: "#00776e" }}
            >
              500+
            </div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>

          <div className="text-center group">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: "#00776e" }}
            >
              <div className="text-2xl font-bold text-white">15+</div>
            </div>
            <div
              className="text-3xl font-bold mb-1"
              style={{ color: "#00776e" }}
            >
              15+
            </div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>

          <div className="text-center group">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: "#ab6447" }}
            >
              <div className="text-2xl font-bold text-white">98%</div>
            </div>
            <div
              className="text-3xl font-bold mb-1"
              style={{ color: "#00776e" }}
            >
              98%
            </div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#00776e" }}
            >
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the same exceptional service and quality that our
              customers rave about.
            </p>
            <OpenGetQuoteDialog isOpen>
              <button
                className="px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#00776e" }}
              >
                Start Your Project Today
              </button>
            </OpenGetQuoteDialog>
          </div>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background-color: #e5e7eb !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #00776e !important;
          width: 32px !important;
          border-radius: 6px !important;
        }

        .swiper-pagination {
          bottom: 0 !important;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
