
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="Contact Us"
        description="Get in touch with Nazbel Group for inquiries, support, or consultations"
        backgroundImage="https://images.unsplash.com/photo-1537511446984-935f663eb1f4"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Contact Us' },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nazbel-red"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nazbel-red"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nazbel-red"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nazbel-red"
                    placeholder="Please provide details about your inquiry..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-nazbel-red mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Main Office</h3>
                      <p className="text-gray-600">123 Corporate Avenue, Dhaka 1000, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-nazbel-red mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone Number</h3>
                      <p className="text-gray-600">+880 1XXXXXXXXX</p>
                      <p className="text-gray-600">+880 2XXXXXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-nazbel-red mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Address</h3>
                      <p className="text-gray-600">info@nazbelgroup.com</p>
                      <p className="text-gray-600">support@nazbelgroup.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pb-20">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-md h-96">
            {/* Placeholder for Google Map */}
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Google Map will be integrated here</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
