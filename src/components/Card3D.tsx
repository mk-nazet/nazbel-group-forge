
import React, { useState, useRef, useEffect } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const Card3D: React.FC<Card3DProps> = ({ 
  children, 
  className = '',
  intensity = 15 
}) => {
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * (intensity * -1);
    const rotateY = ((x - centerX) / centerX) * intensity;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
    
    // Update glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlare({
      x: glareX,
      y: glareY,
      opacity: 0.25
    });
  };
  
  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare({ ...glare, opacity: 0 });
  };
  
  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden transition-transform duration-200 ${className}`}
      style={{ transform, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 50%)`,
          zIndex: 2
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card3D;
