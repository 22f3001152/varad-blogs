import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaBrain, FaRobot, FaHome, FaBlog, FaMicrochip } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative backdrop-blur-md bg-gray-900/80 shadow-2xl border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with AI Theme */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <FaBrain className="text-3xl text-purple-400 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <div>
              <span className="text-2xl font-bold ai-text-gradient">AI Blog</span>
              <div className="flex items-center space-x-1 text-xs text-purple-300">
                <FaMicrochip className="text-xs" />
                <span>Powered by Neural Networks</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-all duration-300 group"
            >
              <FaHome className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-200 group-hover:text-purple-300">Home</span>
            </Link>
            
            <Link 
              to="/#blog-posts" 
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-all duration-300 group"
            >
              <FaBlog className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-200 group-hover:text-purple-300">Blog Posts</span>
            </Link>

            <div className="ml-4">
              <button className="ai-button text-white flex items-center space-x-2 shadow-lg">
                <FaRobot />
                <span>AI Powered</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-purple-400 hover:text-purple-300 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <FaHome className="text-purple-400" />
              <span className="font-semibold text-gray-200">Home</span>
            </Link>
            
            <Link 
              to="/#blog-posts" 
              className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <FaBlog className="text-purple-400" />
              <span className="font-semibold text-gray-200">Blog Posts</span>
            </Link>

            <div className="px-4 pt-2">
              <div className="ai-button text-white flex items-center justify-center space-x-2 w-full shadow-lg">
                <FaRobot />
                <span>AI Powered</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse"></div>
    </nav>
  );
};

export default Navbar;
