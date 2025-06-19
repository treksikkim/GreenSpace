import Banner from "@/components/banner/Banner";
import ContactUsSection from "@/components/AiComponents/ContactUsSection";
import ImprovedReviewsSection2 from "@/components/AiComponents/ImprovedReviewsSection2";
import NewDesignGallery from "@/components/AiComponents/NewDesignGallery";
import OurServices from "@/components/OurServices";
import {  HandPlatter, Headset } from "lucide-react";
import AboutUsSection from "@/components/AiComponents/AboutUsSection";
import Button from "@/components/Button";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";
import AOSProvider from "@/components/Utils/AOSProvider";
import VideoViewSection from "@/components/VideoViewSection";

export default function Home() {
  return (
    <AOSProvider>
      <div className="space-y-16">
        <Banner />

        {/* About Us */}
        {/* <section className="font-jost wrapper space-y-8">
        <div className="flex items-start gap-16 mx-auto max-w-[90%]">
          <div>
            <Image
              className="w-[56rem] rounded-bl-3xl rounded-tr-3xl"
              alt="About Us Section"
              src={"/about/about-section.png"}
              height={1200}
              width={1200}
            />
          </div>
          <div className="space-y-6">
            <h2 className="bg-secondary px-3.5 py-1.5 text-white inline-block">
              About Us
            </h2>

            <div>
              <h3 className="text-primary text-2xl font-semibold">
                We Aim to Set the Trends
              </h3>
              <div className="space-y-3.5 font-[350] mt-1">
                <p>
                  Passionately creating personalised designer homes since
                  2015.It was founded by award-winning architects, Shezaan
                  Bhojani & Gita Ramanan, who bring together more than two
                  decades of national and international design experience.
                </p>
                <p>
                  Passionately creating personalised designer homes since
                  2015.It was founded by award-winning architects, Shezaan
                  Bhojani & Gita Ramanan,
                </p>
              </div>

              <div className="flex items-center gap-14 my-7">
                <span>
                  <span className="text-2xl text-secondary block font-libre">
                    346 +
                  </span>
                  <span className="font-[300]">Succeeded Projects</span>
                </span>
                <span>
                  <span className="text-2xl text-secondary block font-libre">
                    9 +
                  </span>
                  <span className="font-[300]">Working Hours</span>
                </span>
                <span>
                  <span className="text-2xl text-secondary block font-libre">
                    15 +
                  </span>
                  <span className="font-[300]">Years Of Exprience</span>
                </span>
              </div>

              <Button className="flex items-center gap-2">
                More About Us
                <ArrowDownRight strokeWidth={1} className="-rotate-90" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}
        <AboutUsSection />

        {/* Our Services */}
        <section className="font-jost wrapper space-y-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div
                data-aos="fade-down"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00776e]/10 to-[#ab6447]/10 rounded-full mb-6"
              >
                <HandPlatter className="w-5 h-5 text-[#00776e]" />
                <span className="text-[#00776e] font-medium">Services</span>
              </div>
              <h2
                data-aos="fade-up"
                className="max-sm:text-3xl md:text-5xl font-bold mb-4 relative max-sm:mb-0"
              >
                <span style={{ color: "#00776e" }}>Our Valuable Services</span>
                <br />
                <span className="relative">
                  For You
                  <div
                    className="absolute -bottom-2 left-0 right-0 h-3 opacity-30 rounded-full"
                    style={{ backgroundColor: "#fef3c6" }}
                  ></div>
                </span>
              </h2>
            </div>
          </div>

          <OurServices />
        </section>

        {/* Our Design Gallery */}
        {/* <section className="font-jost wrapper space-y-8">
        <div className="flex items-center justify-center flex-col gap-y-1">
          <h2 className="text-2xl font-[500] bg-[#fef3c6] inline-block px-5 pt-1.5 pb-1">
            Our Design Gallery
          </h2>
        </div>

        <ul className="grid grid-cols-4 gap-6 font-jost">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <li key={item}>
              <div className="shadow-xl border-[0.5px] rounded-tr-4xl border-gray-100 overflow-hidden">
                <Image
                  src={"/gallery.jpg"}
                  alt="Gallery Item"
                  height={1200}
                  width={1200}
                />
                <div className="p-3 space-y-1.5">
                  <h2 className="font-[450] text-gray-600">
                    Modern Minimalistic 4 BHK Home Of Auro Smitha
                  </h2>

                  <Button className="min-w-40 py-1.5 text-primary bg-transparent border-primary border shadow-none">
                    Explore More
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section> */}

        {/* Our Populer Designs */}
        <section data-aos="fade-up" className="font-jost">
          <div className="flex items-start max-h-[35rem] min-h-[35rem] overflow-hidden max-sm:flex-col max-sm:max-h-max">
            <VideoViewSection />
            <div className="bg-primary relative min-w-[40%] min-h-[35rem] p-10 flex flex-col justify-center">
              <h2
                data-aos="fade-left"
                className="font-semibold text-2xl tracking-wider !text-white"
              >
                Our Best Works
              </h2>

              <h3 data-aos="fade-up" className="text-white">
                2 BHK Interior Designs
              </h3>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-3.5 space-y-2.5 text-gray-200"
              >
                <p className="font-libre text-[15px] tracking-wide">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis neque voluptatum alias mollitia excepturi? Debitis
                  commodi, architecto non temporibus ea sunt earum facilis
                  dolores blanditiis. Magni laudantium doloremque non
                  consequuntur.
                </p>
                <p className="font-libre text-[15px] tracking-wide">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis neque voluptatum alias.
                </p>
              </div>

              <span data-aos="fade-up" data-aos-delay="200">
                <OpenGetQuoteDialog isOpen className="mt-10">
                  <Button className="flex items-center gap-3.5">
                    <Headset size={15} />
                    Book A Free Consultation
                  </Button>
                </OpenGetQuoteDialog>
              </span>

              {/* <div className="absolute top-3.5 right-3.5 flex items-center gap-4">
                <CircleArrowRight
                  className="rotate-180 active:scale-90 cursor-pointer"
                  strokeWidth={1}
                  color="#fff"
                />
                <CircleArrowRight
                  strokeWidth={1}
                  color="#fff"
                  className="active:scale-90 cursor-pointer"
                />
              </div> */}
            </div>
          </div>
        </section>

        {/* <OurBestWorks /> */}

        {/* Reviews */}
        {/* <section className="font-jost wrapper space-y-8">
        <div className="flex items-center justify-center flex-col gap-y-1">
          <h2 className="text-2xl font-[500] bg-[#fef3c6] inline-block px-5 pt-1.5 pb-1">
            What Our Happy Customers Say
          </h2>
        </div>

        <Reviews />
      </section> */}
        <NewDesignGallery />

        <ImprovedReviewsSection2 />

        {/* Gallery Section */}
        {/* <section className="font-jost wrapper space-y-8">
        <div className="flex items-center justify-center flex-col gap-y-1">
          <h2 className="text-2xl font-[500] bg-[#fef3c6] inline-block px-5 pt-1.5 pb-1">
            Our Design Gallery
          </h2>
        </div>

        <OurDesignGallery />
      </section> */}

        {/* Contact Us Section */}

        <ContactUsSection />
      </div>
    </AOSProvider>
  );
}
