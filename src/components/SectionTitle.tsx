
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`section-title ${titleClassName}`}>{title}</h2>
      {subtitle && <p className={`section-subtitle ${alignment === 'left' ? 'mx-0' : 'mx-auto'} ${subtitleClassName}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
