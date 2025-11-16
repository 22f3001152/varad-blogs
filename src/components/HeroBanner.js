import React, { useState, useEffect } from 'react';

const HeroBanner = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://source.unsplash.com/1600x900/?technology,innovation,people',
    'https://source.unsplash.com/1600x900/?artificial-intelligence,future,creative',
    'https://source.unsplash.com/1600x900/?nature,landscape,peaceful',
    'https://source.unsplash.com/1600x900/?team,collaboration,success',
    'https://source.unsplash.com/1600x900/?coding,programming,workspace',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Images with Crossfade */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${img}')`,
          }}
        />
      ))}
      
      {/* Gradient Overlays for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-blue-900/80" />
      <div className="absolute inset-0 ai-gradient-bg opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HeroBanner;
