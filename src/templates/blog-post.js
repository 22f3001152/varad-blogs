import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import BannerImage from '../components/BannerImage';
import { FaBrain, FaClock, FaUser, FaArrowLeft, FaRobot, FaMicrochip } from 'react-icons/fa';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout title={post.frontmatter.title} description={post.excerpt}>
      {/* Hero Header */}
      <div className="relative overflow-hidden py-20">
        {/* Vibrant Background Image */}
        <BannerImage category="innovation" height="h-auto" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Articles</span>
          </Link>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-semibold flex items-center">
              <FaBrain className="mr-2" />
              AI Article
            </span>
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-semibold flex items-center">
              <FaMicrochip className="mr-2" />
              Neural Powered
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {post.frontmatter.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <div className="flex items-center space-x-2">
              <FaUser className="text-purple-200" />
              <span className="font-semibold">{post.frontmatter.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-purple-200" />
              <span>{post.frontmatter.date}</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-20">
          <FaRobot className="text-white text-9xl animate-pulse" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <FaBrain className="text-white text-9xl" />
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#0f1419" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content - Wider Layout */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar - AI Info */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="ai-card p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-4">
                <FaBrain className="text-2xl text-purple-400" />
                <h3 className="font-bold text-gray-100">AI Insights</h3>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Enhanced with neural network analysis.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Complexity:</span>
                  <span className="font-semibold text-purple-400">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AI Score:</span>
                  <span className="font-semibold text-purple-400">95%</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Article Content - Much Wider */}
          <article className="lg:col-span-10">
            <div className="ai-card p-10 md:p-16">
              {/* Featured Image - Vibrant and Large */}
              <div className="relative h-72 md:h-[500px] rounded-2xl mb-10 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://source.unsplash.com/1600x900/?${
                      post.frontmatter.title.toLowerCase().includes('javascript') ? 'coding,programming,developer' :
                      post.frontmatter.title.toLowerCase().includes('react') ? 'technology,innovation,web' :
                      post.frontmatter.title.toLowerCase().includes('ai') ? 'artificial-intelligence,robot,future' :
                      post.frontmatter.title.toLowerCase().includes('web') ? 'web-development,design,creative' :
                      'technology,people,innovation'
                    }')`,
                  }}
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
              </div>

              {/* Article Body - Much Wider with Better Spacing */}
              <div 
                className="prose prose-xl max-w-none" 
                dangerouslySetInnerHTML={{ __html: post.html }} 
              />

              {/* Article Footer */}
              <div className="mt-16 pt-10 border-t border-gray-700">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <FaUser className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-100">{post.frontmatter.author}</div>
                      <div className="text-sm text-gray-400">AI Content Creator</div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/" 
                    className="ai-button text-white flex items-center space-x-2"
                  >
                    <span>More Articles</span>
                    <FaBrain />
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Topics */}
            <div className="mt-8 ai-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-100">Related AI Topics</h3>
              <div className="flex flex-wrap gap-3">
                {['Machine Learning', 'Neural Networks', 'Deep Learning', 'AI Ethics', 'Robotics'].map((topic) => (
                  <span 
                    key={topic}
                    className="px-5 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 rounded-full text-base font-semibold hover:scale-105 transition-transform cursor-pointer hover:bg-purple-500/30"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
      html
      excerpt
    }
  }
`;

export default BlogPost;
