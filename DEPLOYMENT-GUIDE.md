# 🚀 GitHub Pages Deployment Guide

Complete guide to deploy your AI Blog to GitHub Pages.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ A GitHub account
- ✅ Git installed on your computer
- ✅ Your blog working locally (`npm run develop`)

## 🔧 Step 1: Update Configuration

The following files have been pre-configured for GitHub Pages:

### 1. `gatsby-config.js`
```javascript
pathPrefix: '/blog-app',  // ⚠️ CHANGE 'blog-app' to YOUR repository name
```

### 2. `package.json`
```json
"scripts": {
  "deploy": "gatsby build --prefix-paths && gh-pages -d public"
}
```

## 📝 Step 2: Create GitHub Repository

1. **Go to GitHub.com**
   - Log in to your account
   - Click the **"+"** icon (top right)
   - Select **"New repository"**

2. **Repository Settings**
   ```
   Repository name: blog-app (or your preferred name)
   Description: AI-powered blog with dark theme
   Visibility: Public (required for free GitHub Pages)
   ✅ DO NOT initialize with README, .gitignore, or license
   ```

3. **Click "Create repository"**

## 🔄 Step 3: Update Path Prefix

⚠️ **IMPORTANT**: Update the `pathPrefix` in `gatsby-config.js`

```javascript
// If your repository is named 'my-awesome-blog'
pathPrefix: '/my-awesome-blog',

// If your repository is named 'blog'
pathPrefix: '/blog',
```

The pathPrefix should match your repository name exactly!

## 💻 Step 4: Initialize and Push to GitHub

Run these commands in your terminal:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "Initial commit - AI Blog with dark theme"

# 4. Rename branch to main (GitHub's default)
git branch -M main

# 5. Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 6. Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/blog-app.git
git push -u origin main
```

## 🚀 Step 5: Deploy to GitHub Pages

Run the deploy command:

```bash
npm run deploy
```

This command will:
1. Build your site with path prefixes
2. Create a `gh-pages` branch
3. Push the built site to that branch
4. Set up GitHub Pages automatically

**Wait 2-3 minutes** for GitHub to process and publish your site.

## 🌐 Step 6: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click "Settings"** tab
3. **Scroll to "Pages"** in the left sidebar
4. **Under "Source"**, ensure:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. **Click "Save"** if needed

## ✅ Step 7: Access Your Site

Your blog will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
```
https://johndoe.github.io/blog-app/
```

## 🔄 Updating Your Blog

When you make changes:

```bash
# 1. Make your changes to the code

# 2. Test locally
npm run develop

# 3. Commit changes
git add .
git commit -m "Description of changes"

# 4. Push to GitHub
git push origin main

# 5. Deploy updated version
npm run deploy
```

## 🐛 Troubleshooting

### Issue: 404 Not Found

**Solution 1: Check pathPrefix**
```javascript
// In gatsby-config.js
pathPrefix: '/your-exact-repo-name',
```

**Solution 2: Verify GitHub Pages settings**
- Go to Settings → Pages
- Ensure branch is set to `gh-pages`
- Ensure folder is set to `/ (root)`

### Issue: Styles not loading

**Solution:**
```bash
# Clean and rebuild
npm run clean
npm run deploy
```

### Issue: Images not displaying

**Check:** Ensure images use relative paths, not absolute paths

```javascript
// ✅ Good
<img src="./image.jpg" />

// ❌ Bad
<img src="/image.jpg" />
```

### Issue: Deploy command fails

**Solution 1: Clean and retry**
```bash
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

**Solution 2: Check gh-pages package**
```bash
npm install gh-pages --save-dev
```

## 🔐 Custom Domain (Optional)

To use a custom domain:

1. **Add CNAME file in `static/` folder:**
   ```
   yourdomain.com
   ```

2. **Update `gatsby-config.js`:**
   ```javascript
   pathPrefix: '', // Empty for custom domain
   siteMetadata: {
     siteUrl: 'https://yourdomain.com',
   }
   ```

3. **Configure DNS:**
   - Add A records pointing to GitHub's IPs
   - Or add CNAME record pointing to `username.github.io`

4. **Enable in GitHub:**
   - Settings → Pages → Custom domain
   - Enter your domain
   - Wait for DNS verification

## 📊 Deployment Checklist

Before deploying:
- [ ] Updated `pathPrefix` in gatsby-config.js
- [ ] Tested locally with `npm run develop`
- [ ] Committed all changes
- [ ] Created GitHub repository
- [ ] Added remote origin
- [ ] Pushed to main branch
- [ ] Ran `npm run deploy`
- [ ] Enabled GitHub Pages in settings
- [ ] Waited 2-3 minutes for deployment
- [ ] Visited site URL to verify

## 🎯 Quick Deploy Commands

```bash
# First time deployment
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
npm run deploy

# Subsequent deployments
git add .
git commit -m "Your changes"
git push origin main
npm run deploy
```

## 📱 Deployment Environments

### Development (Local)
```bash
npm run develop
# http://localhost:8000
```

### Production (Local Test)
```bash
npm run build
npm run serve
# http://localhost:9000
```

### Production (GitHub Pages)
```bash
npm run deploy
# https://username.github.io/repo-name/
```

## 🌟 Tips for Success

1. **Always test locally first**
   ```bash
   npm run develop
   ```

2. **Keep your code backed up**
   ```bash
   git push origin main
   ```

3. **Deploy after every major change**
   ```bash
   npm run deploy
   ```

4. **Monitor GitHub Actions**
   - Go to your repository
   - Click "Actions" tab
   - Check deployment status

5. **Clear browser cache**
   - Hard refresh: Ctrl+Shift+R (Windows/Linux)
   - Or Cmd+Shift+R (Mac)

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Gatsby Deployment Guide](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-github-pages/)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)

## 🆘 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Review GitHub Pages settings
3. Check browser console for errors
4. Verify all paths in gatsby-config.js
5. Ensure gh-pages branch exists

## 🎉 Success Indicators

Your deployment is successful when:
- ✅ `npm run deploy` completes without errors
- ✅ `gh-pages` branch exists on GitHub
- ✅ GitHub Pages shows "Your site is live"
- ✅ Visiting the URL shows your blog
- ✅ All images and styles load correctly
- ✅ Navigation works properly

---

**Congratulations!** Your AI Blog is now live on the internet! 🚀

Share your URL with the world and start blogging!
