import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { FaCalendar, FaSearch, FaTags, FaChevronLeft, FaChevronRight, FaEllipsisH } from 'react-icons/fa';

const BlogArchivePage = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges;
  const POSTS_PER_PAGE = 20;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter posts by search
  const filteredPosts = allPosts.filter(({ node }) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      node.frontmatter.title.toLowerCase().includes(searchLower) ||
      node.excerpt.toLowerCase().includes(searchLower)
    );
  });
  
  // Calculate pagination
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const posts = filteredPosts.slice(startIndex, endIndex);
  
  // Group posts by year and month
  const postsByDate = posts.reduce((acc, { node }) => {
    const date = new Date(node.frontmatter.rawDate);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const key = `${year}-${month}`;
    
    if (!acc[key]) {
      acc[key] = { year, month, posts: [] };
    }
    acc[key].posts.push(node);
    return acc;
  }, {});
  
  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <Layout title="All Blog Posts - Varad Blogs" description="Complete archive of all blog posts">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            All Articles
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Browse through all {allPosts.length} articles
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>
          
          {searchTerm && (
            <p className="mt-4 text-gray-400">
              Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Posts List */}
        <div className="space-y-12">
          {Object.entries(postsByDate).map(([key, { year, month, posts: groupPosts }]) => (
            <div key={key} className="space-y-4">
              {/* Month Header */}
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold text-purple-400">{month} {year}</h2>
                <div className="flex-grow h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                <span className="text-sm text-gray-400">{groupPosts.length} article{groupPosts.length !== 1 ? 's' : ''}</span>
              </div>

              {/* Posts in this month */}
              <div className="space-y-3">
                {groupPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={post.fields.slug}
                    className="block ai-card p-6 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors mb-2">
                          {post.frontmatter.title}
                        </h3>
                        <p className="text-gray-400 line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-2">
                            <FaCalendar />
                            <span>{post.frontmatter.date}</span>
                          </span>
                          <span className="flex items-center space-x-2">
                            <FaTags />
                            <span>{post.frontmatter.author}</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm group-hover:scale-105 transition-transform">
                          Read →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
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
            <div className="flex items-center space-x-2 flex-wrap justify-center">
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
              <span className="text-gray-400 text-sm">Jump to page:</span>
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
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 mb-4">No articles found</p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition-all"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogArchiveQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            rawDate: date
            author
          }
          excerpt(pruneLength: 200)
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogArchivePage;
