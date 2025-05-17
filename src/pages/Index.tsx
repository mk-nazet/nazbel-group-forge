
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lightbulb, 
  Code, 
  Plane, 
  Users, 
  Building, 
  Award, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import StatCard from '../components/StatCard';
import ProjectCard from '../components/ProjectCard';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-nazbel-darkGray text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
            alt="Nazbel Group Headquarters" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Engineering Excellence, <span className="text-nazbel-red">Innovative Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              A leading engineering conglomerate delivering cutting-edge solutions across multiple industries in Bangladesh and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild className="btn-outline bg-transparent">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Business Verticals"
            subtitle="Delivering innovative engineering solutions across multiple industries to meet diverse client needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Fireproofing Solutions"
              description="Comprehensive passive fire protection systems ensuring safety and compliance with international standards."
              icon={<Shield size={40} />}
              link="/services/fireproofing"
            />
            <ServiceCard 
              title="TaioTi (IoT & IT)"
              description="Smart devices and IoT solutions transforming businesses through connectivity and automation."
              icon={<Lightbulb size={40} />}
              link="/taioti"
            />
            <ServiceCard 
              title="TekIndex (Software)"
              description="Custom software development and digital solutions tailored to your business requirements."
              icon={<Code size={40} />}
              link="/tekindex"
            />
            <ServiceCard 
              title="Aviation & Defense"
              description="Specialized solutions for the aviation and defense sectors with precision and reliability."
              icon={<Plane size={40} />}
              link="/aviation-defense"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h2 className="section-title text-left">Pioneering Engineering Excellence Since 2005</h2>
              <p className="mb-6 text-lg text-gray-600">
                Nazbel Group has established itself as a leading engineering conglomerate in Bangladesh, delivering innovative solutions across multiple industries.
              </p>
              <p className="mb-6 text-gray-600">
                With a strong focus on quality, safety, and innovation, we have successfully completed numerous high-profile projects for clients across various sectors, establishing our reputation as a trusted partner for complex engineering challenges.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-nazbel-green mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Certified Experts</h4>
                    <p className="text-sm text-gray-600">Industry-leading professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-nazbel-green mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">International Standards</h4>
                    <p className="text-sm text-gray-600">Compliance with global norms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-nazbel-green mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Innovative Solutions</h4>
                    <p className="text-sm text-gray-600">Cutting-edge technologies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-nazbel-green mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Reliable Support</h4>
                    <p className="text-sm text-gray-600">Dedicated customer service</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="btn-primary">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Nazbel Group Engineers at Work" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <div className="bg-nazbel-red text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-nazbel-darkGray">ISO 9001:2015</p>
                      <p className="text-sm text-gray-600">Quality Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-nazbel-darkGray text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <StatCard number="18+" label="Years of Experience" icon={<Building size={28} />} />
            <StatCard number="500+" label="Projects Completed" icon={<CheckCircle size={28} />} />
            <StatCard number="300+" label="Happy Clients" icon={<Users size={28} />} />
            <StatCard number="30+" label="Industry Awards" icon={<Award size={28} />} />
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Featured Projects"
            subtitle="Explore some of our most impactful work across different industries and sectors."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Industrial Fireproofing"
              category="Fireproofing"
              image="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              link="/projects/industrial-fireproofing"
              description="Comprehensive fireproofing solution for a major industrial facility, ensuring safety compliance and protection."
            />
            <ProjectCard 
              title="Smart Building System"
              category="IoT Solutions"
              image="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
              link="/projects/smart-building"
              description="IoT-enabled smart building management system for energy efficiency and enhanced security."
            />
            <ProjectCard 
              title="Defense Communication"
              category="Aviation & Defense"
              image="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
              link="/projects/defense-communication"
              description="Secure communication solutions for defense operations with advanced encryption and reliability."
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-outline">
              <Link to="/projects">View All Projects <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="What Our Clients Say"
            subtitle="Don't take our word for it. Here's what our clients have to say about working with Nazbel Group."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Nazbel Group's fireproofing solutions have significantly enhanced the safety standards of our manufacturing facility. Their expertise and professional approach made the whole process smooth and efficient."
              author="Ahmed Khan"
              position="Operations Director"
              company="BD Manufacturing Ltd."
            />
            <TestimonialCard 
              quote="The IoT solution implemented by TaioTi has transformed our operational efficiency. Real-time monitoring and data analytics have given us insights we never had before."
              author="Fatima Rahman"
              position="CTO"
              company="TechBangla Inc."
            />
            <TestimonialCard 
              quote="Working with TekIndex on our enterprise software solution was a game-changer. Their team understood our unique challenges and delivered a system that perfectly meets our needs."
              author="Mohammad Ali"
              position="IT Manager"
              company="Global Solutions BD"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-nazbel-red text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how Nazbel Group can provide innovative engineering solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-nazbel-red hover:bg-gray-100">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild className="border-2 border-white bg-transparent hover:bg-white hover:text-nazbel-red">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest news, updates, and insights from Nazbel Group.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nazbel-red"
                required
              />
              <Button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Now
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Nazbel Group.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
