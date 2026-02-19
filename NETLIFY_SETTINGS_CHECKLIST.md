# ⚙️ Netlify Settings Checklist

## 📋 Verify These Settings in Netlify Dashboard

### **1. Build Settings**

Go to: **Site settings** → **Build & deploy** → **Continuous Deployment**

```
✅ Build command:         npm run build
✅ Publish directory:     dist
✅ Base directory:        (leave empty or /)
```

### **2. Deploy Settings**

```
✅ Production branch:     main (or master)
✅ Branch deploys:        Enabled
✅ Deploy previews:       Enabled (optional)
```

### **3. Environment Variables**

**No environment variables needed!** ✅

(All configuration is in your code and `contract.json`)

### **4. Build Image**

```
✅ Node version:          18.x or higher (auto-detected)
```

To manually set (optional):
- Go to **Site settings** → **Build & deploy** → **Environment**
- Add variable: `NODE_VERSION` = `18`

---

## 🔍 How to Check Your Current Settings

### **Step 1: Go to Netlify Dashboard**
1. Open [app.netlify.com](https://app.netlify.com)
2. Click on your site
3. Click **Site settings** (top right)

### **Step 2: Check Build Settings**
1. Click **Build & deploy** (left sidebar)
2. Scroll to **Build settings** section
3. Verify:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### **Step 3: Check Recent Deploy**
1. Click **Deploys** (top navigation)
2. Click latest deploy
3. Check **Deploy log** for errors

---

## 🚨 Common Misconfigurations

### ❌ **Wrong Publish Directory**

**Problem:**
```
Publish directory: build   ❌ (This is for Create React App)
Publish directory: public  ❌ (Wrong for Vite)
```

**Fix:**
```
Publish directory: dist    ✅ (Correct for Vite)
```

### ❌ **Wrong Build Command**

**Problem:**
```
Build command: npm start   ❌
Build command: vite        ❌
```

**Fix:**
```
Build command: npm run build   ✅
```

### ❌ **Missing _redirects File**

**Problem:**
- 404 on direct URLs
- Refresh breaks on `/tasks`, `/dashboard`

**Fix:**
- Commit `public/_redirects` file ✅
- It will be copied to `dist/` during build

---

## 🎯 How to Update Settings

### **If Your Settings are Wrong:**

**Option 1: Update in Netlify UI**
1. Go to **Site settings** → **Build & deploy**
2. Click **Edit settings**
3. Update:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Save**
5. Click **Trigger deploy** → **Clear cache and deploy site**

**Option 2: Use netlify.toml (Recommended)**
- The `netlify.toml` file in your repo overrides UI settings
- Just commit the file and Netlify will use it
- ✅ Already created for you!

---

## ✅ Correct Configuration Summary

Your repo should have:

```
bounty-frontend/
├── netlify.toml              ✅ (Root - NEW!)
│   [build]
│     command = "npm run build"
│     publish = "dist"
│
├── public/
│   └── _redirects            ✅ (Public - NEW!)
│       /*    /index.html   200
│
├── src/                      ✅ (Your code)
├── package.json              ✅ (Dependencies)
├── vite.config.ts            ✅ (Build config)
└── ... (other files)
```

---

## 🔄 Deploy Process

**When you push to GitHub:**

```
1. Netlify detects commit
   ↓
2. Runs: npm install
   ↓
3. Runs: npm run build
   ↓
4. Publishes: dist/ folder
   ↓
5. Applies: _redirects rules
   ↓
6. ✅ Site is live!
```

**Build time:** 2-3 minutes

---

## 🐛 Troubleshooting

### **Build Fails?**

1. **Check build log:**
   - Netlify dashboard → Deploys → Click failed deploy
   - Read error message

2. **Common errors:**
   - `npm ERR!` → Missing dependencies
   - `TypeScript errors` → Already fixed! ✅
   - `EPERM` → Clear Netlify cache

3. **Fix:**
   ```
   Site settings → Build & deploy
   → Clear cache and retry deploy
   ```

### **Still Getting 404?**

1. **Verify files were committed:**
   ```bash
   git status
   # Should show:
   # netlify.toml
   # public/_redirects
   ```

2. **Check deployed files:**
   - Netlify → Deploys → Latest deploy
   - Click "Functions and deploy details"
   - Verify `_redirects` is in the published files

3. **Hard refresh browser:**
   - Press: Ctrl + Shift + R (Windows)
   - Press: Cmd + Shift + R (Mac)

---

## ✨ Success Indicators

After correct deployment, you should see:

✅ **Build log shows:**
```
✓ 646 modules transformed
✓ dist/index.html created
✓ Site is live
```

✅ **Site works:**
```
✓ https://yoursite.netlify.app/          → Homepage loads
✓ https://yoursite.netlify.app/tasks     → Tasks page loads
✓ https://yoursite.netlify.app/dashboard → Dashboard loads
✓ F5 refresh on any page                 → No 404!
```

✅ **Deploy status:**
```
✓ Published
✓ No errors
✓ Build time: ~3 minutes
```

---

## 📞 Need Help?

1. **Check build logs** in Netlify dashboard
2. **See detailed guide:** `NETLIFY_DEPLOY.md`
3. **Quick fix guide:** `404_FIX.txt`

---

**Your site is correctly configured if:**
- ✅ `netlify.toml` is committed
- ✅ `public/_redirects` is committed  
- ✅ Build settings are correct
- ✅ No 404 errors on any page

**Deploy and test!** 🚀
