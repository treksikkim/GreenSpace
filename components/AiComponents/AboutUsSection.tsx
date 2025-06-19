import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  Users,
  Clock,
  TrendingUp,
  BadgeInfo,
} from "lucide-react";
import Button from "../Button";
import Counter from "../Counter";

export default function AboutUsSection() {
  return (
    <section className="py-0 lg:py-0 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <div className="inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6">
              <BadgeInfo className="w-5 h-5 text-[#00776e]" />
              <span className="text-[#00776e] font-medium">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span style={{ color: "#00776e" }}> We Aim to Set the</span>
              <br />
              <span className="relative">
                Trends
                <div
                  className="absolute -bottom-2 left-0 right-0 h-3 opacity-30 rounded-full"
                  style={{ backgroundColor: "#fef3c6" }}
                ></div>
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn Who We Are, What We Do What Our Expatriates
            </p>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Section */}
          <div data-aos="fade-up" className="relative bg-amber-200">
            <div className="relative overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-2xl">
              <Image
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                alt="About Us - Interior Design Excellence"
                src="/about/about-section.png"
                height={500}
                width={600}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-sm:-right-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6"
            >
              <BadgeInfo className="w-5 h-5 text-[#00776e]" />
              <span className="text-[#00776e] font-medium">About Us</span>
            </div>
            <div className="space-y-6">
              <p
                data-aos="fade-up"
                data-aos-delay="250"
                className="text-lg text-gray-700 leading-relaxed"
              >
                Passionately creating personalised designer homes since 2015. It
                was founded by award-winning architects,{" "}
                <span className="font-semibold text-teal-700">
                  Shezaan Bhojani & Gita Ramanan
                </span>
                , who bring together more than two decades of national and
                international design experience.
              </p>
              {/* <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence and innovative design solutions has
                established us as industry leaders, consistently delivering
                spaces that blend functionality with aesthetic brilliance.
              </p> */}
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-3 gap-6  max-sm:grid-cols-1">
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-teal-600 mb-1">
                  <Counter to={346} />+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Succeeded Projects
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  <Counter to={24} intervel={100} />/
                  <Counter to={7} intervel={300} />
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Support Service
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="900"
                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  <Counter to={24} intervel={110} />+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                "Award-winning architectural expertise",
                "Personalized design solutions",
                "International design experience",
                "Sustainable and innovative approaches",
              ].map((feature, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4" data-aos="fade-left">
              {/* <button data-aos="fade-left" className="group inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <CustomLink href={"/about-us"} className="px-8 py-4">
                  More About Us
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </CustomLink>
              </button> */}
              <Button>
                More About Us
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
