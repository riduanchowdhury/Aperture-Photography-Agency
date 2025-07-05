import React from 'react';
import { CameraIcon, UsersIcon, BuildingIcon, HeartIcon, AwardIcon, ImageIcon } from 'lucide-react';
export const Services = () => {
  const services = [{
    title: 'Event Photography',
    description: 'Capture the special moments of your events, from corporate gatherings to personal celebrations.',
    icon: <CameraIcon className="h-10 w-10 text-indigo-500" />
  }, {
    title: 'Portrait Sessions',
    description: 'Professional portrait photography for individuals, families, and groups with expert direction.',
    icon: <UsersIcon className="h-10 w-10 text-indigo-500" />
  }, {
    title: 'Commercial Photography',
    description: 'High-quality product and brand photography to showcase your business in the best light.',
    icon: <BuildingIcon className="h-10 w-10 text-indigo-500" />
  }, {
    title: 'Wedding Photography',
    description: 'Comprehensive coverage of your special day with a blend of candid and posed photographs.',
    icon: <HeartIcon className="h-10 w-10 text-indigo-500" />
  }, {
    title: 'Award-Winning Team',
    description: 'Our photographers have been recognized for their exceptional work in various competitions.',
    icon: <AwardIcon className="h-10 w-10 text-indigo-500" />
  }, {
    title: 'Photo Editing',
    description: 'Professional retouching and editing services to perfect your images for any purpose.',
    icon: <ImageIcon className="h-10 w-10 text-indigo-500" />
  }];
  return <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of professional photography services
            to meet your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};