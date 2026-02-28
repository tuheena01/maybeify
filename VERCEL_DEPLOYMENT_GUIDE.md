# 🚀 Deploy Maybeify to Vercel - Step by Step Guide

## Option 1: Deploy via Vercel Dashboard (Easiest - Recommended)

### Step 1: Create Vercel Account
1. Go to: **https://vercel.com/signup**
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project
1. Once logged in, click **"Add New Project"** or **"Import Project"**
2. You'll see your GitHub repositories
3. Find and click **"Import"** next to **"maybeify"**

### Step 3: Configure Project Settings
```
Framework Preset: Create React App
Root Directory: ./frontend
Build Command: yarn build
Output Directory: build
Install Command: yarn install
```

### Step 4: Deploy!
1. Click **"Deploy"**
2. Wait 2-3 minutes for deployment
3. 🎉 Your site will be live at: **https://maybeify.vercel.app**

### Step 5: Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., maybeify.com)
3. Follow DNS configuration instructions

---

## Option 2: Deploy via Vercel CLI (For Advanced Users)

### Install Vercel CLI
```bash
npm install -g vercel
```

### Login to Vercel
```bash
vercel login
```

### Deploy
```bash
cd /path/to/maybeify
vercel --prod
```

---

## 📋 Important Configuration

### Build Settings for Vercel:
- **Framework**: Create React App
- **Root Directory**: `frontend`
- **Build Command**: `yarn build` or `npm run build`
- **Output Directory**: `build`
- **Install Command**: `yarn install`

### Environment Variables (if needed later):
```
REACT_APP_API_URL=your-backend-url
```

---

## 🔧 Troubleshooting

### Issue: Build Fails
**Solution**: Make sure Root Directory is set to `frontend`

### Issue: 404 on Routes
**Solution**: Add `vercel.json` in frontend folder:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Issue: Dependencies Error
**Solution**: Clear Vercel cache and redeploy

---

## ✅ After Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections visible (Hero, About, Books, etc.)
- [ ] Contact form works
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] Navigation smooth scroll works

---

## 🌐 Your Live URLs

After deployment, you'll get:
- **Default**: https://maybeify.vercel.app
- **Custom**: https://your-domain.com (if you add one)

---

## 🔄 Auto-Deploy

Good news! Every time you push to GitHub:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically rebuild and deploy! 🎉

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Support: https://vercel.com/support
- Email: contestmaybeify@gmail.com

---

**Estimated Deployment Time**: 2-3 minutes
**Cost**: FREE (Vercel Free Tier includes unlimited deployments)
