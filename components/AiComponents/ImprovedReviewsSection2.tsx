"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  CalendarFold,
  Smile,
  ChevronDown,
} from "lucide-react";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import Counter from "../Counter";
import VideoViewDialog from "../Dialogs/VideoViewDialog";
import { cn } from "@/utils/cn";

export default function ImprovedReviewsSection2() {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

  const [readMoreId, setReadMoreId] = useState<string | number>(-1);

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [sliderPreviewView, setSliderPreviewView] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateSliderView = () => {
        if (window.innerWidth <= 800) {
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

  const reviews: {
    id: number | string;
    name: string;
    location: string;
    review: string;
    rating: number;
    image: string;
    videoLink?: string;
  }[] = [
    {
      id: 1,
      name: "Mr Amit Das",
      location: "Kolkata",
      review:
        "Green Space had a collection of creative designs and our search for a home interior firm ended here. We were happy with flawless execution and timely customer interaction. I am very happy to hire them. They are the best Interior Designer in Kolkata. Highly recommended.",
      rating: 5,
      image: "/happy-customer.png",
    },
    {
      id: 2,
      name: "Mr. Veerinder Kumar",
      review: `If you are finding a perfect interior designer in Kolkata, then I will suggest you choose Green Space. I hired them to design my 2BHK flat in Kolkata from Google. They respond very quickly and send me a perfect quotation for my flat interior design. They are the cheapest interior designer in Kolkata.`,
      rating: 5,
      image: "/happy-customer.png",
      location: "Kolkata",
    },
    {
      id: 3,
      name: "Mr. Arpan Biswas",
      review: `We hired Green Space for our home interiors. The project manager was very responsive. They took our requests to a desirable conclusion. It has been a value for money outcome, with good finishes as promised. So, if you are looking for an interior designer in Kolkata, then contact them.`,
      rating: 5,
      image: "/happy-customer.png",
      location: "Kolkata",
    },
    {
      id: 4,
      name: "Mrs. Samriddhi Pul",
      review: `I am looking for an interior designer to design my flat, then I found Green Space on Google. I called them and they respond very quickly. Also, they send me a quotation very quickly, which matches with my budget. I am very happy to hire them. I am fully satisfied with their service.`,
      rating: 5,
      image: "/happy-customer.png",
      location: "Kolkata",
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
    <>
      <VideoViewDialog
        isOpen={isVideoDialogOpen}
        setIsOpen={setIsVideoDialogOpen}
      />

      <section className="py-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden font-jost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block">
              {/* <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 block">
              Testimonials
            </span> */}
              <div
                data-aos="fade-down"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6"
              >
                <Star className="w-5 h-5 text-[#00776e]" />
                <span className="text-[#00776e] font-medium">Testimonials</span>
              </div>
              <h2
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-bold mb-4 relative"
              >
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
              <p
                data-aos="fade-up"
                className="text-lg text-gray-600 max-w-2xl mx-auto mt-6"
              >
                Don&apos;t just take our word for it. Here&apos;s what our
                satisfied customers have to say about their experience with us.
              </p>
            </div>
          </div>

          {/* Reviews Carousel */}
          <div data-aos="fade-up" className="relative max-w-[90%] mx-auto">
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
                    {/* <div className="relative h-48 overflow-hidden"> */}
                    {/* <Image
                        src={review.image}
                        alt={`${review.name} testimonial`}
                        height={1200}
                        width={1200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      /> */}

                    {/* Play Button Overlay */}
                    {/* {review?.videoLink ? (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                          <button
                            onClick={() => setIsVideoDialogOpen(true)}
                            className="absolute  top-4 right-4 w-10 h-10 bg-[#00776e] backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group"
                          >
                            <Play
                              className="w-4 h-4 text-white ml-0.5"
                              fill="white"
                            />
                          </button>
                        </div>
                      ) : null} */}

                    {/* Quote Icon */}
                    {/* <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#00776e]">
                          <Quote className="w-5 h-5 text-white" />
                        </div>
                      </div> */}
                    {/* </div> */}

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
                      <div className="relative">
                        <p
                          onClick={() =>
                            setReadMoreId((prev) =>
                              prev === review.id ? -1 : review.id
                            )
                          }
                          className={cn(
                            "text-gray-600 mb-4 leading-relaxed transition-all duration-300",
                            readMoreId === review.id ? "" : "line-clamp-3"
                          )}
                        >
                          &quot;{review.review}&quot;
                        </p>
                        <ChevronDown
                          onClick={() =>
                            setReadMoreId((prev) =>
                              prev === review.id ? -1 : review.id
                            )
                          }
                          className={cn(
                            "transition-all p-0.5 duration-300 bg-amber-600 text-white rounded-full",
                            readMoreId === review.id ? "rotate-180" : ""
                          )}
                          size={18}
                        />
                      </div>

                      {/* Customer Info */}
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Stats Section */}
          <div
            data-aos="fade-up"
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center group">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "#00776e" }}
              >
                <Star color="#ffffff" />
              </div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "#00776e" }}
              >
                <Counter to={4.9} intervel={300} />
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>

            <div className="text-center group">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "#ab6447" }}
              >
                <div className="text-xl font-bold text-white">
                  <Users />
                </div>
              </div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "#00776e" }}
              >
                <Counter to={500} />+
              </div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>

            <div className="text-center group">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "#00776e" }}
              >
                <div className="text-2xl font-bold text-white">
                  <CalendarFold />
                </div>
              </div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "#00776e" }}
              >
                <Counter to={15} intervel={120} />+
              </div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>

            <div className="text-center group">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "#ab6447" }}
              >
                <div className="text-2xl font-bold text-white">
                  <Smile />
                </div>
              </div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "#00776e" }}
              >
                <Counter to={98} intervel={20} />%
              </div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-16 text-center"
          >
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
    </>
  );
}
