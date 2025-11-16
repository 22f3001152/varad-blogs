# 🤖 AI Blog - Powered by Neural Networks

A stunning, dark-themed AI blog built with React, Gatsby, and Tailwind CSS. Features vibrant images, rotating hero banners, and a futuristic design optimized for readability.

[![Deploy to GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)](https://github.com/yourusername/blog-app)
[![Gatsby](https://img.shields.io/badge/Gatsby-5.15-purple)](https://www.gatsbyjs.com/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)](https://tailwindcss.com/)

[🚀 Live Demo](https://yourusername.github.io/blog-app/) | [📖 Documentation](./README-DETAILED.md) | [🌐 Deploy Guide](./DEPLOYMENT-GUIDE.md)

## ✨ Features

### 🎨 Design
- 🌙 **Dark Theme** - Easy on the eyes with high contrast
- 🎭 **AI-Themed** - Futuristic design with neural network aesthetics
- 📸 **Vibrant Images** - Real photos featuring people, nature, and technology
- 🔄 **Rotating Hero** - Auto-changing banner images every 5 seconds
- ✨ **Glassmorphism** - Modern frosted glass effects

### 📖 Content
- 📐 **Wide Layout** - 1280px content area (43% wider than standard)
- 📝 **Enhanced Typography** - 18px font, 1.9 line height for perfect readability
- 📊 **Perfect Spacing** - 24px between paragraphs, generous margins
- ✍️ **Markdown Support** - Write posts in Markdown with full styling
- 🏷️ **Smart Images** - Context-aware banner images based on post title

### 🚀 Performance
- ⚡ **Fast Loading** - Optimized static site generation
- 📱 **Responsive** - Perfect on all devices
- 🔍 **SEO Optimized** - Built-in best practices
- 🎯 **GitHub Pages Ready** - One-command deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git
- GitHub account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/blog-app.git
cd blog-app

# Install dependencies
npm install

# Start development server
npm run develop
```

Visit `http://localhost:8000` to see your blog!

## 🌐 Deploy to GitHub Pages

```bash
# 1. Update gatsby-config.js with your repo name
# pathPrefix: '/your-repo-name'

# 2. Deploy
npm run deploy
```

**Detailed deployment guide:** [GITHUB-PAGES-SETUP.md](./GITHUB-PAGES-SETUP.md)

## 📝 Commands

| Command | Description |
|---------|-------------|
| `npm run develop` | Start development server (port 8000) |
| `npm run build` | Build for production |
| `npm run serve` | Preview production build (port 9000) |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run clean` | Clear cache and rebuild |

## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400/667eea/ffffff?text=Dark+Theme+with+Rotating+Hero+Banner)

### Blog Post
![Blog Post](https://via.placeholder.com/800x400/764ba2/ffffff?text=Wide+Layout+with+Enhanced+Readability)

## 📂 Project Structure

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

## ✍️ Creating Blog Posts

Create a new `.md` file in `src/blog/`:

```markdown
---
title: "10 AI Trends in 2024"
date: "2024-11-16"
author: "Your Name"
---

# Introduction

Your content here...
```

Save and the post appears automatically! Posts are sorted by date.

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
