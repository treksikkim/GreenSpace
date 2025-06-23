import { MapPin, Phone, Mail, Clock } from "lucide-react";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import ContactUsForm from "../Forms/ContactUsForm";

export default function ContactUsSection() {
  return (
    <section className="py-8 bg-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-up" className="space-y-8">
            <div>
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: "#00776e" }}
              >
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8">
                We&apos;re here to help you create the perfect space. Whether
                you&apos;re looking for modular kitchens, interior design, or
                complete home makeovers, our team is ready to assist you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#00776e" }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Visit Our Showroom
                  </h4>
                  <p className="text-gray-600">
                    Shreema Housing Complex, Jalkal, Maheshtala,
                    <br />
                    Kolkata – 700141
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#00776e" }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">
                    +91 9836677669
                    <br />
                    +91 9804220277
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#00776e" }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">info@greenspaceinterior.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#00776e" }}
                >
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Business Hours
                  </h4>
                  <p className="text-gray-600">
                    Mon - Fri: 9:00 AM - 6:00 PM
                    <br />
                    Sat: 10:00 AM - 4:00 PM
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <OpenGetQuoteDialog isOpen>
                <button
                  className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#ab6447" }}
                >
                  Book Free Consultation
                </button>
              </OpenGetQuoteDialog>
            </div>
          </div>

          {/* Contact Form */}
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}
