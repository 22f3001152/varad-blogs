import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import CardImage from '../components/CardImage';
import { FaRocket, FaBrain, FaLightbulb, FaArrowRight, FaMicrochip, FaNetworkWired, FaChevronLeft, FaChevronRight, FaEllipsisH, FaBlog } from 'react-icons/fa';

const HomePage = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges;
  const POSTS_PER_PAGE = 9; // 3 rows of 3 posts
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate pagination
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const posts = allPosts.slice(startIndex, endIndex);
  
  // Pagination helper
  const goToPage = (page) => {
    setCurrentPage(page);
    document.getElementById('blog-posts')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <Layout title="Varad Blogs - Tech & Innovation">
      {/* Hero Section with Rotating Vibrant Images */}
      <HeroBanner>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200">
                Varad Blogs
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Explore insightful articles on technology, programming, and innovation. 
              Sharing knowledge and ideas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#blog-posts" 
                className="group flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-300"
              >
                <span>Read Articles</span>
                <FaRocket className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{totalPosts}+</div>
                <div className="text-sm text-purple-200">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-purple-200">Quality Content</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-sm text-purple-200">Ideas Shared</div>
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
            <h3 className="text-xl font-bold mb-3 text-gray-100">Insightful Content</h3>
            <p className="text-gray-300">Deep dive into technology topics with clear explanations</p>
          </div>

          <div className="ai-card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4 group-hover:animate-bounce">
              <FaNetworkWired className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">Well Researched</h3>
            <p className="text-gray-300">Every article backed by thorough research and experience</p>
          </div>

          <div className="ai-card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-4 group-hover:animate-bounce">
              <FaLightbulb className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">Practical Tips</h3>
            <p className="text-gray-300">Real-world advice you can apply immediately</p>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div id="blog-posts" className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Latest Articles</h2>
            <p className="text-xl text-gray-300">Discover insights on technology and programming</p>
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
                      <span className="ai-badge">Article</span>
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex flex-col items-center space-y-6">
              {/* Page Info */}
              <div className="text-center">
                <p className="text-gray-300 text-lg">
                  Showing <span className="text-purple-400 font-semibold">{startIndex + 1}-{Math.min(endIndex, totalPosts)}</span> of <span className="text-purple-400 font-semibold">{totalPosts}</span> articles
                </p>
                <p className="text-gray-400 text-sm mt-1">Page {currentPage} of {totalPages}</p>
              </div>

              {/* Pagination Buttons */}
              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === 1
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  <FaChevronLeft />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-2">
                  {getPageNumbers().map((page, index) => (
                    page === '...' ? (
                      <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
                        <FaEllipsisH />
                      </span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-110 shadow-lg'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  <span className="hidden sm:inline">Next</span>
                  <FaChevronRight />
                </button>
              </div>

              {/* Quick Jump */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-400 text-sm">Jump to:</span>
                <select
                  value={currentPage}
                  onChange={(e) => goToPage(Number(e.target.value))}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <option key={page} value={page}>
                      Page {page}
                    </option>
                  ))}
                </select>
              </div>

              {/* View All Posts Link */}
              <div className="mt-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                >
                  <FaBlog />
                  <span>Browse All {totalPosts} Articles</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative overflow-hidden mt-20">
        <div className="ai-gradient-bg opacity-90 py-20">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enjoy Reading?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about new articles and updates
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
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
