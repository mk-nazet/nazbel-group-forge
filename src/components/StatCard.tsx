
import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, icon }) => {
  return (
    <div className="text-center p-6">
      {icon && <div className="mb-3 mx-auto text-nazbel-red flex justify-center">{icon}</div>}
      <div className="text-4xl font-bold mb-2 text-nazbel-darkGray">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatCard;
