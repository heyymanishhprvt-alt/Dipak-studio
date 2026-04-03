import React from 'react';

interface LogoProps {
  className?: string;
  /** Use 'light' for dark backgrounds (default), 'dark' for light backgrounds */
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-12', variant = 'light' }) => {
  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Dipak Studios"
        className={`h-full w-auto object-contain drop-shadow-[0_2px_8px_rgba(201,164,76,0.25)] ${
          variant === 'dark' ? 'brightness-[0.15] saturate-0' : ''
        }`}
        loading="eager"
      />
    </div>
  );
};
