import React from 'react';
import { Heart, Leaf } from 'lucide-react';

interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
          <Heart className="w-6 h-6 text-white fill-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
          <Leaf className="w-3 h-3 text-white fill-white" />
        </div>
      </div>

      {/* Logo Text */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-primary leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Dil Se Parivar
          </h1>
          <p className="text-xs text-secondary font-medium uppercase tracking-wide">
            Pure Veg Family Restaurant
          </p>
        </div>
      )}
    </div>
  );
};
