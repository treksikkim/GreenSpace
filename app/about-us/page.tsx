import React from "react";
import Image from "next/image";
import {
  Award,
  Users,
  Calendar,
  Star,
  CheckCircle,
  Heart,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react";
import OpenGetQuoteDialog from "@/components/Utils/OpenGetQuoteDialog";

// Types
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  experience: string;
}

interface Stat {
  id: number;
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface Value {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutUs: React.FC = () => {
  // Sample team data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Lead Interior Designer",
      image: "/api/placeholder/300/300",
      bio: "With over 12 years of experience in residential and commercial design, Sarah brings creativity and functionality together in every project.",
      experience: "12+ Years",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Senior Architect",
      image: "/api/placeholder/300/300",
      bio: "Michael specializes in sustainable design and space optimization, creating beautiful environments that are both eco-friendly and efficient.",
      experience: "10+ Years",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Project Manager",
      image: "/api/placeholder/300/300",
      bio: "Emily ensures every project runs smoothly from concept to completion, coordinating with clients and contractors to deliver exceptional results.",
      experience: "8+ Years",
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Design Consultant",
      image: "/api/placeholder/300/300",
      bio: "David works closely with clients to understand their vision and translate it into stunning, personalized interior spaces.",
      experience: "6+ Years",
    },
  ];

  // Company statistics
  const stats: Stat[] = [
    {
      id: 1,
      number: "500+",
      label: "Projects Completed",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      id: 2,
      number: "15+",
      label: "Years Experience",
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      id: 3,
      number: "250+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: 4,
      number: "25+",
      label: "Awards Won",
      icon: <Award className="w-8 h-8" />,
    },
  ];

  // Company values
  const values: Value[] = [
    {
      id: 1,
      title: "Quality First",
      description:
        "We never compromise on quality, using only the finest materials and working with skilled craftsmen to deliver exceptional results.",
      icon: <Star className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Client-Centered",
      description:
        "Your vision is our priority. We listen, understand, and create spaces that truly reflect your personality and lifestyle.",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Innovation",
      description:
        "We stay ahead of design trends and embrace new technologies to create modern, functional, and beautiful spaces.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Reliability",
      description:
        "From initial consultation to project completion, we deliver on time and within budget, every single time.",
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Our Story
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                For over 15 years, we&apos;ve been transforming spaces and
                bringing dreams to life. Our passion for interior design goes
                beyond aesthetics – we create environments that enhance the way
                you live, work, and feel.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded with the vision of making exceptional design accessible
                to everyone, we&apos;ve grown from a small studio to a
                full-service design firm, but our core values remain the same:
                quality, creativity, and client satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300">
                  Start Your Project
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/api/placeholder/600/450"
                  alt="Our design studio"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Mission</h3>
                    <p className="text-sm text-gray-600">
                      Creating beautiful, functional spaces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="flex justify-center mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from our first
              consultation to the final reveal of your transformed space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.id} className="text-center group">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our talented team of designers, architects, and project managers
              work together to bring your vision to life with expertise and
              creativity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {member.experience}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure every project exceeds
              expectations and is delivered on time and within budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Consultation & Planning
              </h3>
              <p className="text-gray-600">
                We start with understanding your needs, preferences, and budget
                to create a comprehensive design plan tailored to your
                lifestyle.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Design & Development
              </h3>
              <p className="text-gray-600">
                Our team creates detailed designs, 3D renderings, and material
                selections to help you visualize your transformed space.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Implementation & Delivery
              </h3>
              <p className="text-gray-600">
                We manage every aspect of the project execution, ensuring
                quality workmanship and timely completion of your dream space.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let&apos;s discuss your project and create something beautiful
            together. Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenGetQuoteDialog
              isOpen
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <button>Get Free Quote</button>
            </OpenGetQuoteDialog>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
              Call Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
