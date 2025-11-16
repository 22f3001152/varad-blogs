import React from 'react';
import Layout from '../components/Layout';
import BannerImage from '../components/BannerImage';
import { FaLinkedin, FaInstagram, FaEnvelope, FaCode, FaBrain, FaUser } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <Layout title="About Me - Varad A G" description="Senior Architect at EY with 20 years of technology experience">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <BannerImage category="teamwork" height="h-auto" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About Me
            </h1>
            <p className="text-xl text-purple-200">
              Technology Leader | Visual Effects Veteran | AI Enthusiast
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#0f1419" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Profile Card */}
          <aside className="lg:col-span-4">
            <div className="ai-card p-8 sticky top-24">
              {/* Avatar Placeholder */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
                  <FaUser className="text-8xl text-white/50" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl"></div>
              </div>

              <h2 className="text-3xl font-bold text-center mb-2 text-gray-100">Varad A G</h2>
              <p className="text-center text-purple-300 mb-6 text-lg">Senior Architect, EY</p>

              {/* Social Links Placeholders */}
              <div className="space-y-3">
                <a 
                  href="https://www.linkedin.com/in/YOUR_LINKEDIN" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedin className="text-2xl" />
                  <span className="font-semibold">LinkedIn Profile</span>
                </a>

                <a 
                  href="https://www.instagram.com/YOUR_INSTAGRAM" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
                >
                  <FaInstagram className="text-2xl" />
                  <span className="font-semibold">Instagram</span>
                </a>

                <a 
                  href="mailto:your.email@example.com" 
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:scale-105"
                >
                  <FaEnvelope className="text-2xl" />
                  <span className="font-semibold">Email Me</span>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-400">20+</div>
                    <div className="text-sm text-gray-400">Years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400">∞</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Introduction */}
            <div className="ai-card p-8">
              <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Hello! I'm Varad
              </h3>
              <div className="prose prose-lg max-w-none text-gray-300 space-y-4">
                <p className="text-lg leading-relaxed">
                  A Senior Architect at EY with 20 years of experience in technology. My journey has taken me 
                  from visual effects to enterprise architecture, and now exploring the world of AI.
                </p>
                <p className="text-lg leading-relaxed">
                  I've had the opportunity to work on films like The Jungle Book, Jumanji, The Mummy, Wonder Woman, 
                  and The Lion King (2019) as part of MPC's CORE Engineering team. Today, I focus on enterprise 
                  solutions and sharing knowledge through this blog.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="ai-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FaBrain className="text-3xl text-purple-400" />
                <h3 className="text-3xl font-bold text-gray-100">Experience</h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-300 space-y-4">
                <p className="text-lg leading-relaxed">
                  <span className="text-purple-300 font-semibold">Current:</span> Senior Architect at EY, 
                  working on scalable enterprise solutions and AI implementations.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="text-purple-300 font-semibold">Previous:</span> Visual Effects software 
                  engineering at MPC's CORE Engineering team.
                </p>
                <p className="text-lg leading-relaxed">
                  This blog is where I share insights and learnings from my journey in technology, 
                  from VFX to AI.
                </p>
              </div>
            </div>

            {/* What I Write About */}
            <div className="ai-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FaCode className="text-3xl text-purple-400" />
                <h3 className="text-3xl font-bold text-gray-100">What I Write About</h3>
              </div>
              <div className="text-gray-300 space-y-3 text-lg leading-relaxed">
                <p>• Enterprise architecture and software design</p>
                <p>• AI and machine learning insights</p>
                <p>• Technology trends and innovation</p>
                <p>• Lessons from VFX and tech industries</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-100">Let's Connect</h3>
              <p className="text-gray-300">
                Interested in discussing technology, VFX, AI, or potential collaborations? 
                Feel free to reach out through any of the channels above.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a 
                  href="/#blog-posts" 
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Read My Articles
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="px-6 py-3 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
