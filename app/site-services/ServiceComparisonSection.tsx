import React, { useState } from "react";
import {
  Check,
  X,
  Clock,
  Shield,
  Award,
  Headphones,
  DollarSign,
  FileCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";

const ServiceComparisonSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const comparisonData = [
    {
      icon: <Clock className="w-5 h-5" />,
      feature: "Project Tracking",
      localVendor: false,
      peerCompanies: "maybe",
      greenSpace: true,
      description: "A project tracking tool for real time updates",
      details:
        "Get live updates on your project progress with our advanced tracking system.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      feature: "Trust",
      localVendor: false,
      peerCompanies: "maybe",
      greenSpace: true,
      description: "We are present in 10 cities with 10,000+ happy customers",
      details:
        "Built trust through years of exceptional service delivery across multiple cities.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      feature: "Quality",
      localVendor: false,
      peerCompanies: "maybe",
      greenSpace: true,
      description:
        "A dedicated quality control team to ensure high standard of Services",
      details:
        "Our quality assurance team ensures every project meets the highest standards.",
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      feature: "After Sales Services",
      localVendor: false,
      peerCompanies: "maybe",
      greenSpace: true,
      description: "Comprehensive post-delivery support",
      details:
        "24/7 customer support and maintenance services for complete peace of mind.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      feature: "Price Guarantee",
      localVendor: false,
      peerCompanies: "maybe",
      greenSpace: true,
      description: "Transparent Pricing",
      details:
        "No hidden costs, clear pricing structure with detailed breakdowns.",
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      feature: "Warranty",
      localVendor: false,
      peerCompanies: "maybe",
      greenSpace: true,
      description: "On Selected Products*",
      details: "Comprehensive warranty coverage on materials and workmanship.",
    },
  ];

  const StatusIcon = ({ status }: { status: boolean | string }) => {
    if (status === true) {
      return <Check className="w-4 h-4 text-white" />;
    } else if (status === false) {
      return <X className="w-4 h-4 text-white" />;
    } else {
      return (
        <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
          Maybe
        </span>
      );
    }
  };

  const getColumnBg = (status: boolean | string) => {
    if (status === true) {
      return "bg-teal-600";
    } else if (status === false) {
      return "bg-red-500";
    } else {
      return "bg-gray-400";
    }
  };

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Green Space Site Service Advantage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience The Convenience Of A One-Stop Solution For All Your Home
            Interiors Needs
          </p>
        </div>

        {/* Desktop View - Fixed Table Layout */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Fixed Header */}
            <div className="grid grid-cols-12 bg-gray-50 border-b-2 border-gray-200">
              <div className="col-span-3 px-6 py-4"></div>
              <div className="col-span-2 px-4 py-4 text-center">
                <div className="bg-orange-500 text-white px-3 py-2 rounded-lg font-semibold text-sm">
                  Local Vendor
                </div>
              </div>
              <div className="col-span-2 px-4 py-4 text-center">
                <div className="bg-gray-500 text-white px-3 py-2 rounded-lg font-semibold text-sm">
                  Peer Companies
                </div>
              </div>
              <div className="col-span-2 px-4 py-4 text-center">
                <div className="bg-teal-600 text-white px-3 py-2 rounded-lg font-semibold text-sm">
                  Green Space Services
                </div>
              </div>
              <div className="col-span-3 px-6 py-4"></div>
            </div>

            {/* Table Body - Fixed Layout */}
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 border-b border-gray-100 hover:bg-gray-50 transition-colors min-h-20"
              >
                {/* Feature Column - Fixed Width */}
                <div className="col-span-3 px-6 py-5 flex items-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mr-3 flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">
                    {item.feature}
                  </span>
                </div>

                {/* Local Vendor Column - Fixed Width */}
                <div className="col-span-2 px-4 py-5 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${getColumnBg(
                      item.localVendor
                    )}`}
                  >
                    <StatusIcon status={item.localVendor} />
                  </div>
                </div>

                {/* Peer Companies Column - Fixed Width */}
                <div className="col-span-2 px-4 py-5 flex items-center justify-center">
                  <div
                    className={`px-3 py-1 rounded-lg ${getColumnBg(
                      item.peerCompanies
                    )} min-w-16 text-center`}
                  >
                    <StatusIcon status={item.peerCompanies} />
                  </div>
                </div>

                {/* Green Space Column - Fixed Width */}
                <div className="col-span-2 px-4 py-5 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${getColumnBg(
                      item.greenSpace
                    )}`}
                  >
                    <StatusIcon status={item.greenSpace} />
                  </div>
                </div>

                {/* Description Column - Fixed Width */}
                <div className="col-span-3 px-6 py-5 flex items-center">
                  <div className="bg-teal-50 text-teal-800 px-3 py-2 rounded-lg text-sm font-medium">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Individual Cards */}
        <div className="lg:hidden space-y-3">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className="p-4 cursor-pointer flex items-center justify-between"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mr-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {item.feature}
                  </h3>
                </div>
                <div className="flex items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${getColumnBg(
                      item.greenSpace
                    )} mr-3`}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {expandedCard === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCard === index && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <div className="pt-4">
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-gray-700 text-sm font-medium mb-2">
                        {item.description}
                      </p>
                      <p className="text-gray-600 text-xs">{item.details}</p>
                    </div>

                    {/* Comparison Row */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-2">
                          LOCAL VENDOR
                        </div>
                        <div
                          className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getColumnBg(
                            item.localVendor
                          )}`}
                        >
                          <StatusIcon status={item.localVendor} />
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-2">
                          PEER COMPANIES
                        </div>
                        <div
                          className={`px-2 py-1 mx-auto rounded-lg ${getColumnBg(
                            item.peerCompanies
                          )} inline-flex items-center justify-center`}
                        >
                          <StatusIcon status={item.peerCompanies} />
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-medium text-teal-600 mb-2">
                          GREEN SPACE
                        </div>
                        <div
                          className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getColumnBg(
                            item.greenSpace
                          )}`}
                        >
                          <StatusIcon status={item.greenSpace} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss your project and create something amazing together.
            </p>
            <OpenGetQuoteDialog isOpen>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                Get Quote →
              </button>
            </OpenGetQuoteDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparisonSection;
