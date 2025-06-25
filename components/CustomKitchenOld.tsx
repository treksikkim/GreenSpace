"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { LoaderCircle } from "lucide-react";
import OpenGetQuoteDialog from "./Utils/OpenGetQuoteDialog";
import Button from "./Button";

interface ITypeInfo {
  id: string;
  src: string;
  alt: string;
  filterType: "color" | "image";
  filterValue: string;
}

interface IFinishTypeInfo {
  id: string;
  name: string;
  typeInfo: ITypeInfo[];
}

const finishTypeOptions: IFinishTypeInfo[] = [
  {
    id: "lacquered-glass",
    name: "Lacquered Glass",
    typeInfo: [
      {
        id: "1",
        src: "/customize-kitchen/lacquered-glass/1.webp",
        alt: "",
        filterType: "color",
        filterValue: "#a1b29e",
      },
      {
        id: "2",
        src: "/customize-kitchen/lacquered-glass/2.webp",
        alt: "",
        filterType: "color",
        filterValue: "#6dacbb",
      },
      {
        id: "3",
        src: "/customize-kitchen/lacquered-glass/3.webp",
        alt: "",
        filterType: "color",
        filterValue: "#b0afaf",
      },
      {
        id: "4",
        src: "/customize-kitchen/lacquered-glass/4.webp",
        alt: "",
        filterType: "color",
        filterValue: "#98b6c1",
      },
      {
        id: "5",
        src: "/customize-kitchen/lacquered-glass/5.webp",
        alt: "",
        filterType: "color",
        filterValue: "#95c9be",
      },
      {
        id: "6",
        src: "/customize-kitchen/lacquered-glass/6.webp",
        alt: "",
        filterType: "color",
        filterValue: "#ca675b",
      },
      {
        id: "7",
        src: "/customize-kitchen/lacquered-glass/7.webp",
        alt: "",
        filterType: "color",
        filterValue: "#6c77b7",
      },
      {
        id: "8",
        src: "/customize-kitchen/lacquered-glass/8.webp",
        alt: "",
        filterType: "color",
        filterValue: "#a4ad2c",
      },
    ],
  },
  {
    id: "veneers",
    name: "Veneers",
    typeInfo: [
      {
        id: "1",
        src: "/customize-kitchen/veneers/1.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers/tex1.jpg",
      },
      {
        id: "2",
        src: "/customize-kitchen/veneers/2.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers/tex2.webp",
      },
      {
        id: "3",
        src: "/customize-kitchen/veneers/3.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers/tex3.jpg",
      },
      {
        id: "4",
        src: "/customize-kitchen/veneers/4.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers/tex4.jpg",
      },
      {
        id: "5",
        src: "/customize-kitchen/veneers/5.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers/tex5.jpg",
      },
      {
        id: "6",
        src: "/customize-kitchen/veneers/6.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers/tex6.jpg",
      },
      {
        id: "7",
        src: "/customize-kitchen/veneers/7.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers/tex7.jpg",
      },
      {
        id: "8",
        src: "/customize-kitchen/veneers/8.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/veneers/tex8.jpg",
      },
    ],
  },
  {
    id: "acrylics",
    name: "Acrylics",
    typeInfo: [
      {
        id: "1",
        src: "/customize-kitchen/acrylics/1.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex1.jpg",
      },
      {
        id: "2",
        src: "/customize-kitchen/acrylics/2.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex2.webp",
      },
      {
        id: "3",
        src: "/customize-kitchen/acrylics/3.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex3.jpg",
      },
      {
        id: "4",
        src: "/customize-kitchen/acrylics/4.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex4.webp",
      },
      {
        id: "5",
        src: "/customize-kitchen/acrylics/5.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex5.jpg",
      },
      {
        id: "6",
        src: "/customize-kitchen/acrylics/6.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex6.jpg",
      },
      {
        id: "7",
        src: "/customize-kitchen/acrylics/7.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex7.webp",
      },
      {
        id: "8",
        src: "/customize-kitchen/acrylics/8.webp",
        alt: "",
        filterType: "image",
        filterValue: "/customize-kitchen/acrylics/tex8.jpg",
      },
    ],
  },
];

const CustomizeKitchen: React.FC = () => {
  const searchParams = useSearchParams();

  const catIndexParams = searchParams.get("category");
  const filterIndexParams = searchParams.get("filter");

  const [isPendingCat, startTransitionCat] = useTransition();
  const [isPendingFilter, startTransitionFilter] = useTransition();

  let catIndex = 0;
  if (catIndexParams && !isNaN(parseInt(catIndexParams))) {
    catIndex = parseInt(catIndexParams);
  }

  let filterIndex = 0;
  if (filterIndexParams && !isNaN(parseInt(filterIndexParams))) {
    filterIndex = parseInt(filterIndexParams);
  }

  const handleAnyCatClick = (index: number) => {
    startTransitionCat(() => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("category", index.toString());
      newSearchParams.set("filter", "0");
      history.pushState(null, "", `?${newSearchParams.toString()}`);
    });
  };

  const handleAnyFilterClick = (index: number) => {
    startTransitionFilter(() => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("filter", index.toString());
      history.pushState(null, "", `?${newSearchParams.toString()}`);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Customise Your Kitchen
            </h1>
            <p className="text-gray-600">
              Looking to customise your Kitchen? Check out the looks for the
              popular{" "}
              <span className="text-teal-600 font-medium">
                Modular Kitchen finishes
              </span>{" "}
              amongst our 10,000+ customers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Kitchen Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg overflow-hidden space-y-3.5">
              <div className="relative w-full aspect-video">
                {/* Main kitchen image would go here */}
                {finishTypeOptions[catIndex].typeInfo.map((item, index) => (
                  <Image
                    key={item.id}
                    className={cn(
                      "absolute inset-0 size-full",
                      filterIndex === index ? "z-0" : "-z-10"
                    )}
                    alt={item.alt}
                    src={item.src}
                    height={1280}
                    loading="eager"
                    width={720}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Finish Type */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Finish Type
              </h3>
              <div className="flex flex-wrap gap-3.5 max-sm:flex-nowrap overflow-x-auto">
                {finishTypeOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnyCatClick(index)}
                    className={`px-4 max-sm:shrink-0 py-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                      catIndex === index
                        ? "bg-teal-600 text-white border-teal-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {isPendingCat ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      option.name
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Options */}
            {/* <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Style Options</h3>
              <div className="grid grid-cols-2 gap-3">
                {styleOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedStyle(option.id)}
                    className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                      selectedStyle === option.id
                        ? 'bg-teal-600 text-white border-teal-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Color Selection */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Colors
              </h3>
              <div className="flex items-center gap-3.5 flex-wrap">
                {finishTypeOptions[catIndex].typeInfo.map(
                  (eachTypeInfo, index) => (
                    <button
                      key={eachTypeInfo.id}
                      onClick={() => handleAnyFilterClick(index)}
                      className={`w-8 h-8 border-2 flex items-center justify-center transition-all duration-200 ${
                        filterIndex === index
                          ? "border-teal-600 ring-2 ring-teal-600 ring-offset-2"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{
                        backgroundColor:
                          eachTypeInfo.filterType === "color"
                            ? eachTypeInfo.filterValue
                            : "",
                      }}
                      title={eachTypeInfo.alt}
                    >
                      {isPendingFilter ? (
                        <LoaderCircle size={10} className="animate-spin" />
                      ) : eachTypeInfo.filterType === "image" ? (
                        <Image
                          className="size-full"
                          src={eachTypeInfo.filterValue}
                          alt={eachTypeInfo.alt}
                          height={50}
                          width={50}
                        />
                      ) : null}
                    </button>
                  )
                )}
              </div>
              {/* <div className="flex justify-between items-center mt-4">
                <button className="text-teal-600 text-sm font-medium flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  Show More
                </button>
                <button className="text-teal-600 text-sm font-medium flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  Show Less
                </button>
              </div> */}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200">
                  Book a Free Design Consultation
                </button> */}
              <OpenGetQuoteDialog isOpen>
                <Button>Book a Free Design Consultation</Button>
              </OpenGetQuoteDialog>
              {/* <button className="w-full border border-teal-600 text-teal-600 py-3 px-6 rounded-lg font-medium hover:bg-teal-50 transition-colors duration-200">
                  View More Kitchen Designs →
                </button> */}
            </div>
          </div>
        </div>

        {/* Kitchen Gallery */}
        {/* <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Kitchen Designs
            </h2>
            <p className="text-gray-600">
              Showing {filteredKitchens.length} of {kitchenDesigns.length}{" "}
              designs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKitchens.map((kitchen) => (
              <div
                key={kitchen.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-48 bg-gray-200">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0v-5a1 1 0 011-1h4a1 1 0 011 1v5m-4-8a2 2 0 100-4 2 2 0 000 4z"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {kitchen.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full">
                      {kitchen.finish.charAt(0).toUpperCase() +
                        kitchen.finish.slice(1).replace("-", " ")}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {kitchen.style.charAt(0).toUpperCase() +
                        kitchen.style.slice(1).replace("-", " ")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredKitchens.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No designs found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters to see more kitchen designs.
              </p>
            </div>
          )}
        </div> */}

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <span className="font-medium">Disclaimer:</span> The images on our
            site are for reference only. Please contact us to discuss your
            specific needs and to tailor a unique design for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomizeKitchen;
