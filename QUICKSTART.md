# Quick Start Guide

Get your blog up and running in 3 simple steps!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run develop
```

Wait for the build to complete. You'll see:
```
You can now view blog-app in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
```

## Step 3: Open in Browser

Open your browser and navigate to:
- **Website**: http://localhost:8000
- **GraphQL IDE**: http://localhost:8000/___graphql

That's it! Your blog is now running locally. 🎉

## What's Next?

### Create Your First Blog Post

1. Go to `src/blog/` directory
2. Create a new `.md` file (e.g., `my-post.md`)
3. Add frontmatter and content:

```markdown
---
title: "My Awesome Post"
date: "2024-12-01"
author: "Your Name"
---

# Hello World!

This is my first blog post!
```

4. Save the file
5. Refresh your browser - your new post appears!

### Customize Your Blog

Edit these files to customize:
- **Site info**: `gatsby-config.js`
- **Navigation**: `src/components/Navbar.js`
- **Styling**: `src/styles/global.css`
- **Home page**: `src/pages/index.js`

### Build for Production

When ready to deploy:

```bash
npm run build
npm run serve
```

Your production site will be at http://localhost:9000

## Need Help?

Check the full [README.md](./README.md) for detailed documentation.

---

Happy blogging! 📝✨
