
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Instagram 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nazbel-darkGray text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-nazbel-red">Nazbel</span> Group
            </h3>
            <p className="mb-4 text-gray-300">
              A leading engineering conglomerate in Bangladesh providing innovative solutions in 
              Fireproofing, IoT & IT Devices, Software Development, and Aviation & Defense.
            </p>
            <div className="flex space-x-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-nazbel-red transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-nazbel-red transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-nazbel-red transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-nazbel-red transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-nazbel-red transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-nazbel-red transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-nazbel-red transition-colors">Projects</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-nazbel-red transition-colors">News & Insights</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-nazbel-red transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-nazbel-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Business Verticals */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business Verticals</h3>
            <ul className="space-y-2">
              <li><Link to="/services/fireproofing" className="text-gray-300 hover:text-nazbel-red transition-colors">Fireproofing Solutions</Link></li>
              <li><Link to="/taioti" className="text-gray-300 hover:text-nazbel-red transition-colors">TaioTi (IoT & IT Devices)</Link></li>
              <li><Link to="/tekindex" className="text-gray-300 hover:text-nazbel-red transition-colors">TekIndex (Software Development)</Link></li>
              <li><Link to="/aviation-defense" className="text-gray-300 hover:text-nazbel-red transition-colors">Aviation & Defense</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-nazbel-red" />
                <span className="text-gray-300">123 Corporate Avenue, Dhaka 1000, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-nazbel-red" />
                <a href="tel:+8801XXXXXXXXX" className="text-gray-300 hover:text-nazbel-red transition-colors">+880 1XXXXXXXXX</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-nazbel-red" />
                <a href="mailto:info@nazbelgroup.com" className="text-gray-300 hover:text-nazbel-red transition-colors">info@nazbelgroup.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Nazbel Group. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-nazbel-red transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-nazbel-red transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-nazbel-red transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
