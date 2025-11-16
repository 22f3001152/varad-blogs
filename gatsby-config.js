module.exports = {
  // Set pathPrefix for GitHub Pages deployment
  // Change to match your repository name
  pathPrefix: '/varad-blogs',
  
  siteMetadata: {
    title: 'Varad Blogs',
    description: 'A blog about technology, programming, and innovation',
    author: 'Varad',
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
