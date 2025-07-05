import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendIcon } from 'lucide-react';
export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Form submitted! In a real application, this would send your message.');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your photography needs? Contact us today for a
            consultation.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <MapPinIcon className="h-6 w-6 text-indigo-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Our Studio
                </h3>
                <p className="mt-1 text-gray-600">
                  123 Photography Lane
                  <br />
                  Creative District
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-indigo-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                <p className="mt-1 text-gray-600">+1 (555) 765-4321</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <MailIcon className="h-6 w-6 text-indigo-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">
                  info@aperturephotography.com
                </p>
                <p className="mt-1 text-gray-600">
                  bookings@aperturephotography.com
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-indigo-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Working Hours
                </h3>
                <p className="mt-1 text-gray-600">Monday - Friday: 9am - 6pm</p>
                <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                <p className="mt-1 text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select id="subject" name="subject" value={formState.subject} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                    <option value="">Select a subject</option>
                    <option value="Event Photography">Event Photography</option>
                    <option value="Portrait Session">Portrait Session</option>
                    <option value="Commercial Photography">
                      Commercial Photography
                    </option>
                    <option value="Wedding Photography">
                      Wedding Photography
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex items-center justify-center w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Send Message <SendIcon className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};