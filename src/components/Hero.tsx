import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
export const Hero = () => {
  return <section className="relative bg-gray-900 h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 bg-center bg-cover" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1566054757965-8c4085344c96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')",
      backgroundPosition: 'center',
      opacity: 0.7
    }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Capturing moments that
          <br className="hidden md:block" /> last forever
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl">
          Professional photography services for events, portraits, commercial
          projects, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#portfolio" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
            View our work
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900">
            Get in touch <ChevronRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>;
};