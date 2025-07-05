import React, { memo } from 'react';
import { StarIcon } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    id: 1,
    content: "Aperture Photography captured our wedding day perfectly. The team was professional, unobtrusive, and the photos exceeded our expectations. We'll treasure these memories forever.",
    author: 'Sarah & Michael Johnson',
    role: 'Wedding Clients',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    rating: 5
  }, {
    id: 2,
    content: "Working with Aperture for our company's product photography was a game-changer. The quality of images dramatically improved our online sales conversion rate.",
    author: 'David Chen',
    role: 'Marketing Director, TechGear',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    rating: 5
  }, {
    id: 3,
    content: 'The team at Aperture Photography is incredibly talented. They photographed our annual conference and captured the energy and excitement of the event perfectly.',
    author: 'Emma Rodriguez',
    role: 'Event Coordinator, Global Summit',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80',
    rating: 5
  }];
  return <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear from some of our satisfied
            clients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover" />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};