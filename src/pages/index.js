import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import CardImage from '../components/CardImage';
import { FaRocket, FaBrain, FaLightbulb, FaArrowRight, FaMicrochip, FaNetworkWired } from 'react-icons/fa';

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout title="AI Blog - Powered by Neural Networks">
      {/* Hero Section with Rotating Vibrant Images */}
      <HeroBanner>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Floating Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 animate-pulse">
              <FaMicrochip className="text-yellow-300" />
              <span className="text-sm font-semibold">AI-Powered Content</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to the
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200">
                Future of Blogging
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Explore cutting-edge insights on AI, technology, and innovation. 
              Powered by neural networks and human creativity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#blog-posts" 
                className="group flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-300"
              >
                <span>Explore Articles</span>
                <FaRocket className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="flex items-center space-x-2 bg-purple-600/30 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/50 hover:bg-purple-600/50 transition-all duration-300">
                <FaBrain />
                <span>AI Features</span>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{posts.length}+</div>
                <div className="text-sm text-purple-200">AI Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-purple-200">Neural Powered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-purple-200">Learning Mode</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#0f1419" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </HeroBanner>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="ai-card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 group-hover:animate-bounce">
              <FaBrain className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">AI-Driven Insights</h3>
            <p className="text-gray-300">Harness the power of machine learning for deeper understanding</p>
          </div>

          <div className="ai-card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4 group-hover:animate-bounce">
              <FaNetworkWired className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">Neural Networks</h3>
            <p className="text-gray-300">Content powered by advanced neural network architectures</p>
          </div>

          <div className="ai-card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-4 group-hover:animate-bounce">
              <FaLightbulb className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">Innovation First</h3>
            <p className="text-gray-300">Stay ahead with cutting-edge technology insights</p>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div id="blog-posts" className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Latest AI Insights</h2>
            <p className="text-xl text-gray-300">Discover groundbreaking perspectives on technology</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(({ node }, index) => {
              // Cycle through different image categories for variety
              const categories = ['technology', 'people', 'nature', 'innovation', 'teamwork', 'creative'];
              const category = categories[index % categories.length];
              
              return (
                <Link 
                  key={node.id} 
                  to={node.fields.slug}
                  className="group"
                >
                  <article className="ai-card p-6 h-full flex flex-col hover:scale-105 transition-all duration-300">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="ai-badge">AI Article</span>
                    </div>

                    {/* Vibrant Image with Different Categories */}
                    <CardImage 
                      category={category}
                      seed={node.id}
                      className="h-48 rounded-xl mb-4"
                    />

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-purple-400 transition-colors">
                    {node.frontmatter.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-3 flex items-center">
                    <FaMicrochip className="mr-2" />
                    {node.frontmatter.date}
                  </p>
                  
                  <p className="text-gray-300 mb-4 flex-grow line-clamp-3">
                    {node.excerpt}
                  </p>

                  <div className="flex items-center text-purple-400 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Read more</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative overflow-hidden mt-20">
        <div className="ai-gradient-bg opacity-90 py-20">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Dive Deeper?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands exploring the intersection of AI and human creativity
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default HomePage;
