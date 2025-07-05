# 🚀 GrowthProAI – Local Business Dashboard with AI Headlines

**GrowthProAI** is a full-stack web application that allows users to enter a **business name and location**, and receive **AI-generated SEO headlines** along with simulated review data.

> Built with **React + Express**, deployed using **Vercel** and **Render**, and includes animations, dark mode, CORS support, and a custom loader.

**🔗 Live App:** [https://growth-proai.vercel.app](https://growth-proai.vercel.app)  
**🌐 Backend API:** [https://growthproai-y1lm.onrender.com](https://growthproai-y1lm.onrender.com)

---

## 🌟 Features

- ✅ Business form input
- ⚡️ GSAP animation for form and card
- 🌙 Dark/light mode with toggle and local storage
- 💬 SEO headline generation using templates
- 🔁 Regenerate headline button
- 📊 Randomized rating and reviews
- 🌀 Custom animated SVG loader (Tailwind-based)
- 🌐 CORS-enabled backend
- 🚀 Deployed with Vercel (frontend) and Render (backend)

---

## 🛠 Tech Stack

### Frontend

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- [Vite](https://vitejs.dev/)
- Deployed on [Vercel](https://vercel.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- Deployed on [Render](https://render.com/)

---

## 📁 Folder Structure

growthProAI/
│
├── backend/
│ ├── index.js # Express backend server
│ ├── headlines.js # Array of headline templates
│ └── .env # Backend environment config
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── Loader/ # Custom Tailwind-based SVG loader
│ │ ├── App.jsx # Main frontend logic
│ │ └── index.css # Tailwind styles
│ └── .env # Frontend environment config


---

## 🧠 How It Works

### `POST /business-data`

```json
Request Body:
{
  "name": "Cake & Co",
  "location": "Mumbai"
}

Response:
{
  "rating": "4.5",
  "reviews": 136,
  "headline": "Top-rated Cake & Co in Mumbai – Loved by Locals!"
}

---

### GET /regenerate-headline
GET /regenerate-headline?name=Cake%20%26%20Co&location=Mumbai


Response:
{
  "headline": "Why Everyone’s Talking About Cake & Co in Mumbai"
}

🔧 Setup Instructions
1. Clone the Repo

git clone https://github.com/Bhanukiran889/growthProAI.git
cd growthProAI

2. Setup Backend

.env file:

PORT=5000
FRONTEND_ORIGIN=https://growth-proai.vercel.app

Start the server

node index.js



Setup frontend

cd ../frontend
npm install
VITE_API_URL=https://############.onrender.com


start frontend server 

npm run dev


🚀 Deployment
Backend (Render)
Create a new Web Service on Render

Set Root Directory to backend

Add environment variable:

env
Copy
Edit
FRONTEND_ORIGIN=https://growth-proai.vercel.app
Build Command: npm install

Start Command: node index.js

Frontend (Vercel)
Import project into Vercel

Set Root Directory to frontend

Add environment variable:

env
Copy
Edit
VITE_API_URL=https://growthproai-y1lm.onrender.com
Framework: React (Vite)

Deploy

🐞 Common Issues
CORS error: Ensure backend .env has FRONTEND_ORIGIN set correctly (no trailing slash)

Loader shows but no data: Means CORS blocked the request or backend is down

.env not working: In Vercel/Render dashboard, you must add variables manually — they are not read from .env in build.

🙋 Author
Made with 💙 by Bhanukiran Reddy


---

Let me know if you’d like me to generate this file for download too!
