import { CheckCircle, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="size-full bg-gradient-to-br from-slate-50 to-white">
      {/* Main Content */}
      <main className="size-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="size-full text-center transition-all duration-1000 transform">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-teal-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Thank You!
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;ve received your message and truly appreciate you reaching out to
            us. Our design team will review your requirements and get back to
            you within 24 hours.
          </p>

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Review</h3>
                <p className="text-gray-600 text-sm">
                  Our team reviews your project requirements and preferences
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600 text-sm">
                  We&apos;ll reach out within 24 hours to discuss your vision
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600 text-sm">
                  We&apos;ll create a personalized design proposal for you
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">340+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                520+
              </div>
              <div className="text-gray-600 text-sm">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">28+</div>
              <div className="text-gray-600 text-sm">Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">99%</div>
              <div className="text-gray-600 text-sm">Satisfaction</div>
            </div>
          </div> */}

          {/* Contact Information */}
          {/* <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Need Immediate Assistance?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 mr-3" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-teal-100">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 mr-3" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-teal-100">hello@olivespace.com</div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={"/"}>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </div>

          {/* Social Proof */}
          {/* <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-4">
              Follow us for daily design inspiration
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">ig</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">tw</span>
              </div>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">yt</span>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}
