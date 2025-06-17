# 🌄 WildSteps – Adventure & Trekking Website

A **Full-stack MERN** (MongoDB, Express, React, Node.js) project, built for educational purposes to explore modern web development practices, animations, API design, and admin-controlled content management for adventure expeditions and trekking.

## 🚀 Features

- 🏔️ Expedition and Trekking Listings
- 📋 Detailed Trek Pages
- 👤 User Authentication (Admin Panel)
- 📥 Contact Form Handling
- 📱 Fully Responsive Design
- 🎨 TailwindCSS + Framer Motion UI
- 🔒 Secure Backend with JWT Auth & Validation

---

## ⚙️ Tech Stack

### 🖼️ Frontend
- React, Vite
- Tailwind CSS, Headless UI, Heroicons
- React Router DOM
- Axios, Framer Motion

### 🛠️ Backend
- Node.js, Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (File Uploads)
- Bcrypt, Helmet

---

## 🧰 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)
- Git

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/wildsteps.git
cd wildsteps

2. Install Frontend Dependencies
bash
Copy
Edit
cd client
npm install
3. Install Backend Dependencies
bash
Copy
Edit
cd ../server
npm install
4. Create .env File in /server Directory
env
Copy
Edit
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongo_connection_uri
JWT_SECRET=your_secret_key
JWT_EXPIRE=30d
5. Start Development Servers
Backend:

bash
Copy
Edit
cd server
npm run dev
Frontend:

bash
Copy
Edit
cd client
npm run dev
🧱 Project Structure
Frontend (/client)
csharp
Copy
Edit
client/
├── public/
├── src/
│   ├── assets/         # Images, Icons, etc.
│   ├── components/     # Reusable UI Elements
│   ├── pages/          # Page Components
│   ├── routes/         # Route Definitions
│   ├── services/       # API Calls
│   ├── App.jsx         # Main App Component
│   └── main.jsx        # Entry Point
Backend (/server)
bash
Copy
Edit
server/
├── config/             # Config files (DB, JWT)
├── controllers/        # Route Controllers
├── models/             # MongoDB Schemas
├── routes/             # API Endpoints
├── middleware/         # Custom Middleware
└── server.js           # Server Entry Point
📡 API Endpoints
🧭 Expeditions
GET /api/expeditions – All expeditions

GET /api/expeditions/:id – Single expedition

POST /api/expeditions – Create (Admin)

PUT /api/expeditions/:id – Update (Admin)

DELETE /api/expeditions/:id – Delete (Admin)

🥾 Trekking
GET /api/trekking

GET /api/trekking/:id

POST /api/trekking – Create (Admin)

PUT /api/trekking/:id – Update (Admin)

DELETE /api/trekking/:id – Delete (Admin)

👥 Users
POST /api/users/login

POST /api/users – Register Admin

GET /api/users/profile

PUT /api/users/profile

📬 Contact
POST /api/contact – Submit Contact Form

GET /api/contact – Admin: All Submissions

GET /api/contact/:id – Admin: Single Submission

PUT /api/contact/:id – Admin: Update Status

DELETE /api/contact/:id – Admin: Delete Submission

🤝 Contributing
Fork the repo

Create a new branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to GitHub (git push origin feature/amazing-feature)

Open a Pull Request
