import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/Layout';
import { FaExclamationTriangle, FaHome, FaBlog } from 'react-icons/fa';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  useEffect(() => {
    // Handle client-side routing for GitHub Pages
    const path = window.location.pathname;
    const pathPrefix = '/varad-blogs';
    
    // Remove pathPrefix and check if it's a valid route
    const cleanPath = path.replace(pathPrefix, '');
    
    // List of valid routes
    const validRoutes = ['/', '/about', '/blog'];
    
    if (validRoutes.includes(cleanPath) || validRoutes.includes(cleanPath + '/')) {
      // Redirect to the clean path without trailing slash issues
      const targetPath = cleanPath.replace(/\/$/, '') || '/';
      navigate(targetPath);
    }
  }, []);

  return (
    <Layout title="Page Not Found - Varad Blogs">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <FaExclamationTriangle className="text-8xl text-yellow-500 mx-auto animate-pulse" />
          </div>

          {/* 404 Text */}
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="group flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaHome className="group-hover:scale-110 transition-transform" />
              <span>Go Home</span>
            </Link>
            
            <Link
              to="/blog"
              className="group flex items-center space-x-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-all duration-300 border-2 border-purple-500/50"
            >
              <FaBlog className="group-hover:scale-110 transition-transform" />
              <span>Browse Articles</span>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-16 ai-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-100 mb-4">
              You might be looking for:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Home Page
              </Link>
              <Link to="/blog" className="text-purple-400 hover:text-purple-300 transition-colors">
                → All Articles
              </Link>
              <Link to="/about" className="text-purple-400 hover:text-purple-300 transition-colors">
                → About Me
              </Link>
              <Link to="/#blog-posts" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Latest Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
