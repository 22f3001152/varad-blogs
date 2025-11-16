# 🚀 Quick GitHub Pages Setup

Follow these simple steps to deploy your AI Blog to GitHub Pages.

## ⚡ Quick Start (5 Steps)

### Step 1: Update Repository Name
Edit `gatsby-config.js`:
```javascript
pathPrefix: '/YOUR-REPO-NAME',  // Change this!
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Name: `blog-app` (or your choice)
3. Visibility: **Public**
4. Click **"Create repository"**

### Step 3: Push to GitHub
```bash
# Configure git
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add and commit
git add .
git commit -m "Initial commit"

# Push to GitHub (replace USERNAME and REPO)
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Source: `gh-pages` branch
4. Save

## 🌐 Your Site URL

After 2-3 minutes, visit:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## 🔄 Update Your Blog

Whenever you make changes:
```bash
git add .
git commit -m "Updated blog"
git push origin main
npm run deploy
```

## ✅ Checklist

- [ ] Updated `pathPrefix` in gatsby-config.js
- [ ] Created GitHub repository (public)
- [ ] Pushed code to GitHub
- [ ] Ran `npm run deploy`
- [ ] Enabled Pages in Settings
- [ ] Visited site URL

## 🆘 Troubleshooting

**404 Error?**
- Check pathPrefix matches repo name
- Verify GitHub Pages is enabled
- Wait 2-3 minutes

**Styles Missing?**
```bash
npm run clean
npm run deploy
```

**Deploy Failed?**
```bash
npm install gh-pages --save-dev
npm run deploy
```

## 📚 Full Guide

For detailed instructions, see [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)

---

**Need help?** Check the [troubleshooting section](./DEPLOYMENT-GUIDE.md#-troubleshooting) in the deployment guide.
