import React, { useState } from 'react';
export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [{
    id: 'all',
    name: 'All Work'
  }, {
    id: 'events',
    name: 'Events'
  }, {
    id: 'portraits',
    name: 'Portraits'
  }, {
    id: 'commercial',
    name: 'Commercial'
  }, {
    id: 'weddings',
    name: 'Weddings'
  }];
  const portfolioItems = [{
    id: 1,
    category: 'events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    title: 'Corporate Conference'
  }, {
    id: 2,
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    title: 'Studio Portrait'
  }, {
    id: 3,
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Product Photography'
  }, {
    id: 4,
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Wedding Ceremony'
  }, {
    id: 5,
    category: 'events',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Music Festival'
  }, {
    id: 6,
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=80',
    title: 'Outdoor Portrait'
  }, {
    id: 7,
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Food Photography'
  }, {
    id: 8,
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Wedding Reception'
  }];
  const filteredItems = activeCategory === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);
  return <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of photography work across various
            categories.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => <button key={category.id} className={`px-5 py-2 rounded-full text-sm font-medium ${activeCategory === category.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveCategory(category.id)}>
              {category.name}
            </button>)}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};