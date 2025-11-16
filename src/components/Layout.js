import React from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title || 'Varad Blogs - Tech & Innovation'}</title>
        <meta name="description" content={description || 'A blog about technology, programming, and innovation'} />
      </Helmet>
      <div className="min-h-screen neural-network-bg" style={{ background: 'linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%)' }}>
        <Navbar />
        <main className="relative z-10">{children}</main>
        
        {/* Floating Particles Effect - Dark Theme */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        </div>
      </div>
    </>
  );
};

export default Layout;
