# My Tech Blog

A modern blog application built with React, Gatsby, and Tailwind CSS for sharing technical content.

## Features

✨ **Home Page** - Displays a list of blog posts with titles, excerpts, and publication dates  
📝 **Blog Post Pages** - Detailed pages for each blog post with full content and author information  
🧭 **Navigation** - Clean navigation bar for easy site navigation  
📱 **Responsive Design** - Works seamlessly on desktop and mobile devices  
🔍 **SEO Optimized** - Built-in SEO best practices using React Helmet  
✍️ **Markdown Support** - Write blog posts in Markdown format  
🎨 **Tailwind CSS** - Beautiful, utility-first CSS styling

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## Installation

1. **Navigate to the project directory**:
   ```bash
   cd blog-app
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

## Available Commands

### Development

Start the development server with hot-reloading:
```bash
npm run develop
```
or
```bash
npm start
```

The site will be available at `http://localhost:8000`

GraphQL playground will be available at `http://localhost:8000/___graphql`

### Production Build

Build the site for production:
```bash
npm run build
```

### Serve Production Build

Serve the production build locally:
```bash
npm run serve
```

The site will be available at `http://localhost:9000`

### Clean Cache

Clean the Gatsby cache and public directories:
```bash
npm run clean
```

Use this if you encounter build issues or need a fresh start.

## Project Structure

```
blog-app/
├── src/
│   ├── blog/                    # Markdown blog posts
│   │   ├── first-post.md
│   │   ├── javascript-tips.md
│   │   └── web-development-trends.md
│   ├── components/              # React components
│   │   ├── Layout.js           # Layout wrapper with SEO
│   │   └── Navbar.js           # Navigation bar
│   ├── pages/                   # Page components
│   │   └── index.js            # Home page
│   ├── styles/                  # Global styles
│   │   └── global.css          # Tailwind CSS and custom styles
│   └── templates/               # Page templates
│       └── blog-post.js        # Blog post template
├── gatsby-browser.js            # Gatsby browser APIs
├── gatsby-config.js             # Gatsby configuration
├── gatsby-node.js               # Gatsby Node APIs (page creation)
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json                 # Project dependencies and scripts
```

## Creating Blog Posts

To create a new blog post:

1. Create a new Markdown file in the `src/blog/` directory
2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Blog Post Title"
date: "2024-12-31"
author: "Your Name"
---

# Your Content Here

Write your blog post content using Markdown...
```

3. Save the file and restart the development server if it's running
4. Your new post will automatically appear on the home page

## Customization

### Update Site Metadata

Edit `gatsby-config.js` to update site information:

```javascript
siteMetadata: {
  title: 'Your Blog Name',
  description: 'Your blog description',
  author: 'Your Name',
  siteUrl: 'https://your-site-url.com',
}
```

### Modify Styles

- **Global styles**: Edit `src/styles/global.css`
- **Tailwind configuration**: Edit `tailwind.config.js`
- **Component styles**: Use Tailwind utility classes in components

### Add New Pages

Create new page components in the `src/pages/` directory. Files in this directory automatically become routes.

## Technologies Used

- **[Gatsby](https://www.gatsbyjs.com/)** - React-based static site generator
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[GraphQL](https://graphql.org/)** - Query language for APIs
- **[React Helmet](https://github.com/nfl/react-helmet)** - Document head manager for SEO

## Deployment

This site can be deployed to various platforms:

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `public`

### Vercel
1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Gatsby settings

### GitHub Pages
```bash
npm install gh-pages --save-dev
```
Add to package.json:
```json
"scripts": {
  "deploy": "gatsby build && gh-pages -d public"
}
```

## Troubleshooting

### Build Errors

If you encounter build errors:
```bash
npm run clean
npm install
npm run develop
```

### Port Already in Use

If port 8000 is already in use:
```bash
npm run develop -- -p 3000
```

### Module Not Found Errors

Delete `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Adding Features

### Comments Section

Consider integrating:
- **Disqus**: Popular commenting platform
- **Utterances**: GitHub-based comments
- **Commento**: Privacy-focused alternative

### Analytics

Add analytics using:
- **Google Analytics**: via `gatsby-plugin-google-analytics`
- **Plausible**: Privacy-friendly analytics
- **Fathom**: Simple, privacy-focused analytics

### Newsletter

Integrate email collection:
- **Mailchimp**
- **ConvertKit**
- **Substack**

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome!

## Support

If you have any questions or need help, please open an issue in the repository.

---

**Happy Blogging!** 🚀
