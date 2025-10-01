# 🚀 Deployment Guide - PSP Diagnostic Tool

This guide provides detailed instructions for deploying the PSP Diagnostic Tool to various platforms.

## Quick Start - GitHub Pages (Recommended)

The easiest way to deploy this application is using GitHub Pages with GitHub Actions (already configured).

### Steps:

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages** (in the left sidebar)
   - Under **Source**, select **GitHub Actions**
   - Save

2. **Trigger Deployment:**
   - The deployment happens automatically when you push to the `main` branch
   - Or manually trigger it: Go to **Actions** tab → Select "Deploy to GitHub Pages" workflow → Click "Run workflow"

3. **Access Your Site:**
   - After deployment completes (usually 2-3 minutes), your site will be available at:
   - `https://daniloap.github.io/algoritmo_psp/`

### How it Works:

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
- ✅ Installs dependencies
- ✅ Builds the production bundle
- ✅ Deploys to GitHub Pages
- ✅ Updates on every push to main

---

## Alternative Deployment Options

### 1. Vercel (Free Tier Available)

Vercel offers excellent performance and automatic deployments from Git.

**Quick Deploy:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login (first time only)
vercel login

# Deploy
vercel
```

**Or use Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Vite and configure everything
4. Click Deploy!

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### 2. Netlify (Free Tier Available)

Netlify is another great option with drag-and-drop deployment.

**Option A - CLI Deploy:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login (first time only)
netlify login

# Deploy
netlify deploy --prod
```

**Option B - Drag & Drop:**
1. Build locally: `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to the page
4. Done!

**Option C - Git Integration:**
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

---

### 3. Firebase Hosting (Free Tier Available)

Firebase provides fast global CDN hosting.

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize Firebase in your project
firebase init hosting

# Build your app
npm run build

# Deploy
firebase deploy --only hosting
```

**Configuration Options:**
- Public directory: `dist`
- Single-page app: `Yes`
- Set up automatic builds: `No`

---

### 4. Cloudflare Pages (Free)

Fast and reliable hosting with edge network.

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select "Pages" → "Create a project"
3. Connect your GitHub repository
4. Configure:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy!

---

### 5. AWS Amplify (Free Tier Available)

Enterprise-grade hosting on AWS infrastructure.

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "Get Started" under "Amplify Hosting"
3. Connect your GitHub repository
4. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Save and deploy!

---

### 6. Render (Free Tier Available)

Simple static site hosting.

1. Go to [render.com](https://render.com)
2. Create new "Static Site"
3. Connect your GitHub repository
4. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Deploy!

---

### 7. Static File Hosting (Any Server)

If you have your own web server or hosting:

```bash
# Build the project
npm run build

# Upload the contents of the 'dist' folder to your web server
# Example using scp:
scp -r dist/* user@yourserver.com:/var/www/html/

# Or using FTP/SFTP client like FileZilla
```

**Important:** If deploying to a subdirectory, update `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-subdirectory/', // Change this
})
```

---

## Local Development

### Running Locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173/algoritmo_psp/
```

### Building for Production:

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

---

## Troubleshooting

### Issue: Blank Page After Deployment

**Solution:** Check the `base` path in `vite.config.js`. It should match your deployment URL structure.

For root domain: `base: '/'`
For subdirectory: `base: '/algoritmo_psp/'`

### Issue: 404 on Page Refresh

**Solution:** Configure your hosting for Single Page Application (SPA):

**Netlify:** Add `_redirects` file in `public/` folder:
```
/*    /index.html   200
```

**Vercel:** Add `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Issue: Build Fails on Deployment

**Solution:** Ensure Node.js version is 16+ in your deployment settings.

---

## Performance Optimization

The build is already optimized with:
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Asset optimization
- ✅ Minification
- ✅ Gzip compression

For further optimization:
- Use a CDN (most hosting providers include this)
- Enable caching headers
- Use HTTP/2 or HTTP/3

---

## Monitoring and Analytics

To add analytics (optional):

1. **Google Analytics:**
   - Add script to `index.html`
   
2. **Vercel Analytics:**
   - Automatically available if deployed on Vercel

3. **Netlify Analytics:**
   - Enable in Netlify dashboard

---

## Security

The application:
- ✅ Runs entirely client-side
- ✅ No sensitive data transmission
- ✅ No authentication required
- ✅ No database connections
- ✅ Uses HTTPS (required by all modern hosting providers)

---

## Support

For deployment issues:
1. Check the deployment logs in your hosting provider's dashboard
2. Verify `npm run build` works locally
3. Check browser console for errors
4. Open an issue on GitHub

---

## Summary

**Fastest Options:**
- 🥇 GitHub Pages (already configured, zero setup)
- 🥈 Vercel (one command: `vercel`)
- 🥉 Netlify (drag & drop `dist` folder)

**Best for Production:**
- AWS Amplify (enterprise features)
- Cloudflare Pages (global edge network)
- Vercel/Netlify (excellent DX and performance)

Choose based on your needs! GitHub Pages is perfect for getting started quickly.
