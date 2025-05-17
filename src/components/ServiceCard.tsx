
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  className = '',
}) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl ${className}`}>
      <div className="mb-4 text-nazbel-red">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-nazbel-red font-semibold group"
      >
        Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
