"use client";

import { handleHomeContactForm } from "@/app/actions/handleHomeContactForm";
import { CheckCircle, Send } from "lucide-react";
import { useState, useTransition } from "react";
import Button from "../Button";

export default function ContactUsForm() {
  const [isSubmitted] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleFormSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        const response = await handleHomeContactForm(formData);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
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
            Your message has been sent successfully. We&apos;ll get back to you
            within 24 hours.
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

          <form action={handleFormSubmit} className="space-y-6">
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
                  required
                  type="text"
                  pattern="^\d{10}$"
                  id="phone"
                  name="phone"
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
                // onChange={handleInputChange}
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
                className="w-full px-4 py-3 border ring-[#00776e] border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-colors resize-none"
                placeholder="Tell us about your project, timeline, and any specific requirements..."
              />
            </div>

            <Button
              type="submit"
              loading={isPending}
              className="w-full items-center justify-center px-6 py-4 rounded-lg text-white font-medium transition-opacity"
              style={{ backgroundColor: "#00776e" }}
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
