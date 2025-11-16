module.exports = {
  // Set pathPrefix for GitHub Pages deployment
  // Change 'blog-app' to your repository name
  pathPrefix: '/blog-app',
  
  siteMetadata: {
    title: 'AI Blog - Powered by Neural Networks',
    description: 'An AI-powered blog about technology, machine learning, and the future of computing',
    author: 'Your Name',
    siteUrl: 'https://yourusername.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
