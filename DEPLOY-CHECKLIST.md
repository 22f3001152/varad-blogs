# 🚀 GitHub Pages Deployment Checklist

Print this or keep it open while deploying!

## ☑️ Pre-Deployment

- [ ] Node.js 18+ installed
- [ ] npm installed
- [ ] Git installed
- [ ] GitHub account created
- [ ] Blog tested locally (`npm run develop`)

## 1️⃣ Update Configuration

- [ ] Open `gatsby-config.js`
- [ ] Find `pathPrefix: '/blog-app'`
- [ ] Change `'blog-app'` to YOUR repository name
- [ ] Save file

## 2️⃣ Create GitHub Repository

- [ ] Go to https://github.com/new
- [ ] Enter repository name (same as pathPrefix)
- [ ] Set to **Public**
- [ ] **DO NOT** check "Initialize with README"
- [ ] Click "Create repository"
- [ ] Keep this page open (you'll need the URL)

## 3️⃣ Configure Git

```bash
# In your terminal, run:
git config user.name "Your Name"
git config user.email "your@email.com"
```

- [ ] Ran `git config user.name`
- [ ] Ran `git config user.email`

## 4️⃣ Commit Your Code

```bash
git add .
git commit -m "Initial commit - AI Blog"
```

- [ ] Ran `git add .`
- [ ] Ran `git commit`
- [ ] No errors appeared

## 5️⃣ Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

**Replace USERNAME and REPO with your info!**

- [ ] Replaced USERNAME with your GitHub username
- [ ] Replaced REPO with your repository name
- [ ] Ran all three commands
- [ ] Code pushed successfully

## 6️⃣ Deploy to GitHub Pages

```bash
npm run deploy
```

- [ ] Ran `npm run deploy`
- [ ] Saw "Published" message
- [ ] No errors occurred

## 7️⃣ Enable GitHub Pages

- [ ] Go to your repository on GitHub
- [ ] Click **Settings** tab
- [ ] Click **Pages** in left sidebar
- [ ] Under "Source":
  - [ ] Selected branch: `gh-pages`
  - [ ] Selected folder: `/ (root)`
- [ ] Clicked **Save**

## 8️⃣ Wait & Verify

- [ ] Waited 2-3 minutes
- [ ] Visited: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- [ ] Site loads correctly
- [ ] Home page displays
- [ ] Blog posts visible
- [ ] Images load
- [ ] Navigation works
- [ ] Styles applied

## ✅ Success Indicators

You've successfully deployed when:
- ✅ No errors in terminal
- ✅ `gh-pages` branch exists on GitHub
- ✅ GitHub Pages shows "Your site is live"
- ✅ Site URL works and looks correct

## 🎉 Congratulations!

Your AI Blog is now live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## 🔄 Updating Your Blog

When you make changes:

```bash
# 1. Edit your content/code
# 2. Test locally
npm run develop

# 3. Commit changes
git add .
git commit -m "Description of changes"

# 4. Push to GitHub
git push origin main

# 5. Deploy
npm run deploy

# 6. Wait 2-3 minutes
# 7. Visit your URL to see changes
```

## 🆘 Having Issues?

**404 Error?**
- Verify pathPrefix matches repo name
- Check GitHub Pages settings
- Wait a few more minutes

**Styles missing?**
```bash
npm run clean
npm run deploy
```

**Deploy failed?**
```bash
npm install gh-pages --save-dev
npm run deploy
```

**Still stuck?**
- Check [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)
- Review [GITHUB-PAGES-SETUP.md](./GITHUB-PAGES-SETUP.md)

---

**Save this checklist!** You'll need it for future deployments too.
