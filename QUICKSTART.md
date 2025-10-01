# ⚡ Quick Start - Deploy in 3 Steps

## 🎯 Goal
Get your PSP Diagnostic Tool live on the internet in under 5 minutes!

---

## 📋 Prerequisites
- ✅ GitHub account
- ✅ This repository pushed to GitHub

---

## 🚀 Deploy to GitHub Pages (Easiest!)

### Step 1: Enable GitHub Pages
1. Go to your repository: `https://github.com/daniloap/algoritmo_psp`
2. Click **Settings** (top navigation)
3. Scroll down and click **Pages** (left sidebar)

### Step 2: Configure Source
1. Under **"Build and deployment"**
2. Set **Source** to: **GitHub Actions**
3. That's it! No need to click Save - it's automatic

### Step 3: Deploy
The deployment will start automatically on your next push to the `main` branch.

**Or trigger manually:**
1. Go to **Actions** tab in your repository
2. Click **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** → **"Run workflow"** (green button)

### Step 4: Access Your Site
After 2-3 minutes, visit:
```
https://daniloap.github.io/algoritmo_psp/
```

---

## 🏃‍♂️ Alternative: Deploy Right Now (Vercel)

If you want to deploy immediately to a custom domain:

```bash
# Install Vercel CLI (one time only)
npm i -g vercel

# Deploy (run in project directory)
cd /path/to/algoritmo_psp
vercel
```

Follow the prompts - it takes 30 seconds!

---

## 💻 Running Locally

Want to test before deploying?

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open browser at: http://localhost:5173/algoritmo_psp/
```

---

## 🎉 That's It!

Your PSP Diagnostic Tool is now:
- ✅ Live on the internet
- ✅ Accessible from any device
- ✅ Automatically updates when you push changes
- ✅ Free to host forever

---

## 📚 Need More Options?

See `DEPLOYMENT.md` for:
- Netlify deployment
- Firebase hosting
- Custom domain setup
- AWS Amplify
- And more!

---

## 🆘 Troubleshooting

**Site not loading?**
- Check if Actions workflow completed (green checkmark in Actions tab)
- Verify GitHub Pages is enabled in Settings → Pages
- Wait 2-3 minutes after first deployment

**Need help?**
- Check the deployment logs in Actions tab
- See full documentation in `README.md` and `DEPLOYMENT.md`

---

## 🌟 Features

Your deployed tool includes:
- 📊 Step-by-step PSP diagnostic workflow
- 🧠 MDS 2017 criteria-based evaluation
- 📝 Automatic report generation
- 🖨️ Print/export functionality
- 📱 Mobile responsive design
- 🎨 Professional medical interface

**No backend required** - it's a pure client-side application!
