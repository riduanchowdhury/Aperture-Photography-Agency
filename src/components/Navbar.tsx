import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Aperture</h1>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#services" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="#portfolio" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="#testimonials" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </nav>
          <div className="md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)} aria-expanded="false">
              <span className="sr-only">
                {isOpen ? 'Close menu' : 'Open menu'}
              </span>
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#services" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#portfolio" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
            <a href="#about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#testimonials" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" onClick={() => setIsOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        </div>}
    </header>;
};