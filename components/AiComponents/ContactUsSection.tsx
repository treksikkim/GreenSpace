"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Simulate form submission
  //   setIsSubmitted(true);
  //   setTimeout(() => {
  //     setIsSubmitted(false);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       service: "",
  //       message: "",
  //     });
  //   }, 3000);
  // };

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
                    123 Design Street, Creative District
                    <br />
                    New York, NY 10001
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
                    +1 (555) 123-4567
                    <br />
                    +1 (555) 987-6543
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
                  <p className="text-gray-600">
                    info@greeninteriors.com
                    <br />
                    design@greeninteriors.com
                  </p>
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
          <div
            data-aos="fade-down"
            className="bg-white rounded-2xl shadow-lg p-8 pb-14"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: "#00776e" }}
                />
                <h3
                  className="text-2xl font-semibold mb-2"
                  style={{ color: "#00776e" }}
                >
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We&apos;ll get back
                  to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="text-2xl font-semibold mb-6"
                  style={{ color: "#00776e" }}
                >
                  Send us a Message
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border ring-[#00776e] border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border ring-[#00776e] border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border ring-[#00776e] border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border ring-[#00776e] border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="modular-kitchen">Modular Kitchen</option>
                      <option value="interior-design">Interior Design</option>
                      <option value="home-renovation">Home Renovation</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div> */}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border ring-[#00776e] border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#00776e" }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
