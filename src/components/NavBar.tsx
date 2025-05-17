
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
} from 'lucide-react';
import { Button } from './ui/button';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const mainMenuItems = [
    { 
      label: 'About Us', 
      path: '/about',
      dropdown: [
        { label: 'Our Story & Mission', path: '/about/story-mission' },
        { label: 'Leadership Team', path: '/about/leadership' },
        { label: 'Our Values', path: '/about/values' }
      ]
    },
    { 
      label: 'Services', 
      path: '/services',
      dropdown: [
        { label: 'Fireproofing Solutions', path: '/services/fireproofing' },
        { label: 'TaioTi (IoT & IT)', path: '/taioti' },
        { label: 'TekIndex (Software)', path: '/tekindex' },
        { label: 'Aviation & Defense', path: '/aviation-defense' }
      ]
    },
    { label: 'Projects', path: '/projects' },
    { label: 'News & Insights', path: '/news' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <span className="text-2xl font-bold text-nazbel-darkGray">
              <span className="text-nazbel-red">Nazbel</span> Group
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainMenuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div 
                    className="group"
                    onMouseEnter={() => toggleDropdown(item.label)}
                    onMouseLeave={() => toggleDropdown('')}
                  >
                    <button className="flex items-center px-4 py-2 text-gray-700 hover:text-nazbel-red">
                      {item.label}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 z-10">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={closeMenu}
                            className="block px-4 py-2 hover:bg-nazbel-lightGray hover:text-nazbel-red"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className="block px-4 py-2 text-gray-700 hover:text-nazbel-red"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center">
            <a href="tel:+8801XXXXXXXXX" className="flex items-center mr-6 text-gray-700 hover:text-nazbel-red">
              <Phone size={18} className="mr-2" />
              <span>+880 1XXXXXXXXX</span>
            </a>
            <Button className="btn-primary">Get a Quote</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-nazbel-red"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto py-4">
            {mainMenuItems.map((item) => (
              <div key={item.label} className="py-1">
                {item.dropdown ? (
                  <div className="mb-2">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center w-full py-2 text-left text-gray-700"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 mt-1 border-l-2 border-nazbel-red">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={closeMenu}
                            className="block py-2 text-gray-600 hover:text-nazbel-red"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className="block py-2 text-gray-700 hover:text-nazbel-red"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4">
              <a href="tel:+8801XXXXXXXXX" className="flex items-center py-2 text-gray-700 hover:text-nazbel-red">
                <Phone size={18} className="mr-2" />
                <span>+880 1XXXXXXXXX</span>
              </a>
              <Button className="w-full mt-3 btn-primary">Get a Quote</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
