"use client";

import {
  Palette,
  Hammer,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import { ImageCarousel } from "@/components/AiComponents/OurProjects/ImageCarousel";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";
import ServiceComparisonSection from "./ServiceComparisonSection";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  images: string[];
  icon?: React.ReactNode;
  popular?: boolean;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SiteServicesPage: React.FC = () => {
//   const [activeService, setActiveService] = useState<string>("residential");

  const services: Service[] = [
    {
      id: "residential",
      title: "Residential Interior Design",
      subtitle: "Transform your home into a beautiful sanctuary",
      description:
        "Complete home interior solutions from concept to completion. We create personalized living spaces that reflect your style and enhance your daily life.",
      features: [
        "Complete home makeover solutions",
        "Space planning and layout optimization",
        "Custom furniture design and selection",
        "Color consultation and material selection",
        "Lighting design and installation",
        "3D visualization and renders",
      ],
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      ],
      //   icon: <Home className="w-6 h-6" />,
    },
    {
      id: "commercial",
      title: "Commercial Interior Design",
      subtitle: "Professional spaces that inspire productivity",
      description:
        "Create impressive commercial environments that enhance your brand image and employee productivity.",
      features: [
        "Office space planning and design",
        "Retail and showroom design",
        "Restaurant and hospitality design",
        "Brand-focused interior solutions",
        "Ergonomic workspace design",
        "Sustainable design practices",
      ],
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      ],
      //   icon: <Users className="w-6 h-6" />,
      popular: true,
    },
    {
      id: "renovation",
      title: "Home Renovation",
      subtitle: "Breathe new life into your existing space",
      description:
        "Comprehensive renovation services that transform outdated spaces into modern, functional environments.",
      features: [
        "Kitchen and bathroom renovation",
        "Structural modifications",
        "Flooring and wall treatments",
        "Electrical and plumbing updates",
        "Storage solutions design",
        "Energy-efficient upgrades",
      ],
      images: [
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
      ],
      //   icon: <Hammer className="w-6 h-6" />,
    },
    {
      id: "consultation",
      title: "Design Consultation",
      subtitle: "Expert advice for your design journey",
      description:
        "Professional design guidance and consultation services to help you make informed decisions about your space.",
      features: [
        "One-on-one design consultation",
        "Space assessment and analysis",
        "Design concept development",
        "Material and color recommendations",
        "Budget planning and timeline",
        "Vendor and contractor recommendations",
      ],
      images: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      ],
      //   icon: <Palette className="w-6 h-6" />,
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "We discuss your vision, requirements, and budget to understand your needs perfectly.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: 2,
      title: "Design Development",
      description:
        "Our team creates detailed design concepts with 3D visualizations and material selections.",
      icon: <Palette className="w-8 h-8" />,
    },
    {
      step: 3,
      title: "Project Execution",
      description:
        "We manage the entire implementation process with skilled craftsmen and quality materials.",
      icon: <Hammer className="w-8 h-8" />,
    },
    {
      step: 4,
      title: "Final Delivery",
      description:
        "Your dream space is ready with final touches, styling, and handover documentation.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "15+ Years Experience",
      description:
        "Proven track record in delivering exceptional interior design solutions.",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "250+ Happy Clients",
      description:
        "Successfully completed projects with satisfied customers across the region.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "On-Time Delivery",
      description:
        "We commit to deadlines and ensure your project is completed as scheduled.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "2-Year Warranty",
      description:
        "Comprehensive warranty on all our work and materials for your peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00776e] to-[#005951] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Site Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Comprehensive interior design solutions tailored to transform your
              space into something extraordinary
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                End-to-end solutions
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                Expert designers
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                Quality guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of interior design services
              designed to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                // onClick={() => setActiveService(service.id)}
              >
                <div className="relative">
                  {/* <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  /> */}
                  <ImageCarousel
                    images={service.images}
                    title={service.title}
                  />
                  {service.popular && (
                    <span className="absolute top-4 right-4 bg-[#00776e] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                  {/* <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <div className="text-[#00776e]">{service.icon}</div>
                  </div> */}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#00776e] font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00776e] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <OpenGetQuoteDialog isOpen>
                    <button className="w-full bg-[#00776e] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#005951] transition-colors duration-200 flex items-center justify-center gap-2">
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </OpenGetQuoteDialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <SiteServiceAdvantage /> */}
      <ServiceComparisonSection />

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures your project is delivered on
              time, within budget, and beyond expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0" />
                )}
                <div className="bg-[#00776e] text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  {step.icon}
                </div>
                <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center mx-auto -mt-16 mb-4 border-4 border-[#00776e] relative z-10">
                  <span className="text-[#00776e] font-bold text-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine creativity, expertise, and dedication to deliver
              exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[#00776e] flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00776e] to-[#005951] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenGetQuoteDialog isOpen>
              <button className="bg-white text-[#00776e] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </OpenGetQuoteDialog>
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00776e] transition-colors duration-200">
              View Our Portfolio
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteServicesPage;
