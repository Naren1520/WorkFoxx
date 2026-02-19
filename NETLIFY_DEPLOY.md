# 🚀 Netlify Deployment Guide - BountyBoard

## ✅ ISSUE FIXED!

The **404 "Page not found"** error has been resolved by adding:
1. ✅ `netlify.toml` - Netlify configuration
2. ✅ `public/_redirects` - SPA routing fix

---

## 🔧 What Was Fixed

### **Problem:**
Netlify couldn't find `index.html` when navigating to routes like `/tasks`, `/dashboard`, etc.

### **Solution:**
Created two files that tell Netlify to always serve `index.html` for all routes:

**`netlify.toml`** (root folder):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**`public/_redirects`** (public folder):
```
/*    /index.html   200
```

This ensures React Router handles all routing on the client side.

---

## 📋 Netlify Settings

### **Verify Your Netlify Settings:**

Go to your Netlify site → **Site settings** → **Build & deploy**

**Build settings should be:**
```
Base directory:   (leave empty)
Build command:    npm run build
Publish directory: dist
```

**Deploy settings:**
```
Production branch: main
Node version: 18.x (or higher)
```

---

## 🚀 How to Redeploy

### **Option 1: Push New Commit (Recommended)**

1. **Commit the new files:**
```bash
# Stage new files
git add netlify.toml
git add public/_redirects

# Commit
git commit -m "Fix: Add Netlify SPA routing configuration"

# Push to GitHub
git push
```

2. **Netlify will auto-deploy** (if connected to GitHub)

---

### **Option 2: Manual Redeploy on Netlify**

1. Go to your Netlify dashboard
2. Click on your site
3. Go to **Deploys** tab
4. Click **Trigger deploy** → **Clear cache and deploy site**
5. Wait 2-3 minutes

---

### **Option 3: Drag & Drop (Fresh Deploy)**

1. Make sure you have the latest files committed
2. Run local build:
```bash
npm run build
```
3. Go to Netlify dashboard
4. Drag and drop the `dist` folder
5. Done!

---

## ✅ Verification Checklist

After redeploying, verify:

- [ ] Homepage loads: `https://yoursite.netlify.app/`
- [ ] Direct route works: `https://yoursite.netlify.app/tasks`
- [ ] Refresh works: Go to `/dashboard` and hit F5
- [ ] Connect Pera Wallet works
- [ ] Navigation between pages works
- [ ] No 404 errors

---

## 🎯 Files to Commit to GitHub

Make sure you commit these **NEW** files:

```
✅ netlify.toml              (Root folder - NEW!)
✅ public/_redirects         (Public folder - NEW!)
```

Plus all your existing files:
```
✅ src/                      (All source code)
✅ package.json
✅ vite.config.ts
✅ (all other config files)
```

**DO NOT commit:**
```
❌ node_modules/
❌ dist/
```

---

## 🆘 Troubleshooting

### **Still getting 404?**

**Check 1: Netlify Build Log**
1. Go to Netlify dashboard
2. Click **Deploys**
3. Click latest deploy
4. Check if build succeeded
5. Look for errors

**Check 2: Publish Directory**
- Should be `dist` (not `build`, not `public`)
- Go to **Site settings** → **Build & deploy** → verify

**Check 3: Build Command**
- Should be `npm run build`
- Check in **Site settings** → **Build & deploy**

**Check 4: Files Deployed**
1. Click on latest deploy
2. Check "Deploy summary"
3. Verify `index.html` is in the published files

---

### **Build Fails on Netlify?**

**Common fixes:**

1. **Clear Netlify cache:**
   - Go to **Site settings** → **Build & deploy**
   - Click **Clear cache and retry deploy**

2. **Check Node version:**
   - Add to `netlify.toml`:
   ```toml
   [build.environment]
     NODE_VERSION = "18"
   ```

3. **Check dependencies:**
   - Make sure `package-lock.json` is committed
   - Netlify runs `npm install` automatically

---

## 📊 Expected Build Output

Successful Netlify build should show:

```
1. Installing dependencies
   ✓ npm install
   
2. Building site
   ✓ npm run build
   
3. Build succeeded
   ✓ 646 modules transformed
   ✓ dist/index.html created
   
4. Deploying
   ✓ Site is live!
```

**Build time:** 2-3 minutes  
**Site URL:** `https://your-site-name.netlify.app`

---

## 🎉 Summary

**What you did:**
1. ✅ Added `netlify.toml` configuration
2. ✅ Added `public/_redirects` for SPA routing
3. ✅ Committed changes to GitHub
4. ✅ Netlify auto-deployed (or manual redeploy)

**Result:**
- ✅ No more 404 errors!
- ✅ Direct routes work (`/tasks`, `/dashboard`)
- ✅ Page refresh works on any route
- ✅ React Router handles all navigation

---

## 🔗 Useful Links

- **Netlify Dashboard:** [app.netlify.com](https://app.netlify.com)
- **Netlify SPA Docs:** [docs.netlify.com/routing/redirects](https://docs.netlify.com/routing/redirects)
- **Build Settings:** Your site → Site settings → Build & deploy

---

**Your BountyBoard dApp should now be fully functional on Netlify!** 🚀

If you still have issues, check the build logs in Netlify dashboard.
