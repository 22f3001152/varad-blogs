# 🚀 Varad Blogs

A professional blog built with Gatsby, featuring dark theme, smart pagination, and automatic GitHub Pages deployment.

## ✅ Deployment Fixed!

Your blog now uses **GitHub Actions** for automatic deployment!

### 🌐 Live Site
**https://22f3001152.github.io/varad-blogs/**

---

## 🎯 Quick Start

### Deploy Now
```bash
# Changes were already pushed!
# Check deployment status at:
# https://github.com/22f3001152/varad-blogs/actions
```

### Enable GitHub Pages (One Time)
1. Go to: https://github.com/22f3001152/varad-blogs/settings/pages
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **root**
4. Click **Save**

Wait 2-3 minutes, then visit: **https://22f3001152.github.io/varad-blogs/**

---

## 📝 Common Commands

```bash
# Local development
npm run develop          # Start dev server at localhost:8000

# Build
npm run build           # Production build
npm run clean           # Clean cache

# Deployment (automatic)
git add .
git commit -m "Update"
git push origin main    # Triggers auto-deployment
```

---

## ✨ Features

- 🎨 **Modern Design** - VB logo, dark theme, purple/pink gradients
- 📄 **Homepage** - 9 posts per page with smart pagination
- 📚 **Blog Archive** - 20 posts per page with search
- 👤 **About Page** - Professional profile
- 🔍 **Search** - Find posts instantly
- 📱 **Responsive** - Works on all devices
- 🚀 **Auto Deploy** - Push to main = auto deployment

---

## ✍️ Write a New Post

1. Create file: `src/blog/my-post.md`
2. Add content:
   ```markdown
   ---
   title: "Post Title"
   date: "2024-11-16"
   author: "Varad"
   ---
   
   Your content here...
   ```
3. Deploy:
   ```bash
   git add src/blog/my-post.md
   git commit -m "Add new post"
   git push origin main
   ```

Live in 2-3 minutes! 🎉

---

## 🌐 Pages

- `/` - Homepage with latest posts
- `/blog` - All posts with search
- `/about` - Your profile
- `/first-post/` - Sample blog post

---

## 🔍 Troubleshooting

**Site shows 404?**
- Enable GitHub Pages in repo settings
- Wait 5 minutes for deployment
- Clear browser cache (Ctrl+Shift+R)

**Deployment failing?**
- Check Actions tab for errors
- Verify workflow permissions in settings

**Need help?**
- Read `COMMANDS.md` for detailed guide
- Read `DEPLOYMENT-FIX.md` for deployment info
- Check Actions tab for build logs

---

## 📚 Documentation

- `COMMANDS.md` - Complete command reference
- `DEPLOYMENT-FIX.md` - Deployment troubleshooting
- `FINAL-SUMMARY.txt` - Complete feature list
- `PAGINATION-SYSTEM-COMPLETE.txt` - Pagination details

---

## 🎊 You're Ready!

Your blog is configured and deployed!

Just push changes to main branch and they'll be live in minutes! 🚀

**Live Site:** https://22f3001152.github.io/varad-blogs/
