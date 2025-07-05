import React from 'react';
import { CameraIcon, CheckIcon } from 'lucide-react';
export const About = () => {
  return <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Photographer at work" className="w-full h-full object-center object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 rounded-lg p-6 shadow-lg hidden md:block">
              <CameraIcon className="h-10 w-10 text-white" />
              <p className="mt-2 text-white font-bold text-lg">
                10+ Years
                <br />
                Experience
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About Our Agency
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded in 2013, Aperture Photography Agency has been delivering
              exceptional photography services to clients worldwide. Our team of
              professional photographers brings creativity, technical expertise,
              and a passion for visual storytelling to every project.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Why Choose Us
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-indigo-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    <strong className="font-medium text-gray-900">
                      Experienced team
                    </strong>{' '}
                    — Our photographers have worked with major brands and
                    publications worldwide.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-indigo-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    <strong className="font-medium text-gray-900">
                      State-of-the-art equipment
                    </strong>{' '}
                    — We use the latest camera technology and lighting gear for
                    optimal results.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-indigo-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    <strong className="font-medium text-gray-900">
                      Client-centered approach
                    </strong>{' '}
                    — We work closely with you to understand and achieve your
                    vision.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-indigo-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    <strong className="font-medium text-gray-900">
                      Fast turnaround
                    </strong>{' '}
                    — Receive your professionally edited photos within days, not
                    weeks.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};