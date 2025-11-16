# 🚀 GitHub Pages Deployment - Permission Fix

## ❌ The Error You Got

```
remote: Permission to 22f3001152/varad-blogs.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/22f3001152/varad-blogs.git/': The requested URL returned error: 403
Error: Action failed with "The process '/usr/bin/git' failed with exit code 128"
```

**Cause:** The `gh-pages` npm package tried to push but didn't have proper permissions.

---

## ✅ Solution Applied

**Updated `.github/workflows/deploy.yml`** with proper permissions.

### What Changed:

1. **Added permissions block:**
   ```yaml
   permissions:
     contents: write
     pages: write
     id-token: write
   ```

2. **Updated actions versions:**
   - `actions/checkout@v4`
   - `actions/setup-node@v4`
   - `peaceiris/actions-gh-pages@v4`

3. **Added force_orphan:**
   - Keeps gh-pages branch clean

---

## 🚀 New Deployment Process

### Method 1: Automatic (Recommended)

**Just push to main branch:**

```bash
git add .
git commit -m "Your changes"
git push origin main
```

GitHub Actions will automatically:
1. Detect the push
2. Build your site
3. Deploy to gh-pages branch
4. Publish to GitHub Pages

**Check progress:**
- Go to your repo on GitHub
- Click "Actions" tab
- Watch the deployment

---

### Method 2: Manual Trigger

**From GitHub web interface:**

1. Go to your repo
2. Click "Actions" tab
3. Select "Deploy to GitHub Pages" workflow
4. Click "Run workflow" button
5. Click "Run workflow" (green button)

**Or via GitHub CLI:**
```bash
gh workflow run deploy.yml
```

---

## 🎯 First Time Setup

### Enable GitHub Pages (One Time):

1. **Go to your repo settings:**
   - Navigate to: https://github.com/22f3001152/varad-blogs/settings/pages

2. **Configure source:**
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Click "Save"

3. **Wait for deployment:**
   - First deployment takes 2-3 minutes
   - You'll see a green checkmark when done

4. **Visit your site:**
   - https://22f3001152.github.io/varad-blogs/
   - (Note: repo name changed from blog-app to varad-blogs)

---

## ⚠️ Important: Update pathPrefix

Your repo is named **`varad-blogs`** not `blog-app`!

### Update gatsby-config.js:

```javascript
module.exports = {
  pathPrefix: '/varad-blogs',  // Changed from /blog-app
  // ... rest of config
}
```

### Update static/404.html:

Find line 13 and change:
```javascript
var pathSegmentsToKeep = 1; // Keep '/varad-blogs' in the path
```

### Update src/pages/404.js:

Find line 11 and change:
```javascript
const pathPrefix = '/varad-blogs';
```

---

## 🔧 Make These Changes Now

### 1. Update gatsby-config.js:

```bash
# Edit the file
nano gatsby-config.js

# Change this line:
pathPrefix: '/blog-app',

# To this:
pathPrefix: '/varad-blogs',
```

### 2. Update static/404.html:

```bash
# Edit the file
nano static/404.html

# Update the comment on line 13 to:
var pathSegmentsToKeep = 1; // Keep '/varad-blogs' in the path
```

### 3. Update src/pages/404.js:

```bash
# Edit the file
nano src/pages/404.js

# Change line 11:
const pathPrefix = '/blog-app';

# To:
const pathPrefix = '/varad-blogs';
```

### 4. Commit and push:

```bash
git add gatsby-config.js static/404.html src/pages/404.js
git commit -m "Update pathPrefix to match repo name"
git push origin main
```

---

## ✅ After Pushing

1. **Watch the deployment:**
   - GitHub Actions will automatically build and deploy
   - Go to Actions tab to watch progress
   - Takes about 2-3 minutes

2. **Check GitHub Pages settings:**
   - Settings → Pages
   - Ensure source is set to `gh-pages` branch

3. **Visit your site:**
   - https://22f3001152.github.io/varad-blogs/
   - All pages should work now!

---

## 🧪 Test Your Site

After deployment completes:

### Homepage:
✅ https://22f3001152.github.io/varad-blogs/

### Pages:
✅ https://22f3001152.github.io/varad-blogs/about/
✅ https://22f3001152.github.io/varad-blogs/blog/

### Blog Posts:
✅ https://22f3001152.github.io/varad-blogs/first-post/
✅ https://22f3001152.github.io/varad-blogs/javascript-tips/
✅ https://22f3001152.github.io/varad-blogs/web-development-trends/

---

## 🔍 Troubleshooting

### If deployment fails:

1. **Check Actions tab:**
   - Look for error messages
   - Check build logs

2. **Verify permissions:**
   - Settings → Actions → General
   - Workflow permissions: "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

3. **Check Pages settings:**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root

### If pages show 404:

1. **Wait 5 minutes:**
   - GitHub Pages needs time to process

2. **Check pathPrefix:**
   - Must match repo name: `/varad-blogs`

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R

4. **Check deployment status:**
   - Actions tab → Latest workflow
   - Must show green checkmark

---

## 📝 Deployment Workflow

```
1. You push to main branch
   ↓
2. GitHub Actions triggers
   ↓
3. Workflow installs dependencies
   ↓
4. Workflow builds site (npm run build)
   ↓
5. Workflow deploys to gh-pages branch
   ↓
6. GitHub Pages publishes site
   ↓
7. Site live at: https://22f3001152.github.io/varad-blogs/
```

---

## 🎯 Summary

**What you need to do:**

1. ✅ Update `gatsby-config.js` (pathPrefix: '/varad-blogs')
2. ✅ Update `static/404.html` (comment)
3. ✅ Update `src/pages/404.js` (pathPrefix variable)
4. ✅ Commit and push changes
5. ✅ Enable GitHub Pages in settings (one time)
6. ✅ Wait 2-3 minutes
7. ✅ Visit your live site!

**Your site will be live at:**
https://22f3001152.github.io/varad-blogs/

---

## 🎊 You're Almost There!

Just update the three files with the correct repo name and push.
GitHub Actions will handle the rest automatically! 🚀

No more permission errors!
No more manual deployment!
Just push and it deploys! ✨
