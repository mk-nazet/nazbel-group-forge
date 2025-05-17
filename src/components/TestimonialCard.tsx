
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md relative">
      <div className="absolute -top-4 left-8 text-nazbel-red bg-white p-2 rounded-full shadow-sm">
        <Quote size={24} />
      </div>
      <div className="pt-4">
        <p className="text-gray-700 italic mb-6">{quote}</p>
        <div>
          <p className="font-semibold text-nazbel-darkGray">{author}</p>
          <p className="text-gray-500 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
