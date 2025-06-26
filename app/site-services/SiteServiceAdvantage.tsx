'use client';

import React from 'react';
import { 
  CheckCircle, 
  X, 
  ClipboardList, 
  Handshake, 
  Award, 
  Settings, 
  DollarSign, 
  Shield 
} from 'lucide-react';

interface ComparisonItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  localVendor: 'no' | 'maybe' | 'yes';
  peerCompanies: 'no' | 'maybe' | 'yes';
  designcafe: string;
}

const SiteServiceAdvantage: React.FC = () => {
  const comparisonData: ComparisonItem[] = [
    {
      id: 'project-tracking',
      title: 'Project Tracking',
      icon: <ClipboardList className="w-6 h-6" />,
      localVendor: 'no',
      peerCompanies: 'maybe',
      designcafe: 'A project tracking tool for real time updates'
    },
    {
      id: 'trust',
      title: 'Trust',
      icon: <Handshake className="w-6 h-6" />,
      localVendor: 'no',
      peerCompanies: 'maybe',
      designcafe: 'We are present in 10 cities with 10,000+ happy customers'
    },
    {
      id: 'quality',
      title: 'Quality',
      icon: <Award className="w-6 h-6" />,
      localVendor: 'no',
      peerCompanies: 'maybe',
      designcafe: 'A dedicated quality control team to ensure high standard of Services'
    },
    {
      id: 'after-sales',
      title: 'After Sales Services',
      icon: <Settings className="w-6 h-6" />,
      localVendor: 'no',
      peerCompanies: 'maybe',
      designcafe: 'Yes!'
    },
    {
      id: 'price-guarantee',
      title: 'Price Guarantee',
      icon: <DollarSign className="w-6 h-6" />,
      localVendor: 'no',
      peerCompanies: 'maybe',
      designcafe: 'Transparent Pricing'
    },
    {
      id: 'warranty',
      title: 'Warranty',
      icon: <Shield className="w-6 h-6" />,
      localVendor: 'no',
      peerCompanies: 'maybe',
      designcafe: 'On Selected Products*'
    }
  ];

  const getColumnIcon = (status: 'no' | 'maybe' | 'yes') => {
    switch (status) {
      case 'no':
        return <X className="w-6 h-6 text-red-500" />;
      case 'maybe':
        return <span className="text-gray-500 font-medium">Maybe</span>;
      case 'yes':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          — The DesignCafe Site Service Advantage —
        </h2>
        <p className="text-lg text-gray-700 font-medium">
          Experience The Convenience Of A <span className="text-[#00776e] font-semibold">One-Stop Solution</span> For All Your Home Interiors Needs
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Table Headers */}
        <div className="grid grid-cols-4 bg-gray-50 border-b">
          <div className="p-4 font-semibold text-gray-700"></div>
          <div className="p-4 text-center">
            <div className="bg-amber-800 text-white px-4 py-2 rounded-lg font-semibold">
              Local Vendor
            </div>
          </div>
          <div className="p-4 text-center">
            <div className="bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold">
              Peer Companies
            </div>
          </div>
          <div className="p-4 text-center">
            <div className="bg-[#00776e] text-white px-4 py-2 rounded-lg font-semibold">
              Designcafe Site Services
            </div>
          </div>
        </div>

        {/* Table Rows */}
        {comparisonData.map((item, index) => (
          <div 
            key={item.id} 
            className={`grid grid-cols-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
            }`}
          >
            {/* Feature Column */}
            <div className="p-6 flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                <div className="text-yellow-600">
                  {item.icon}
                </div>
              </div>
              <span className="font-semibold text-gray-900">
                {item.title}
              </span>
            </div>

            {/* Local Vendor Column */}
            <div className="p-6 flex items-center justify-center">
              {getColumnIcon(item.localVendor)}
            </div>

            {/* Peer Companies Column */}
            <div className="p-6 flex items-center justify-center">
              {getColumnIcon(item.peerCompanies)}
            </div>

            {/* Designcafe Column */}
            <div className="p-6 flex items-center">
              <div className="bg-teal-50 p-4 rounded-lg w-full text-center">
                <span className="text-teal-800 font-medium text-sm">
                  {item.designcafe}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          Ready to experience the DesignCafe advantage?
        </p>
        <button className="bg-[#00776e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#005951] transition-colors duration-200 shadow-lg">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default SiteServiceAdvantage;