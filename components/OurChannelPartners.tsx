import { Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const OurChannelPartners: React.FC = () => {
  const partners = [
    {
      name: "Hafele",
      logo: "/partners/hafele.png",
      category: "Hardware Fitting Supplier",
      description: "Providing hardware and fitting systems",
      link: "https://www.hafeleindia.com/en/",
    },
    {
      name: "Hettich",
      logo: "/partners/hettich.png",
      category: "Material Supplier",
      description: "Providing furniture fittings",
      link: "https://hettichindiaonline.com/",
    },
    {
      name: "Jaguar Bath Fittings",
      logo: "/partners/jaquar.jpg",
      category: "Material Supplier",
      description: "Jaquar Sanitaryware conforms to highest quality",
      link: "https://www.jaquar.com/",
    },
    {
      name: "Saint Gobain",
      logo: "/partners/Saint-Gobain.jpg",
      category: "Material Supplier",
      description: "Saint-Gobain is committed to ensuring that our activities",
      link: "https://saint-gobain.com/",
    },
    {
      name: "Doorset",
      logo: "/partners/Doorset.jpg",
      category: "Material Supplier",
      description: "Dorset India, the leading manufacture of door locks",
      link: "https://www.dorsetindia.com/",
    },
    {
      name: "Plantex Fittings",
      logo: "/partners/PlantexFittings.jpg",
      category: "Material Supplier",
      description: "Plantex Bathroom Accessories- Stainless Steel 6pcs",
      link: "https://www.plantex.in/",
    },
    {
      name: "Kohler",
      logo: "/partners/Kohler.jpg",
      category: "Material Supplier",
      description:
        "Kohler is your one stop destination for luxury sanitaryware",
      link: "https://www.kohler.co.in/",
    },
    {
      name: "Kajaria Tiles",
      logo: "/partners/KajariaTiles.jpg",
      category: "Material Supplier",
      description:
        "India's Number 1 Tile Company offering designer floor tiles",
      link: "https://www.kajariaceramics.com/",
    },
    {
      name: "Godrej",
      logo: "/partners/Godrej.png",
      category: "Material Supplier",
      description:
        "Godrej Enterprises Group cater to 1.1 billion consumers globally",
      link: "https://www.godrejenterprises.com/",
    },
    {
      name: "Ebco",
      logo: "/partners/Ebco.png",
      category: "Material Supplier",
      description:
        "Ebco's product range spans Drawer Slides, Hinges, Computer Furniture Fittings,",
      link: "https://ebco.in/",
    },
    {
      name: "D’Decor",
      logo: "/partners/DDecor.png",
      category: "Material Supplier",
      description:
        "Discover premium soft furnishings for your home! Shop our extensive home furnishing",
      link: "https://www.ddecor.com/",
    },
  ];

  return (
    <section className="pt-16 bg-white !font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6"
          >
            <Handshake className="w-5 h-5 text-[#00776e]" />
            <span className="text-[#00776e] font-medium">Partners</span>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            <span className="text-[#00776e]">Our Channel</span> Partners
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Collaborating with industry-leading partners to deliver exceptional
            quality and comprehensive design solutions.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-teal-100"
            >
              <div className="mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  height={500}
                  width={500}
                />
              </div>
              <div className="mb-3">
                <span className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full">
                  {partner.category}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
              <div className="mt-4 transition-opacity duration-300">
                <Link
                  href={partner.link}
                  className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Interested in Partnership?
          </h3>
          <p className="text-teal-100 mb-6">
            Join our network of trusted partners and grow your business with us.
          </p>
          <button className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
            Become a Partner
          </button>
        </div> */}
      </div>
    </section>
  );
};
