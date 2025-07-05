import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold">Aperture</h3>
            <p className="mt-4 text-gray-400">
              Capturing moments that tell your story through the art of
              professional photography.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Event Photography
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Portrait Sessions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Commercial Photography
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Wedding Photography
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Photo Editing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Licensing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Aperture Photography. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};