# 🚀 Varad Blogs - Complete Command Reference

## ✅ Deployment Fixed!

**Your blog is now set to auto-deploy via GitHub Actions!**

---

## 🎯 Current Status

✅ GitHub Actions workflow configured with proper permissions  
✅ pathPrefix updated to `/varad-blogs`  
✅ All files pushed to main branch  
✅ Auto-deployment triggered  

**Site will be live at:** https://22f3001152.github.io/varad-blogs/

---

## 📝 Quick Commands

### Development

```bash
# Start development server
npm run develop

# Clean cache
npm run clean

# Build for production
npm run build

# Serve production build locally
npm run serve
```

### Deployment (Automatic)

```bash
# Just push to main - GitHub Actions handles the rest!
git add .
git commit -m "Your message"
git push origin main
```

**That's it!** GitHub Actions will:
1. Build your site
2. Deploy to gh-pages branch
3. Publish to GitHub Pages

---

## 🧪 Check Deployment Status

### Option 1: GitHub Web Interface
1. Go to: https://github.com/22f3001152/varad-blogs
2. Click "Actions" tab
3. Watch the workflow run
4. Green checkmark = Success!

### Option 2: Command Line (if you have GitHub CLI)
```bash
gh run list
gh run watch
```

---

## 🌐 Your Live URLs

After deployment completes (2-3 minutes):

**Homepage:**  
https://22f3001152.github.io/varad-blogs/

**Pages:**  
https://22f3001152.github.io/varad-blogs/about/  
https://22f3001152.github.io/varad-blogs/blog/

**Blog Posts:**  
https://22f3001152.github.io/varad-blogs/first-post/  
https://22f3001152.github.io/varad-blogs/javascript-tips/  
https://22f3001152.github.io/varad-blogs/web-development-trends/

---

## ⚙️ One-Time Setup: Enable GitHub Pages

**Do this once:**

1. Go to: https://github.com/22f3001152/varad-blogs/settings/pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages` / `root`
4. Click "Save"

---

## ✍️ Writing New Posts

### Create a new post:

```bash
# Create file
nano src/blog/my-new-post.md
```

### Add content:

```markdown
---
title: "My New Post Title"
date: "2024-11-16"
author: "Varad"
---

Your amazing content here...
```

### Deploy:

```bash
git add src/blog/my-new-post.md
git commit -m "Add new post: My New Post Title"
git push origin main
```

**Done!** Post will be live in 2-3 minutes.

---

## 🔍 Troubleshooting

### If deployment fails:

```bash
# Check the logs
gh run view

# Or check on GitHub:
# Actions tab → Click the failed workflow → View logs
```

### If site shows 404:

1. **Wait 5 minutes** - GitHub Pages needs time
2. **Check Pages settings** - Must be enabled with gh-pages branch
3. **Clear browser cache** - Ctrl+Shift+R or Cmd+Shift+R
4. **Check workflow** - Must show green checkmark

### If build fails locally:

```bash
# Clean everything and rebuild
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Project Structure

```
varad-blogs/
├── .github/workflows/
│   └── deploy.yml          # Auto-deployment workflow
├── src/
│   ├── blog/              # Your blog posts (.md files)
│   ├── components/        # React components
│   ├── pages/            # Site pages (index, about, blog, 404)
│   ├── styles/           # Global styles
│   └── templates/        # Blog post template
├── static/
│   ├── 404.html          # GitHub Pages redirect handler
│   └── .nojekyll         # Bypass Jekyll
├── gatsby-config.js      # Site configuration
├── gatsby-node.js        # Build configuration
├── gatsby-ssr.js         # SSR/routing script
└── package.json          # Dependencies
```

---

## 🎨 Customization

### Update social links:

```bash
nano src/pages/about.js
# Find the social links section
# Update LinkedIn and Instagram URLs
```

### Change colors:

```bash
nano tailwind.config.js
# Modify the colors in the theme section
```

### Add more pages:

```bash
# Create new page
nano src/pages/contact.js

# Push to deploy
git add src/pages/contact.js
git commit -m "Add contact page"
git push origin main
```

---

## 📊 What Happens When You Push

```
1. You push code to main branch
   ↓
2. GitHub Actions detects push
   ↓
3. Workflow starts automatically
   ↓
4. Installs dependencies (npm ci)
   ↓
5. Builds site (npm run build)
   ↓
6. Deploys to gh-pages branch
   ↓
7. GitHub Pages publishes site
   ↓
8. Site live in 2-3 minutes!
```

---

## ⚡ Quick Reference

### Most Common Commands:

```bash
# Local development
npm run develop

# Deploy changes
git add .
git commit -m "Update content"
git push origin main

# Check status
git status
git log --oneline -5

# View remote
git remote -v
```

---

## 🎊 You're All Set!

Your blog is now configured for automatic deployment!

**Just remember:**
1. Write content
2. Push to main
3. Wait 2-3 minutes
4. It's live!

**Your live site:**  
https://22f3001152.github.io/varad-blogs/

**Happy blogging!** 🚀📝✨

---

## 📖 More Documentation

- `DEPLOYMENT-FIX.md` - Detailed deployment guide
- `FINAL-SUMMARY.txt` - Complete feature list
- `PAGINATION-SYSTEM-COMPLETE.txt` - Pagination details
- `GITHUB-DEPLOYMENT-COMPLETE.txt` - GitHub Pages setup
- `QUICK-DEPLOY.md` - Quick deployment reference

---

**Need help?** Check the Actions tab for build logs or review the documentation files above.
