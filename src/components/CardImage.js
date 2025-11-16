import React from 'react';

const CardImage = ({ category = 'technology', seed, className = '' }) => {
  // Using Unsplash Source API with seed for consistent images per post
  const categories = {
    technology: 'technology,computer,innovation',
    people: 'people,portrait,professional',
    nature: 'nature,landscape,mountains',
    ai: 'artificial-intelligence,robot,future',
    teamwork: 'team,collaboration,meeting',
    innovation: 'innovation,startup,ideas',
    coding: 'coding,programming,workspace',
    creative: 'creative,design,colorful',
  };

  const query = categories[category] || categories.technology;
  // Use seed to get consistent images for each post
  const imageUrl = `https://source.unsplash.com/800x600/?${query}&sig=${seed || Math.random()}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300" />
    </div>
  );
};

export default CardImage;
