import DetailsPageForm from "@/components/AiComponents/DetailsPage/DetailsPageForm";
import { Award, CheckCircle, Clock, Play, Star, Users } from "lucide-react";
import Image from "next/image";

interface IProps {
  params: Promise<{ slug: string | undefined }>;
}

export default async function page({ params }: IProps) {
  const id = parseInt((await params).slug || "0");
  const isVideoPlaying = false;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00776e] transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Gallery</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Green Space Interior
              </span>
            </div>
          </div>
        </div>
      </header> */}
      <span className="hidden">{id}</span>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Media & Details */}
          <div className="space-y-6">
            {/* Media Section */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                {!isVideoPlaying ? (
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                      alt="Modern Living Room Design"
                      className="w-full h-80 lg:h-96 object-cover"
                      height={1200}
                      width={1200}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <button
                        // onClick={() => setIsVideoPlaying(true)}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 text-[#00776e] p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                      >
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-80 lg:h-96 bg-gray-800 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Video Player Placeholder</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Modern Living Room Design
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Contemporary living area with minimalist approach, featuring
                  premium finishes and sophisticated color palette.
                </p>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    (4.9/5 from 127 reviews)
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#00776e]" />
                  <span className="text-gray-700">Premium Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#00776e]" />
                  <span className="text-gray-700">2-3 Weeks Completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-[#00776e]" />
                  <span className="text-gray-700">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-[#00776e]" />
                  <span className="text-gray-700">Award Winning Design</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  About This Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This contemporary living room design showcases the perfect
                  balance of comfort and sophistication. Our expert designers
                  have carefully curated every element to create a space that
                  reflects modern luxury while maintaining functionality for
                  everyday living.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The design features a harmonious color palette, premium
                  furniture selections, and strategic lighting that transforms
                  the space into a welcoming sanctuary for relaxation and
                  entertainment.
                </p>
              </div>

              {/* Pricing */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#00776e] to-[#00776e]/90 rounded-xl text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-90">Starting from</p>
                    <p className="text-3xl font-bold">₹2,50,000</p>
                    <p className="text-sm opacity-90">
                      *Price varies based on requirements
                    </p>
                  </div>
                  {/* <div className="text-right">
                    <p className="text-sm opacity-90">Special Offer</p>
                    <p className="text-lg font-semibold">25% OFF</p>
                    <p className="text-xs opacity-75">Until May 31st</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <DetailsPageForm />
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-[#00776e] text-white py-12 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join over 500+ satisfied customers who have transformed their homes
            with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#00776e] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              View Our Portfolio
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#00776e] font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
