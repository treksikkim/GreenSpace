"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Headset,
  ArrowRight,
  Play,
  Award,
} from "lucide-react";
import { cn } from "@/utils/cn";

// Button component
interface IButton extends React.ComponentProps<"button"> {
  variant: "primary" | "secondary" | "glass";
}
const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: IButton) => (
  <button
    className={cn(
      "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl",
      variant === "primary" &&
        "bg-gradient-to-r from-[#00776e] via-[#008b7a] to-[#00776e] text-white backdrop-blur-sm",
      variant === "secondary" &&
        "bg-gradient-to-r from-[#ab6447] via-[#c27555] to-[#ab6447] text-white backdrop-blur-sm",
      variant === "glass" &&
        "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

const OurWorksSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const works = [
    {
      id: 1,
      title: "Luxurious 2 BHK Penthouse",
      subtitle: "Modern Minimalist Design",
      category: "Residential Elite",
      description:
        "A breathtaking transformation featuring floor-to-ceiling windows, premium Italian marble, and custom-designed furniture that creates an atmosphere of sophisticated luxury.",
      image: "/our-works.jpg",
      stats: {
        area: "1,250 sq ft",
        duration: "8 weeks",
        budget: "₹12L",
        rating: "4.9/5",
      },
      highlights: [
        "Smart Home Integration",
        "Premium Materials",
        "Custom Furniture",
      ],
      color: "from-purple-600 to-blue-600",
    },
    {
      id: 2,
      title: "Elegant 3 BHK Villa Interior",
      subtitle: "Contemporary Classic Fusion",
      category: "Premium Villa",
      description:
        "An exquisite blend of contemporary aesthetics with classic charm, featuring handcrafted elements, luxury lighting, and bespoke interior solutions.",
      image: "/our-works.jpg",
      stats: {
        area: "2,100 sq ft",
        duration: "12 weeks",
        budget: "₹28L",
        rating: "5.0/5",
      },
      highlights: [
        "Handcrafted Details",
        "Designer Lighting",
        "Luxury Finishes",
      ],
      color: "from-emerald-600 to-teal-600",
    },
    {
      id: 3,
      title: "Chic Studio Apartment",
      subtitle: "Space Optimization Mastery",
      category: "Urban Living",
      description:
        "Ingenious space planning that transforms a compact studio into a multifunctional haven with hidden storage, convertible furniture, and stunning visual depth.",
      image: "/our-works.jpg",
      stats: {
        area: "550 sq ft",
        duration: "5 weeks",
        budget: "₹6L",
        rating: "4.8/5",
      },
      highlights: [
        "Space Optimization",
        "Multi-functional Design",
        "Hidden Storage",
      ],
      color: "from-orange-600 to-red-600",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % works.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, works.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentWork = works[currentIndex];

  return (
    <section className="relative overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#00776e]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-[#ab6447]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> */}

      <div className="relative container mx-auto px-4 py-5">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6">
            <Award className="w-5 h-5 text-[#00776e]" />
            <span className="text-[#00776e] font-medium">
              Award Winning Designs
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00776e] via-gray-800 to-[#ab6447] bg-clip-text text-transparent mb-6">
            Our <span className="text-[#00776e]">Masterpieces</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Step into a world where imagination meets craftsmanship. Each
            project tells a unique story of transformation, elegance, and
            innovation.
          </p>
        </div>

        {/* Revolutionary Work Display */}
        <div className="relative">
          {/* Main Showcase */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            <div className="flex flex-col xl:flex-row min-h-[500px] max-h-[500px]">
              {/* Dynamic Image Section */}
              <div className="relative xl:w-3/5 h-80 xl:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 z-10"></div>
                <Image
                  src={currentWork.image}
                  alt={currentWork.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 1280px) 100vw, 60vw"
                  priority
                />

                {/* Floating Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div
                    className={cn(
                      "px-4 py-2 bg-gradient-to-r backdrop-blur-md rounded-full text-white font-medium shadow-lg",
                      currentWork.color
                    )}
                  >
                    {currentWork.category}
                  </div>
                </div>

                {/* Play Video Button */}
                <div className="absolute top-6 right-6 z-20 flex items-center justify-center">
                  <Button
                    variant="glass"
                    className="w-12 h-12 p-0 rounded-full flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                  </Button>
                </div>

                {/* Elegant Navigation */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-4 bg-black/20 backdrop-blur-md rounded-full px-6 py-3">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 group"
                    >
                      <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </button>

                    <div className="flex gap-2">
                      {works.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            index === currentIndex
                              ? "w-8 bg-white"
                              : "w-2 bg-white/50 hover:bg-white/70"
                          )}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 group"
                    >
                      <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Premium Content Section */}
              <div className="xl:w-2/5 p-8 xl:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  {/* Title Section */}
                  <div>
                    <h3 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                      {currentWork.title}
                    </h3>
                    <p className="text-lg text-[#00776e] font-medium mb-4">
                      {currentWork.subtitle}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {currentWork.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {/* <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Highlights:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentWork.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 text-[#00776e] rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  {/* Enhanced Stats Grid */}
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Ruler className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-blue-600 font-medium">
                          Area
                        </span>
                      </div>
                      <div className="text-xl font-bold text-blue-900">
                        {currentWork.stats.area}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">
                          Duration
                        </span>
                      </div>
                      <div className="text-xl font-bold text-green-900">
                        {currentWork.stats.duration}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-2xl border border-purple-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-4 h-4 text-purple-600 font-bold">
                          ₹
                        </span>
                        <span className="text-sm text-purple-600 font-medium">
                          Investment
                        </span>
                      </div>
                      <div className="text-xl font-bold text-purple-900">
                        {currentWork.stats.budget}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-2xl border border-orange-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-orange-600" />
                        <span className="text-sm text-orange-600 font-medium">
                          Rating
                        </span>
                      </div>
                      <div className="text-xl font-bold text-orange-900">
                        {currentWork.stats.rating}
                      </div>
                    </div>
                  </div> */}

                  {/* Premium CTA */}
                  <div className="space-y-4">
                    <Button
                      variant="secondary"
                      className="w-full py-4 text-lg font-semibold group flex items-center gap-2.5"
                    >
                      <Headset className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                      Schedule Your Dream Consultation
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    {/* <Button
                      variant="primary"
                      className="w-full py-3 font-medium"
                    >
                      Explore Full Portfolio
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Action Bar */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
            <div className="bg-white/90 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-white/20">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00776e]">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ab6447]">4.9★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00776e]">100%</div>
                  <div className="text-sm text-gray-600">Satisfied</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorksSection;
