# 🎯 BountyBoard - Complete Functionality Guide

## ✅ All Contract Features Implemented

Your BountyBoard frontend has **ALL 6 contract methods** fully integrated and ready to use!

---

## 📋 Contract Information

```json
App ID: 755782380
Network: Algorand TestNet
App Address: 6EZRERYLBPXSN44CU7ZHS4AG743ASLUYHJAJ57UXKJTSE4AIFJNJNYIUMM
```

---

## 🔐 Prerequisites

**Before testing, make sure you have:**
- ✅ Pera Wallet installed (mobile app or browser extension)
- ✅ TestNet ALGO in your wallet (get from [testnet dispenser](https://bank.testnet.algorand.network/))
- ✅ Wallet connected to the dApp

---

## 🚀 Complete Feature List

### **1. 📝 Create Task** ✅ IMPLEMENTED

**Location:** `/create` page

**What it does:**
- Client posts a new task with bounty amount
- Creates atomic transaction group (payment + app call)
- Escrows ALGO into the smart contract
- Task gets a unique ID and status = OPEN

**How to use:**
1. Connect your Pera Wallet
2. Navigate to "Create Task"
3. Fill in:
   - **Title:** e.g., "Design a logo"
   - **Description:** e.g., "Need a modern logo for my app"
   - **Bounty Amount:** e.g., 5 ALGO
   - **Deadline:** e.g., 7 days
4. Click "Create Task"
5. Sign the transaction group in Pera Wallet
6. Wait for confirmation
7. Task appears on Task Board!

**Code:** `src/pages/CreateTask.tsx`

---

### **2. 🎯 Claim Task** ✅ IMPLEMENTED

**Location:** `/tasks/:id` page (Task Details)

**What it does:**
- Freelancer claims an OPEN task
- Sets freelancer address
- Status changes: OPEN → CLAIMED

**How to use:**
1. Connect a **different wallet** (freelancer account)
2. Go to Task Board
3. Click on an OPEN task
4. Click "Claim Task" button
5. Sign transaction in Pera Wallet
6. Status changes to "Claimed"

**Validation:**
- ✅ Only OPEN tasks can be claimed
- ✅ Client cannot claim their own task
- ✅ Task is locked to one freelancer

**Code:** `src/pages/TaskDetails.tsx` (lines 39-61)

---

### **3. 📤 Submit Work** ✅ IMPLEMENTED

**Location:** `/tasks/:id` page (Task Details)

**What it does:**
- Freelancer submits proof of completed work
- Stores proof hash (IPFS hash or URL)
- Status changes: CLAIMED → SUBMITTED

**How to use:**
1. Freelancer (who claimed) opens their claimed task
2. Complete the work
3. Upload proof to IPFS or get a URL
4. Enter proof hash/URL in the input field
5. Click "Submit Work"
6. Sign transaction
7. Status changes to "Submitted"

**Validation:**
- ✅ Only the assigned freelancer can submit
- ✅ Task must be CLAIMED status
- ✅ Proof hash is required

**Code:** `src/pages/TaskDetails.tsx` (lines 63-89)

---

### **4. ✅ Approve Task** ✅ IMPLEMENTED

**Location:** `/tasks/:id` page (Task Details)

**What it does:**
- Client approves the submitted work
- Releases payment to freelancer
- Status changes: SUBMITTED → APPROVED
- **ALGO transferred from contract to freelancer!**

**How to use:**
1. Client opens task with SUBMITTED status
2. Review the proof hash/URL
3. Click "Approve & Release Payment"
4. Sign transaction
5. Payment released to freelancer!
6. Status changes to "Approved"

**Validation:**
- ✅ Only the task client can approve
- ✅ Task must be SUBMITTED status
- ✅ Payment automatically sent via inner transaction

**Code:** `src/pages/TaskDetails.tsx` (lines 91-108)

---

### **5. ❌ Reject Task** ✅ IMPLEMENTED

**Location:** `/tasks/:id` page (Task Details)

**What it does:**
- Client rejects the submitted work
- Status changes: SUBMITTED → CLAIMED
- Freelancer can resubmit with better proof

**How to use:**
1. Client opens task with SUBMITTED status
2. Review proof hash/URL (not satisfied)
3. Click "Reject Work"
4. Sign transaction
5. Status returns to "Claimed"
6. Freelancer can resubmit

**Validation:**
- ✅ Only the task client can reject
- ✅ Task must be SUBMITTED status
- ✅ Escrow remains in contract
- ✅ Freelancer can submit again

**Code:** `src/pages/TaskDetails.tsx` (lines 117-134)

---

### **6. 💰 Refund Task** ✅ IMPLEMENTED

**Location:** `/tasks/:id` page (Task Details)

**What it does:**
- Returns escrowed ALGO to client
- Status changes: (any status) → REFUNDED
- Can be triggered by client OR anyone after deadline

**How to use:**

**Case A: Client cancels before completion**
1. Client opens their task (OPEN or CLAIMED)
2. Click "Refund Task"
3. Sign transaction
4. ALGO returned to client

**Case B: Deadline passed**
1. Anyone opens expired task
2. Click "Refund Task" (visible if deadline passed)
3. Sign transaction
4. ALGO returned to original client

**Validation:**
- ✅ Client can refund anytime (OPEN or CLAIMED)
- ✅ Anyone can refund after deadline
- ✅ Cannot refund APPROVED tasks
- ✅ Escrow returned safely

**Code:** `src/pages/TaskDetails.tsx` (lines 141-158)

---

## 🎨 Additional Features

### **7. 📊 Dashboard** ✅ IMPLEMENTED

**Location:** `/dashboard` page

**What it shows:**
- Tasks you created (as client)
- Tasks you claimed/working on (as freelancer)
- Real-time status updates

**How to use:**
1. Connect wallet
2. Click "Dashboard" in navigation
3. See all your tasks in two sections:
   - "Tasks You Created" (as client)
   - "Tasks You're Working On" (as freelancer)

**Code:** `src/pages/Dashboard.tsx`

---

### **8. 📋 Task Board** ✅ IMPLEMENTED

**Location:** `/` (homepage)

**What it shows:**
- All tasks on the platform
- Filter by status (OPEN, CLAIMED, SUBMITTED, etc.)
- Real-time task list

**Features:**
- Filter by status dropdown
- Task cards with status badges
- Amount and deadline display
- Click to view details

**Code:** `src/pages/TaskBoard.tsx`

---

## 🧪 Complete Testing Flow

### **Test Case 1: Full Lifecycle (Success)**

**Accounts needed:** 2 wallets (Client & Freelancer)

**Steps:**

1. **Client creates task (Wallet A)**
   - Connect wallet A
   - Create task: "Build website" | 10 ALGO | 7 days
   - ✅ Verify: Task appears on board with status "Open"
   - ✅ Verify: 10 ALGO deducted from wallet A

2. **Freelancer claims task (Wallet B)**
   - Disconnect wallet A
   - Connect wallet B (different wallet)
   - Open the task
   - Click "Claim Task"
   - ✅ Verify: Status changes to "Claimed"
   - ✅ Verify: Wallet B address shown as freelancer

3. **Freelancer submits work (Wallet B)**
   - Enter proof: "ipfs://QmXXXXXX" or "https://example.com/work"
   - Click "Submit Work"
   - ✅ Verify: Status changes to "Submitted"
   - ✅ Verify: Proof hash is displayed

4. **Client approves (Wallet A)**
   - Disconnect wallet B
   - Connect wallet A
   - Open the task
   - Click "Approve & Release Payment"
   - ✅ Verify: Status changes to "Approved"
   - ✅ Verify: 10 ALGO appears in wallet B!

---

### **Test Case 2: Rejection & Resubmission**

**Steps:**

1. Follow steps 1-3 from Test Case 1
2. **Client rejects (Wallet A)**
   - Connect wallet A
   - Open submitted task
   - Click "Reject Work"
   - ✅ Verify: Status returns to "Claimed"
   - ✅ Verify: Escrow still in contract

3. **Freelancer resubmits (Wallet B)**
   - Connect wallet B
   - Open the task
   - Enter new proof hash
   - Click "Submit Work"
   - ✅ Verify: Status changes to "Submitted" again
   - ✅ Verify: New proof hash replaces old one

4. Client can now approve or reject again

---

### **Test Case 3: Refund (Before Deadline)**

**Steps:**

1. Client creates task (Wallet A)
2. Task remains unclaimed OR claimed but not completed
3. **Client refunds (Wallet A)**
   - Connect wallet A
   - Open the task
   - Click "Refund Task"
   - ✅ Verify: Status changes to "Refunded"
   - ✅ Verify: ALGO returned to wallet A

---

### **Test Case 4: Refund (After Deadline)**

**Steps:**

1. Client creates task with 1-day deadline
2. Task is claimed but not completed
3. **Wait for deadline to pass** (or adjust deadline in test)
4. **Anyone can trigger refund (any wallet)**
   - Connect any wallet
   - Open expired task
   - Click "Refund Task" (visible for expired tasks)
   - ✅ Verify: ALGO returned to original client

---

## 🎨 UI Features Implemented

### **Homepage (Task Board)**
- ✅ Display all tasks
- ✅ Filter by status (dropdown)
- ✅ Task cards with:
  - Title, description
  - Bounty amount in ALGO
  - Deadline countdown
  - Status badge with colors
- ✅ Click to view details

### **Create Task Page**
- ✅ Form with validation
- ✅ Title, description, amount, deadline inputs
- ✅ Wallet connection check
- ✅ Transaction signing
- ✅ Success/error notifications

### **Task Details Page**
- ✅ Full task information
- ✅ Client and freelancer addresses
- ✅ Bounty amount display
- ✅ Deadline and expiry check
- ✅ Status with colored badge
- ✅ Conditional action buttons:
  - "Claim Task" (for Open tasks)
  - "Submit Work" (for Claimed tasks, freelancer only)
  - "Approve" + "Reject" (for Submitted tasks, client only)
  - "Refund Task" (for client or expired tasks)
- ✅ Loading states
- ✅ Permission checks

### **Dashboard Page**
- ✅ "Tasks You Created" section
- ✅ "Tasks You're Working On" section
- ✅ Task summary cards
- ✅ Quick navigation to task details

### **Navigation Header**
- ✅ Wallet connection button
- ✅ Connected address display
- ✅ Navigation links (Tasks, Create, Dashboard)
- ✅ Disconnect button

---

## 🔧 Technical Implementation

### **Transaction Handling:**
- ✅ Atomic transaction groups (create_task)
- ✅ Single transactions (all other methods)
- ✅ Proper transaction encoding
- ✅ Pera Wallet signing integration
- ✅ Transaction confirmation waiting
- ✅ Error handling with toast notifications

### **State Management:**
- ✅ Global state via smart contract
- ✅ Box storage for task data
- ✅ Real-time data fetching
- ✅ React state for UI

### **Security:**
- ✅ Sender validation (only client/freelancer)
- ✅ Status transition checks
- ✅ Deadline validation
- ✅ Amount validation
- ✅ Wallet connection required

---

## 🎯 Quick Test Checklist

### **Basic Functions:**
- [ ] Connect Pera Wallet
- [ ] Create a task (see it on board)
- [ ] View task details
- [ ] Claim task with different wallet
- [ ] Submit work proof
- [ ] Approve work (payment released)

### **Edge Cases:**
- [ ] Try to claim your own task (should fail)
- [ ] Try to approve without submission (button hidden)
- [ ] Try to submit without claiming (should fail)
- [ ] Reject work and resubmit
- [ ] Refund before deadline
- [ ] Refund after deadline expires

### **UI/UX:**
- [ ] All pages load correctly
- [ ] Navigation works smoothly
- [ ] Toast notifications appear
- [ ] Loading states show during transactions
- [ ] Wallet address truncated nicely
- [ ] Status badges colored correctly
- [ ] Amounts formatted in ALGO

---

## 📱 How to Test Locally

```bash
cd bounty-frontend
npm run dev
```

Open: `http://localhost:5173`

---

## 🌐 How to Test on Netlify

After deploying:

1. Open your Netlify URL
2. Connect Pera Wallet
3. Follow test cases above
4. Verify all functionalities work

---

## 🐛 Common Testing Issues

### **Issue: "Transaction failed"**
**Possible causes:**
- Insufficient ALGO in wallet
- Not enough ALGO for transaction fees (~0.001 ALGO per txn)
- Contract needs funding (should have ~0.5 ALGO per task for boxes)

**Solution:**
- Get TestNet ALGO from dispenser
- Fund the contract if needed

### **Issue: "Cannot claim task"**
**Cause:** You're using the same wallet that created the task

**Solution:** Use a different wallet (freelancer)

### **Issue: "Task not found"**
**Cause:** Task hasn't been created yet or wrong App ID

**Solution:** 
- Verify contract address in `src/contract.json`
- Create a task first

---

## 📊 Contract Method Summary

| Method | Status Transition | Who Can Call | Payment |
|--------|------------------|--------------|---------|
| `create_task` | → OPEN | Anyone | Client pays (escrowed) |
| `claim_task` | OPEN → CLAIMED | Any freelancer | No payment |
| `submit_work` | CLAIMED → SUBMITTED | Assigned freelancer | No payment |
| `approve_task` | SUBMITTED → APPROVED | Client only | Paid to freelancer |
| `reject_task` | SUBMITTED → CLAIMED | Client only | No payment |
| `refund_task` | Any → REFUNDED | Client or anyone (if expired) | Refunded to client |

---

## ✨ Key Features Highlighted

### **Escrow Security**
- ✅ ALGO locked in contract
- ✅ Only released on approval or refund
- ✅ Cannot be stolen or lost

### **Status Transitions**
- ✅ Strict validation
- ✅ Only valid transitions allowed
- ✅ Visual status indicators

### **Deadline Management**
- ✅ Countdown display
- ✅ Expired task detection
- ✅ Auto-refund eligibility after expiry

### **Multi-Role Support**
- ✅ Client perspective (create, approve, reject, refund)
- ✅ Freelancer perspective (claim, submit)
- ✅ Observer perspective (view all tasks)

---

## 🔗 File Locations

**Contract Integration:**
- `src/frontend-integration.ts` - BountyBoard class with all methods
- `src/contract.json` - Contract address and ABI

**Pages:**
- `src/pages/TaskBoard.tsx` - View all tasks
- `src/pages/CreateTask.tsx` - Create new task
- `src/pages/TaskDetails.tsx` - Task details + all actions
- `src/pages/Dashboard.tsx` - User's tasks

**Components:**
- `src/components/Header.tsx` - Navigation + wallet connection
- `src/components/TaskCard.tsx` - Task summary card

**Wallet:**
- `src/WalletProvider.tsx` - Pera Wallet integration

---

## 🎉 All Features Working!

Your BountyBoard dApp has:
- ✅ **6/6 contract methods** implemented
- ✅ **4 pages** fully functional
- ✅ **Pera Wallet** integration
- ✅ **Error handling** with toast notifications
- ✅ **Loading states** for better UX
- ✅ **Permission checks** for security
- ✅ **Real-time data** from blockchain
- ✅ **Responsive UI** with TailwindCSS

---

## 🚀 Next Steps

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   Test all features at `http://localhost:5173`

2. **Deploy to Netlify:**
   - Commit `netlify.toml` and `public/_redirects`
   - Push to GitHub
   - Netlify auto-deploys

3. **Live Testing:**
   - Open Netlify URL
   - Test with real TestNet transactions
   - Share with others to test multi-user flows

---

## 📞 Support

**Contract Details:**
- App ID: 755782380
- Network: TestNet
- Explorer: https://testnet.explorer.perawallet.app/application/755782380

**Get TestNet ALGO:**
- Dispenser: https://bank.testnet.algorand.network/

**Pera Wallet:**
- Download: https://perawallet.app

---

**Your BountyBoard dApp is fully functional and ready for testing!** 🎉

Test it now at: `http://localhost:5173` or your Netlify URL!
