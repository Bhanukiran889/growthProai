# 🚀 GrowthProAI – Local Business Dashboard with AI Headlines

**GrowthProAI** is a full-stack web application where users can enter a **business name and location**, and receive an **AI-generated SEO headline** along with simulated ratings and reviews.

> Built with **React + Express**, styled using **Tailwind CSS**, animated via **GSAP**, and deployed via **Vercel** and **Render**.

🔗 **Live App:** [https://growth-proai.vercel.app](https://growth-proai.vercel.app)  
🌐 **Backend API:** [https://growthproai-y1lm.onrender.com](https://growthproai-y1lm.onrender.com)

---

## 🌟 Features

- 📝 Business name & location form
- 🎯 GSAP animations for form and results
- 🌗 Dark/light mode with localStorage sync
- 🤖 AI-style SEO headline generation
- 🔁 Regenerate SEO headline functionality
- 📊 Simulated ratings and reviews
- 🌀 Custom animated loader
- 🌐 Backend with CORS support
- ☁️ Deployed on Vercel + Render

---

## 🧰 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- GSAP
- Vercel (Deployment)

### Backend
- Node.js + Express
- dotenv
- cors
- Render (Deployment)

---

## 📦 Required Packages

### Frontend

```bash
npm install
npm install gsap
```

### Backend

```bash
npm install express cors dotenv
```

---

## ⚙️ Setup Guide

```bash
# 1. Clone the repo
git clone https://github.com/Bhanukiran889/growthProAI.git
cd growthProAI
```

```bash
# 2. Backend setup
cd backend
# Create a .env file:
# .env
PORT=5000
FRONTEND_ORIGIN=https://growth-proai.vercel.app

npm install
node index.js
```

```bash
# 3. Frontend setup
cd ../frontend
# Create a .env file:
# .env
VITE_API_URL=https://growthproai-y1lm.onrender.com

npm install
npm run dev
```

---

## 🔁 API Endpoints

### ➤ POST `/business-data`

Generates rating, reviews, and a headline.

**Request:**

```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

**Response:**

```json
{
  "rating": "4.5",
  "reviews": 136,
  "headline": "Top-rated Cake & Co in Mumbai – Loved by Locals!"
}
```

---

### ➤ GET `/regenerate-headline`

Regenerates a new headline for a business.

**Example:**

```
GET /regenerate-headline?name=Cake%20%26%20Co&location=Mumbai
```

**Response:**

```json
{
  "headline": "Why Everyone’s Talking About Cake & Co in Mumbai"
}
```

---

## 🚀 Deployment Guide

### Backend on Render

1. Go to [https://render.com](https://render.com)
2. Create a new **Web Service**
3. Set root directory: `backend`
4. Add environment variable:

```env
FRONTEND_ORIGIN=https://growth-proai.vercel.app
```

5. Build command:

```bash
npm install
```

6. Start command:

```bash
node index.js
```

---

### Frontend on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Import the GitHub repo
3. Set root directory: `frontend`
4. Add environment variable:

```env
VITE_API_URL=https://growthproai-y1lm.onrender.com
```

5. Framework preset: **React (Vite)**
6. Click **Deploy**

---

## 🐞 Common Issues

- **CORS error:**  
  Ensure `FRONTEND_ORIGIN` in backend `.env` matches your deployed Vercel URL exactly (no trailing slashes).

- **Loader showing but no data:**  
  Backend may be sleeping (Render free tier) or `VITE_API_URL` is wrong.

- **`.env` not working on deploy:**  
  In **Vercel** and **Render**, you must add environment variables manually in the dashboard — `.env` files aren't read during deploy.

---

## 🙋 Author

Made with 💙 by **Bhanukiran Reddy**  
📬 [LinkedIn – Bhanukiran](https://www.linkedin.com/in/bhanukiran-reddy889/)

