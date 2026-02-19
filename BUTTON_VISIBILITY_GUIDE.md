# 🎯 Button Visibility & Testing Guide

## 🔍 Why You Might Not See Buttons

### **1. Loading Screen (5 seconds → NOW 1 second) ✅ FIXED**
- **Before:** App showed loading screen for 5 seconds
- **Now:** Loading screen only 1 second
- **Solution:** Wait 1 second after page loads

### **2. Wallet Not Connected**
- **Symptom:** "Connect your wallet" message instead of buttons
- **Solution:** Click "Connect Pera Wallet" in header first!

### **3. Wrong Page**
- **Symptom:** No action buttons visible
- **Check:** Are you on the right page?

### **4. Wrong Wallet Connected**
- **Symptom:** Buttons hidden or grayed out
- **Reason:** Permission checks (only client or freelancer sees specific buttons)

---

## 📋 Where to Find Each Button

### **Homepage** (`http://localhost:5174/`)

**What you should see:**

```
┌─────────────────────────────────────────┐
│  BountyBoard    [Connect Pera Wallet]  │  ← Header
├─────────────────────────────────────────┤
│                                          │
│  📋 Task Board                          │
│                                          │
│  [Filter: All ▼]                        │  ← Dropdown filter
│                                          │
│  ┌─────────────────────────────┐       │
│  │ Task Title                  │       │  ← Task cards
│  │ Description...              │       │
│  │ 💰 5 ALGO  📅 in 7 days    │       │
│  │ Status: Open               │       │
│  └─────────────────────────────┘       │
│                                          │
└─────────────────────────────────────────┘
```

**Buttons visible:**
- ✅ "Connect Pera Wallet" (if not connected)
- ✅ Filter dropdown
- ✅ Task cards (clickable)

**No action buttons here** - This is just a list page!

---

### **Create Task Page** (`/create`)

**Click:** "Create Task" in navigation

**What you should see:**

```
┌─────────────────────────────────────────┐
│  📝 Create New Task                     │
│                                          │
│  Task Title *                           │
│  [___________________________]          │  ← Input field
│                                          │
│  Description *                          │
│  [___________________________]          │  ← Textarea
│  [___________________________]          │
│                                          │
│  Reward Amount (ALGO) *  | Days *      │
│  [__________]            [______]       │  ← Input fields
│                                          │
│  Summary:                               │
│  Task Reward: 5 ALGO                    │
│  Total Cost: ~5.022 ALGO                │
│                                          │
│  [Cancel]         [Create Task]         │  ← BUTTONS HERE!
└─────────────────────────────────────────┘
```

**Buttons visible:**
- ✅ **"Cancel"** button (left, gray)
- ✅ **"Create Task"** button (right, purple)

**If you don't see buttons:**
- ❌ Check if wallet is connected (required!)
- ❌ Scroll down - buttons are at the bottom of form

---

### **Task Details Page** (`/tasks/1`)

**Click:** Any task card from homepage

**What you should see:**

```
┌─────────────────────────────────────────┐
│  Task #1: Build Website                 │
│                                          │
│  Client: Y4ZV6X...WNVNI                 │
│  Freelancer: Not claimed yet            │
│  Amount: 💰 5.00 ALGO                   │
│  Deadline: Feb 26, 2026                 │
│  Status: [Open]  ← Green badge         │
│                                          │
│  Description:                           │
│  Need a modern landing page...         │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ Actions                         │   │
│  │                                 │   │
│  │  [Claim This Task]              │   │  ← BUTTON HERE!
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Buttons change based on:**

**A. Task Status = OPEN (Unclaimed)**
- ✅ **"Claim This Task"** button (if you're NOT the client)
- ✅ **"Refund Task"** button (if you ARE the client)

**B. Task Status = CLAIMED**
- ✅ **"Submit Work"** button (if you're the freelancer)
- ✅ **"Refund Task"** button (if you're the client)

**C. Task Status = SUBMITTED**
- ✅ **"Approve & Release Payment"** button (if you're the client)
- ✅ **"Reject Work"** button (if you're the client)

**D. Task Status = APPROVED**
- ✅ Text: "Task completed" (no buttons needed)

**E. Task Status = REFUNDED**
- ✅ Text: "Task refunded" (no buttons needed)

---

### **Dashboard Page** (`/dashboard`)

**Click:** "Dashboard" in navigation

**What you should see:**

```
┌─────────────────────────────────────────┐
│  📊 My Dashboard                        │
│                                          │
│  Tasks You Created                      │
│  ┌─────────────────────────────────┐   │
│  │ Task #1: Build Website          │   │  ← Task summary
│  │ 💰 5 ALGO  Status: Open         │   │
│  └─────────────────────────────────┘   │
│                                          │
│  Tasks You're Working On                │
│  ┌─────────────────────────────────┐   │
│  │ Task #2: Logo Design            │   │  ← Task summary
│  │ 💰 3 ALGO  Status: Claimed      │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Buttons visible:**
- ✅ Task cards (clickable - navigate to details)

**No action buttons here** - Click cards to see action buttons!

---

## 🧪 Step-by-Step Testing (To See All Buttons)

### **Test 1: Homepage Buttons**

1. Open: `http://localhost:5174/`
2. **Wait 1 second** (loading screen)
3. You should see:
   - ✅ "Connect Pera Wallet" button (top right)
   - ✅ Navigation links: "Tasks", "Create Task"
   - ✅ Task cards (if any tasks exist)

**If you see a blank page:**
- Check browser console (F12) for errors
- Make sure dev server is running

---

### **Test 2: Create Task Buttons**

1. Click **"Connect Pera Wallet"**
2. Connect your wallet (scan QR code or use extension)
3. You should now see: `Y4ZV6X...WNVNI` (your address)
4. Click **"Create Task"** in navigation
5. **Scroll down** after filling the form
6. You should see:
   - ✅ **"Cancel"** button (gray, left)
   - ✅ **"Create Task"** button (purple, right)

**If you don't see buttons:**
- Check if wallet is connected (address in header?)
- Scroll to bottom of form
- Check browser console for errors

---

### **Test 3: Task Action Buttons**

**Prerequisites:** You need to create a task first!

1. Create a task (Test 2 above)
2. Wait for confirmation
3. Go to homepage (`/`)
4. Click on your created task
5. You should see:
   - ✅ Task details (title, amount, deadline)
   - ✅ **"Refund Task"** button (since you're the client)

**With a different wallet:**
1. Disconnect current wallet
2. Connect a different Pera Wallet
3. Click the same task
4. You should see:
   - ✅ **"Claim This Task"** button (since you're NOT the client)

---

## 🎨 Button Styling Guide

### **How Buttons Should Look:**

**Primary Button (Purple):**
```
[Create Task] ← Purple background, white text
```

**Secondary Button (Gray):**
```
[Cancel] ← Gray background, dark text
```

**Success Button (Green):**
```
[Approve & Release Payment] ← Green background, white text
```

**Danger Button (Red):**
```
[Reject Work] ← Red background, white text
```

---

## 🐛 Troubleshooting "No Buttons Visible"

### **Issue 1: Stuck on Loading Screen**

**Symptom:** Blue/purple gradient screen forever

**Solution:**
```javascript
// Already fixed! Loading time reduced to 1 second
```

Refresh the page: Ctrl+R

---

### **Issue 2: Blank White Screen**

**Possible causes:**
1. JavaScript error in console
2. Wallet provider error
3. Contract.json missing

**Solution:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Check for errors (red text)
4. Share error message if any

---

### **Issue 3: Buttons Exist But Hidden**

**Check 1: Scroll down**
- Some buttons are at the bottom of forms/pages
- Make sure to scroll!

**Check 2: Wallet connected?**
- Many features require wallet connection
- Connect wallet first!

**Check 3: Right page?**
- Action buttons are only on Task Details page
- Not on homepage (just task cards there)

**Check 4: Right role?**
- "Claim" button: Only for non-clients
- "Approve/Reject": Only for clients
- "Submit Work": Only for assigned freelancer

---

### **Issue 4: CSS Not Loading**

**Symptom:** Plain text, no styling

**Check:**
1. Open http://localhost:5174/
2. Press F12 (DevTools)
3. Go to Network tab
4. Reload page
5. Check if `index.css` loaded (status 200)

**If CSS fails to load:**
```bash
# Restart dev server
npm run dev
```

---

## ✅ Expected Button Locations Summary

| Page | Buttons | When Visible |
|------|---------|--------------|
| `/` (Homepage) | Task cards (clickable) | Always |
| `/create` | "Cancel", "Create Task" | When wallet connected |
| `/tasks/:id` | "Claim Task" | If task=OPEN, you're not client |
| `/tasks/:id` | "Submit Work" | If task=CLAIMED, you're freelancer |
| `/tasks/:id` | "Approve", "Reject" | If task=SUBMITTED, you're client |
| `/tasks/:id` | "Refund Task" | If you're client OR deadline passed |
| `/dashboard` | Task cards (clickable) | When wallet connected |
| Header | "Connect Pera Wallet" | When not connected |
| Header | "Disconnect" | When connected |

---

## 🚀 Quick Test Right NOW

**Open your browser:**

1. Go to: **http://localhost:5174/**
2. **Wait 1 second** (loading screen)
3. Click **"Connect Pera Wallet"** (top right)
4. After connecting, click **"Create Task"**
5. You should see the form with **2 buttons at bottom**

**If you still don't see buttons:**
- Press F12 (DevTools)
- Go to Console tab
- Take a screenshot of any errors
- Share with me!

---

## 🎯 Final Checklist

- [ ] Dev server running: http://localhost:5174/
- [ ] Page loads after 1 second
- [ ] "Connect Pera Wallet" button visible
- [ ] After connecting: Address shows in header
- [ ] "Create Task" link in navigation works
- [ ] Create Task form has "Cancel" and "Create Task" buttons
- [ ] Buttons are styled (purple, gray colors)

**If ALL checklist items pass → ✅ Everything working!**

**If ANY item fails → Share what you see, I'll fix it!**

---

## 📱 Screenshots of What You Should See

### **1. Initial Load:**
```
Loading screen (1 second) → Homepage with task list
```

### **2. After Connecting Wallet:**
```
Header: "Y4ZV6X...WNVNI" [Disconnect]
Navigation: Tasks | Create Task | Dashboard
```

### **3. Create Task Page:**
```
Form with inputs
↓
[Cancel]    [Create Task]  ← These 2 buttons!
```

### **4. Task Details Page:**
```
Task info
↓
Actions section
↓
[Action Button]  ← Based on status and role
```

---

**Your app is running at: http://localhost:5174/**

**Open it NOW and you WILL see buttons!** 🎉

If not, check browser console (F12) and share the error!
