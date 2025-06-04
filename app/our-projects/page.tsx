import { ProjectCard } from "@/components/AiComponents/OurProjects/ProjectCard";
import { IOurProject } from "@/types";
import { Square } from "lucide-react";
import React from "react";

// Sample project data
const projects: IOurProject[] = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    location: "Kolkata, West Bengal",
    area: "3500 sq ft",
    completedDate: "December 2024",
    client: "The Sharma Family",
    category: "Residential",
    description:
      "A contemporary villa design featuring clean lines, open spaces, and natural materials that create a harmonious living environment. This project showcases the perfect blend of functionality and aesthetic appeal.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
    featured: true,
    budget: "₹45 Lakhs",
    duration: "6 months",
    style: "Modern Minimalist",
    rating: 5,
    highlights: [
      "Smart Home Integration",
      "Energy Efficient Design",
      "Premium Materials",
      "Custom Furniture",
    ],
  },
  {
    id: 2,
    title: "Corporate Office Redesign",
    location: "Salt Lake, Kolkata",
    area: "5000 sq ft",
    completedDate: "November 2024",
    client: "Tech Solutions Ltd",
    category: "Commercial",
    description:
      "Complete office transformation focusing on productivity, collaboration, and employee wellbeing through innovative design solutions that enhance workplace culture and efficiency.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=800&h=600&fit=crop",
    ],
    featured: false,
    budget: "₹60 Lakhs",
    duration: "4 months",
    style: "Contemporary Corporate",
    rating: 5,
    highlights: [
      "Collaborative Spaces",
      "Acoustic Solutions",
      "Ergonomic Design",
      "Sustainable Materials",
    ],
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    location: "Park Street, Kolkata",
    area: "4200 sq ft",
    completedDate: "January 2025",
    client: "Mr. & Mrs. Gupta",
    category: "Residential",
    description:
      "An elegant penthouse design combining luxury with functionality, featuring premium materials and panoramic city views that create an opulent living experience.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-604b3cc3304b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop",
    ],
    featured: true,
    budget: "₹1.2 Crores",
    duration: "8 months",
    style: "Luxury Contemporary",
    rating: 5,
    highlights: [
      "Premium Finishes",
      "City Views",
      "Wine Cellar",
      "Home Theater",
    ],
  },
  {
    id: 4,
    title: "Boutique Hotel Lobby",
    location: "New Town, Kolkata",
    area: "2800 sq ft",
    completedDate: "October 2024",
    client: "Heritage Hotels",
    category: "Hospitality",
    description:
      "A sophisticated hotel lobby design that welcomes guests with warmth while maintaining an air of contemporary elegance and comfort.",
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    ],
    featured: false,
    budget: "₹35 Lakhs",
    duration: "3 months",
    style: "Contemporary Hospitality",
    rating: 4,
    highlights: [
      "Grand Entrance",
      "Reception Design",
      "Lounge Areas",
      "Lighting Design",
    ],
  },
  {
    id: 5,
    title: "Family Townhouse",
    location: "Ballygunge, Kolkata",
    area: "2900 sq ft",
    completedDate: "September 2024",
    client: "The Roy Family",
    category: "Residential",
    description:
      "A warm and inviting family home design that balances style with practical living for a growing family, creating functional yet beautiful spaces.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop",
    ],
    featured: false,
    budget: "₹28 Lakhs",
    duration: "5 months",
    style: "Modern Family",
    rating: 5,
    highlights: [
      "Kid-Safe Design",
      "Storage Solutions",
      "Family Areas",
      "Garden Integration",
    ],
  },
  {
    id: 6,
    title: "Restaurant Interior",
    location: "Camac Street, Kolkata",
    area: "1800 sq ft",
    completedDate: "August 2024",
    client: "Flavors Restaurant",
    category: "Commercial",
    description:
      "An atmospheric restaurant design that enhances the dining experience through thoughtful lighting, spatial planning, and ambient design elements.",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop",
    ],
    featured: false,
    budget: "₹22 Lakhs",
    duration: "3 months",
    style: "Contemporary Dining",
    rating: 4,
    highlights: [
      "Ambient Lighting",
      "Seating Design",
      "Kitchen Integration",
      "Sound Acoustics",
    ],
  },
];

export default function OurProjectsPage() {
  const activeCategory = "All";

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00776e] via-[#00776e] to-[#00776e]/80 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/3 to-transparent transform -rotate-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Our <span className="text-white underline">Masterpieces</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed">
              Discover our portfolio of exceptional interior design projects
              that transform ordinary spaces into extraordinary experiences
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {projects.length}+
                </div>
                <div className="text-lg font-medium">Completed Projects</div>
                <div className="text-sm text-gray-200 mt-1">
                  Successfully delivered
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {new Set(projects.map((p) => p.client)).size}+
                </div>
                <div className="text-lg font-medium">Happy Clients</div>
                <div className="text-sm text-gray-200 mt-1">
                  Satisfied customers
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {/* {categories.length - 1} */}
                  200
                </div>
                <div className="text-lg font-medium">Specializations</div>
                <div className="text-sm text-gray-200 mt-1">
                  Design categories
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-0">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Square className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                No projects found
              </h3>
              <p className="text-gray-500 text-lg">
                Try selecting a different category to explore more projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#00776e] via-[#00776e] to-[#00776e]/90 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#ab6447]/10 to-transparent transform skew-y-3"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Create Your{" "}
            <span className="text-white underline">Dream Space</span>?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed max-w-3xl mx-auto">
            Let&apos;s collaborate to transform your vision into reality. Our expert
            design team is ready to create something extraordinary for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#ab6447] hover:bg-[#ab6447]/90 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Your Project
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/30">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
