import React from 'react';

export default function GeometricBg() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none transition-colors duration-300">
      {/* Dynamic Blobs */}
      <div className="absolute top-[10%] left-[5%] w-72 md:w-96 h-72 md:h-96 rounded-full bg-blob-1 animate-blob" />
      <div className="absolute bottom-[20%] right-[10%] w-80 md:w-120 h-80 md:h-120 rounded-full bg-blob-2 animate-blob [animation-delay:2s]" />
      <div className="absolute top-[40%] right-[15%] w-64 md:w-80 h-64 md:h-80 rounded-full bg-blob-1 animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-[10%] left-[20%] w-72 md:w-96 h-72 md:h-96 rounded-full bg-blob-2 animate-blob [animation-delay:6s]" />

      {/* SVG Grid Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.07] stroke-primary" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
            <circle cx="40" cy="40" r="1" fill="currentColor" />
            <circle cx="0" cy="0" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Subtle tech lines */}
      <div className="absolute top-0 left-1/4 h-full w-[1px] bg-primary/5 dark:bg-primary/10 hidden md:block" />
      <div className="absolute top-0 right-1/4 h-full w-[1px] bg-primary/5 dark:bg-primary/10 hidden md:block" />
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-primary/5 dark:bg-primary/10 hidden md:block" />
    </div>
  );
}
