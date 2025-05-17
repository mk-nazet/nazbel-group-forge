
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  breadcrumbs?: Array<{
    label: string;
    link?: string;
  }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  backgroundImage,
  breadcrumbs,
}) => {
  return (
    <section className="relative py-20 md:py-28 bg-nazbel-darkGray text-white">
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover opacity-20"
          />
        )}
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl animate-fade-in">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="flex flex-wrap items-center text-sm text-gray-300 mb-4">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <ChevronRight size={14} className="mx-2" />}
                  {crumb.link ? (
                    <Link
                      to={crumb.link}
                      className="hover:text-nazbel-red transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-400">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {description && <p className="text-xl text-gray-300">{description}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
