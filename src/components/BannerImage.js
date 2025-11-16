import React from 'react';

const BannerImage = ({ category = 'technology', gradient = true, height = 'h-96', className = '' }) => {
  // Using Unsplash Source API for random vibrant images
  const categories = {
    technology: 'technology,computer,innovation',
    people: 'people,portrait,business',
    nature: 'nature,landscape,forest',
    ai: 'artificial-intelligence,technology,future',
    teamwork: 'team,collaboration,office',
    innovation: 'innovation,startup,creative',
    coding: 'coding,programming,developer',
    mixed: 'people,nature,technology',
  };

  const query = categories[category] || categories.technology;
  const imageUrl = `https://source.unsplash.com/1600x900/?${query}`;

  return (
    <div className={`relative ${height} overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-900/60 to-blue-900/70" />
      )}
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default BannerImage;
