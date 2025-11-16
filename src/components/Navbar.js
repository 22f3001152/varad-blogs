import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaHome, FaBlog, FaUser } from 'react-icons/fa';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative backdrop-blur-md bg-gray-900/80 shadow-2xl border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with AI Theme */}
          <Link to="/" className="group">
            <Logo className="transition-transform duration-300 group-hover:scale-105" />
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
              to="/blog" 
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-all duration-300 group"
            >
              <FaBlog className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-200 group-hover:text-purple-300">All Posts</span>
            </Link>

            <Link 
              to="/about" 
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-all duration-300 group"
            >
              <FaUser className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-200 group-hover:text-purple-300">About</span>
            </Link>


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
              to="/blog" 
              className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <FaBlog className="text-purple-400" />
              <span className="font-semibold text-gray-200">All Posts</span>
            </Link>

            <Link 
              to="/about" 
              className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <FaUser className="text-purple-400" />
              <span className="font-semibold text-gray-200">About</span>
            </Link>


          </div>
        )}
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse"></div>
    </nav>
  );
};

export default Navbar;
