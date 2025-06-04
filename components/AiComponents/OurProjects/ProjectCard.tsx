import {
  Award,
  Calendar,
  ChevronUp,
  MapPin,
  Ruler,
  Square,
  Star,
  User,
} from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import { IOurProject } from "@/types";
import Button from "@/components/Button";
import ReadMore from "@/components/Utils/ReadMore";
import ReadMoreContent from "@/components/Utils/ReadMoreContent";
import ReadMoreToggle from "@/components/Utils/ReadMoreToggle";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";

// Project card component
export const ProjectCard: React.FC<{
  project: IOurProject;
  featured?: boolean;
}> = ({ project, featured = false }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 ${
        featured
          ? "lg:col-span-2 transform hover:-translate-y-2"
          : "hover:-translate-y-1"
      }`}
    >
      <div className="relative">
        <ImageCarousel images={project.images} title={project.title} />

        {/* Floating badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-[#00776e] text-sm font-semibold rounded-full shadow-lg">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-4 py-2 bg-[#ab6447] text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-1">
              <Award className="w-4 h-4" />
              Featured
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < project.rating
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-3">
          <h3
            className={`font-bold text-gray-900 mb-3 group-hover:text-[#00776e] transition-colors ${
              featured ? "text-2xl lg:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>

        <ReadMore>
          <div className="mb-6 flex items-center justify-between">
            <ReadMoreToggle type="OPEN">
              <button className="flex items-center gap-1.5 text-secondary cursor-pointer">
                Explore More <ChevronUp className="rotate-180 mt-1" />
              </button>
            </ReadMoreToggle>
            <ReadMoreToggle type="CLOSE">
              <button className="flex items-center gap-1.5 text-secondary cursor-pointer">
                Explore Less <ChevronUp className="mt-1" />
              </button>
            </ReadMoreToggle>

            <OpenGetQuoteDialog isOpen = {true}>
              <Button className="max-sm:hidden">Get Free Quote</Button>
            </OpenGetQuoteDialog>
            {/* <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl max-sm:hidden">
              Get Free Quote
            </button> */}
          </div>

          <ReadMoreContent>
            {/* Project Details Grid */}
            <div
              className={`grid gap-4 mb-6 ${
                featured ? "lg:grid-cols-2" : "grid-cols-1"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-[#00776e]/10 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-[#00776e]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">{project.location}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-[#ab6447]/10 rounded-full flex items-center justify-center mr-3">
                    <Ruler className="w-5 h-5 text-[#ab6447]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Area</div>
                    <div className="font-medium">{project.area}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-[#00776e]/10 rounded-full flex items-center justify-center mr-3">
                    <Calendar className="w-5 h-5 text-[#00776e]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Completed</div>
                    <div className="font-medium">{project.completedDate}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-[#ab6447]/10 rounded-full flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-[#ab6447]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Client</div>
                    <div className="font-medium">{project.client}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-[#00776e]/10 rounded-full flex items-center justify-center mr-3">
                    <Square className="w-5 h-5 text-[#00776e]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Style</div>
                    <div className="font-medium">{project.style}</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#00776e]/5 to-[#ab6447]/5 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">
                    Project Investment
                  </div>
                  <div className="text-xl font-bold text-[#00776e]">
                    {project.budget}
                  </div>
                  <div className="text-sm text-gray-500">
                    Duration: {project.duration}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Project Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 text-[#00776e] text-sm rounded-full border border-[#00776e]/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Satisfaction */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">
                    Client Satisfaction
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < project.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {project.rating}/5 Stars
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#00776e]">
                    {project.rating * 20}%
                  </div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </div>
            </div>
          </ReadMoreContent>
          <OpenGetQuoteDialog isOpen>
            <Button className="hidden max-sm:flex">Get Free Quote</Button>
          </OpenGetQuoteDialog>

          {/* <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hidden max-sm:block">
            Get Free Quote
          </button> */}
        </ReadMore>
      </div>
    </div>
  );
};
