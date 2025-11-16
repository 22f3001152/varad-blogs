import React from 'react';
import { FaStar } from 'react-icons/fa';

const Logo = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* VFX Film Strip Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex space-x-1 h-full">
          <div className="w-1 bg-purple-400"></div>
          <div className="w-1 bg-pink-400"></div>
          <div className="w-1 bg-purple-400"></div>
        </div>
      </div>

      {/* Main Logo Container */}
      <div className="relative flex items-center space-x-2">
        {/* VB Monogram with Film Frame */}
        <div className="relative group">
          {/* Film Frame Border */}
          <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
          
          {/* Monogram Background */}
          <div className="relative bg-gray-900 rounded-lg px-3 py-2 border-2 border-purple-500/50">
            {/* VB Letters */}
            <div className="flex items-center space-x-0.5">
              <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300" 
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.05em' }}>
                V
              </span>
              <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-pink-300 via-purple-300 to-cyan-300" 
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.05em' }}>
                B
              </span>
            </div>

            {/* AI Star - Top Right Corner */}
            <div className="absolute -top-1 -right-1">
              <FaStar className="text-yellow-400 text-xs animate-pulse" style={{ filter: 'drop-shadow(0 0 2px #fbbf24)' }} />
            </div>

            {/* Film Perforations */}
            <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 flex flex-col space-y-1">
              <div className="w-1 h-1 bg-purple-400/50 rounded-full"></div>
              <div className="w-1 h-1 bg-purple-400/50 rounded-full"></div>
            </div>
            <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 flex flex-col space-y-1">
              <div className="w-1 h-1 bg-purple-400/50 rounded-full"></div>
              <div className="w-1 h-1 bg-purple-400/50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300" 
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Varad Blogs
          </span>
          <span className="text-xs text-purple-400/80 flex items-center space-x-1" 
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <span>Tech</span>
            <span className="text-pink-400">×</span>
            <span>VFX</span>
            <span className="text-blue-400">×</span>
            <span>AI</span>
          </span>
        </div>
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default Logo;
