
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  image,
  link,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-nazbel-red text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-nazbel-red font-semibold group"
        >
          View Project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
