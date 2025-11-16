# Command Reference

All commands you need to work with this blog application.

## Essential Commands

### Start Development Server
```bash
npm run develop
# or
npm start
```
Opens at http://localhost:8000

### Build for Production
```bash
npm run build
```
Creates optimized production build in `public/` directory

### Serve Production Build
```bash
npm run serve
```
Opens at http://localhost:9000

### Clean Cache
```bash
npm run clean
```
Removes `.cache/` and `public/` directories

## Development Workflow

### 1. First Time Setup
```bash
npm install
```

### 2. Daily Development
```bash
npm run develop
```

### 3. Before Deploying
```bash
npm run clean
npm run build
npm run serve  # Test production build locally
```

## Useful Options

### Change Development Port
```bash
npm run develop -- -p 3000
```
Opens at http://localhost:3000

### Open Browser Automatically
```bash
npm run develop -- -o
```

### Show Verbose Output
```bash
npm run develop -- --verbose
```

### Production Build with Prefix
```bash
npm run build -- --prefix-paths
```

## Package Management

### Install New Package
```bash
npm install package-name
```

### Install Dev Dependency
```bash
npm install --save-dev package-name
```

### Update Dependencies
```bash
npm update
```

### Check for Outdated Packages
```bash
npm outdated
```

### Security Audit
```bash
npm audit
npm audit fix
```

## Git Commands (if using version control)

### Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### Create New Branch
```bash
git checkout -b feature/new-feature
```

### Commit Changes
```bash
git add .
git commit -m "Your commit message"
```

### Push to Remote
```bash
git push origin main
```

## Troubleshooting Commands

### Clear Everything and Start Fresh
```bash
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run develop
```

### Check Node/npm Versions
```bash
node --version
npm --version
```

### Kill Process on Port 8000 (if stuck)
```bash
lsof -ti:8000 | xargs kill -9
```

## GraphQL Queries

Access GraphiQL at http://localhost:8000/___graphql to test queries:

### Get All Blog Posts
```graphql
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
          author
        }
        excerpt
        html
      }
    }
  }
}
```

### Get Site Metadata
```graphql
{
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}
```

## Deployment Commands

### Deploy to Netlify (using Netlify CLI)
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Vercel (using Vercel CLI)
```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
# Add "deploy": "gatsby build && gh-pages -d public" to package.json scripts
npm run deploy
```

## Environment Variables

Create `.env.development` or `.env.production` files:

```bash
# .env.development
GATSBY_API_URL=http://localhost:3000
```

Access in code:
```javascript
process.env.GATSBY_API_URL
```

## Performance Analysis

### Analyze Bundle Size
```bash
npm run build -- --profile
```

### Generate Build Report
```bash
GATSBY_TELEMETRY_DISABLED=1 npm run build
```

---

## Quick Reference Card

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm start` | Start dev server |
| `npm run build` | Build for production |
| `npm run serve` | Serve production build |
| `npm run clean` | Clear cache |

---

**Need more help?** Check [README.md](./README.md) or [QUICKSTART.md](./QUICKSTART.md)
