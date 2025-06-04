"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function DetailsPageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
    preferredDate: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // Handle form submission here
  //   alert("Thank you for your inquiry! We&apos;ll get back to you soon.");
  // };
  return (
    <div className="lg:sticky lg:top-8 lg:h-fit">
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Get Free Consultation
          </h2>
          <p className="text-gray-600">
            Let&apos;s discuss your dream space transformation
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
              >
                <option value="">Select type</option>
                <option value="living-room">Living Room</option>
                <option value="bedroom">Bedroom</option>
                <option value="kitchen">Kitchen</option>
                <option value="bathroom">Bathroom</option>
                <option value="full-home">Full Home</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
              >
                <option value="">Select budget</option>
                <option value="1-3">₹1-3 Lakhs</option>
                <option value="3-5">₹3-5 Lakhs</option>
                <option value="5-10">₹5-10 Lakhs</option>
                <option value="10+">₹10+ Lakhs</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Consultation Date
            </label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00776e] focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your vision, requirements, and any specific preferences..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00776e] hover:bg-[#00776e]/90 text-white font-semibold py-4 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
          >
            Get Free Consultation
          </button>

          <div className="text-center text-sm text-gray-500 mt-4">
            <p>We&apos;ll respond within 2 hours during business hours</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="w-5 h-5 text-[#00776e]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-5 h-5 text-[#00776e]" />
              <span>info@greenspaceinterior.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="w-5 h-5 text-[#00776e]" />
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
