💬 Chatly – Real-Time Chat Application

A full-stack MERN + Socket.IO chat application that allows users to register, log in, and chat in real-time with other online users.
Built with modern technologies and deployed on Render (backend) and Netlify (frontend).

🌐 Live Demo

Frontend (Netlify): 👉 https://chatly-chat-app.netlify.app

Backend (Render API): 👉 https://chatly-chat-app-7epe.onrender.com/api

🚀 Features

🔐 User Authentication – Signup, login, logout with JWT-based cookies

💬 Real-time Messaging – Instant communication using Socket.IO

👥 Online User Status – See who’s currently active

🧑‍💻 Profile Management – Upload and update profile picture via Cloudinary

🧠 Persistent Sessions – Auth state maintained via secure cookies

🌙 Responsive UI – Optimized for both desktop and mobile screens

🏗️ Tech Stack
Frontend

React + Vite ⚛️

Zustand (state management)

Axios (API calls)

Tailwind CSS (UI styling)

Socket.IO Client

Backend

Node.js + Express

MongoDB + Mongoose

Socket.IO Server

Cloudinary (image upload)

JWT Authentication

Cookie Parser & CORS

🧩 Project Structure
Chatly-Chat-App/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Auth & Message controllers
│   │   ├── middleware/      # Auth middleware (protectRoute)
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API route files
│   │   └── lib/             # utils, DB, socket setup
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── lib/axios.js     # Configured Axios instance (withCredentials)
│   │   ├── store/           # Zustand state store
│   │   ├── components/      # Reusable UI parts
│   │   └── pages/           # Auth & Chat screens
│   └── vite.config.js
│
└── README.md


⚙️ Local Setup
🧠 Prerequisites

Node.js (v18+)

MongoDB Atlas account

Cloudinary account (for image uploads)

🛠️ Steps

Clone the Repository

git clone https://github.com/Tushar-2808/Chatly-Chat-App.git
cd Chatly-Chat-App


Backend Setup

cd backend
npm install


Create a .env file inside backend/:

MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloud_api_key
CLOUDINARY_API_SECRET=your_cloud_api_secret
PORT=5001
NODE_ENV=development


Run server:

npm run dev


Frontend Setup

cd ../frontend
npm install
npm run dev


Create a .env inside frontend/:

VITE_API_URL=https://chatly-chat-app-7epe.onrender.com/api
VITE_SOCKET_URL=https://chatly-chat-app-7epe.onrender.com


Open frontend in your browser:

http://localhost:5173

☁️ Deployment Details
Service	URL	Description
Frontend (Netlify)	https://chatly-chat-app.netlify.app
	Deployed via GitHub integration
Backend (Render)	https://chatly-chat-app-7epe.onrender.com
	Node.js Express API
Database (MongoDB Atlas)	—	Cloud MongoDB cluster
Image Storage (Cloudinary)	—	For profile picture uploads
🔒 Authentication Flow

User signs up or logs in → backend sends a secure cookie:

res.cookie("jwt", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
});


Frontend uses:

axiosInstance.get("/auth/check", { withCredentials: true });


Protected routes verify token via middleware:

const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.user = await User.findById(decoded.userId);

💻 Developer

👨‍💻 Tushar Kumar Mundawaria
Front-end & Full-stack Developer passionate about web apps, clean UI, and real-time technologies.

💼 LinkedIn: https://www.linkedin.com/in/tushar2808

🐙 GitHub: https://github.com/Tushar-2808

🏁 Future Improvements

✅ Direct messages (done)

🔜 Group chats

🔜 Message read receipts

🔜 Typing indicators

🔜 Dark/light mode toggle
