# 📚 AI Exam Notes Generator

AI Exam Notes Generator is a full-stack web application that helps students quickly generate, browse, and download high-quality academic notes using AI. It provides a centralized platform where users can search notes by class, subject, and topic, making exam preparation faster and more efficient.

---

## ✨ Features

* 🔍 **Search Notes** by class, subject, and topic
* 🤖 **AI-Powered Notes Generation** using external APIs
* 📄 **Download Notes as PDF**
* 🔐 **Secure Authentication** (JWT-based login/signup)
* 💳 **Credit-Based System** for controlled access
* 💰 **Payment Integration** (Razorpay)
* ⚡ **Fast & Responsive UI** (works across devices)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Other Integrations

* Gemini API
* Razorpay
* JWT Authentication
* Firebase Authentication

---

## 📂 Project Structure

```
AI-ExamNotesGenerator/
│
├── client/                             
│   ├── public/
│
│   ├── src/
│   │   ├── assets/                     # Images, icons, static files
│   │
│   │   ├── components/                 # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FinalResult.jsx
│   │   │   ├── MermaidSerup.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── topicName.jsx
│   │   │   └── RechartSetup.jsx
│   │
│   │   ├── pages/                      # Application pages
│   │   │   ├── Home.jsx
│   │   │   ├── Auth.jsx
│   │   │   ├── History.jsx
│   │   │   ├── Notes.jsx
│   │   │   └── Pricing.jsx
│   │
│   │   ├── redux/                      # State management
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │
│   │   ├── services/                   # API calls (Axios)
│   │   │   └── api.js
│   │
│   │   ├── utils/                      # Helper functions
│   │   │   └── firebase.js
│   │
│   │   ├── App.jsx                     # Main component
│   │   ├── main.jsx                    # Entry point
│   │   └── .env                        # Environment variables
│
│   └── package.json
│
├── server/                             # Backend (Node + Express)
│   ├── controllers/                    # Business logic
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── notes.controller.js
│   │   ├── credits.controller.js(Razorpay)
│   │   ├── generate.controller.js
│   │   ├── pdf.controller.js
│   │   └── payment.controller.js
│
│   ├── routes/                         # API routes
│   │   ├── auth.route.js
│   │   ├── user.route.js
│   │   ├── generate.route.js
│   │   ├── pdf.route.js
│   │   ├── subscription.route.js
│   │   └── payment.route.js
│
│   ├── models/                         # MongoDB schemas
│   │   ├── notes.model.js
│   │   ├── subscriber.model.js
│   │   └── user.model.js
│
│   ├── middleware/                     # Middleware functions
│   │   └── isAuth.js
│
│   ├── services/                       # Generate response
│   │   └── gemini.services.js
│
│   ├── utils/                          # Helper utilities
│   │   ├── connectDB.js
│   │   ├── promptBuilder.js
│   │   └── token.js
│
│   ├── index.js                        # Entry point
│   ├── .env                            # Environment variables
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication Flow

* User signs up / logs in
* Backend generates JWT token
* Token is stored (cookie / localStorage)
* Frontend sends token with each request
* Backend verifies token for protected routes

🌐 **Live URL:** https://studynotesclient.onrender.com/

---

## 📡 API Endpoints

* `POST /api/auth/login`
* `GET /api/auth/logout`
* `GET /api/user/currentuser`
* `POST /api/notes/generate-notes`
* `GET /api/notes/getnotes`
* `GET /api/notes/:id`
* `POST /api/notes/generate-pdf`
* `POST /api/credit/order`
* `POST /api/credit/verify`
* `POST /api/subscribe`
---

## 🚀 Installation & Setup

### Prerequisites

Make sure the following tools are installed on your system:

* Node.js (v18+ recommended)
* npm or yarn
* MongoDB Atlas / Local MongoDB
* Razorpay Account
* Gemini API Key

Check versions:

```bash
node -v
npm -v
```

---

## 📥 Clone Repository

```bash
git clone https://github.com/your-username/AI-ExamNotesGenerator.git

cd AI-ExamNotesGenerator
```

---

## ⚙️ Backend Setup

Move to server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

CLIENT_URL=http://localhost:5173
```

Run backend server:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 🎨 Frontend Setup

Open a new terminal and move to client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `client` folder:

```env
VITE_API_URL=http://localhost:5000/api

VITE_RAZORPAY_KEY=your_razorpay_key

VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## ▶️ Running Full Project

Start backend:

```bash
cd server
npm run dev
```

Start frontend in another terminal:

```bash
cd client
npm run dev
```

Open browser:

```bash
http://localhost:5173
```

---

## 🏗️ Build For Production

Frontend:

```bash
cd client
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🔧 Available Scripts

### Client

```bash
npm run dev
```

Runs Vite development server

```bash
npm run build
```

Builds production files

```bash
npm run preview
```

Preview production build

```bash
npm run lint
```

Runs ESLint

---

### Server

```bash
npm run dev
```

Runs backend using Nodemon

---

## 🌍 Deployment

Frontend deployed on:

https://studynotesclient.onrender.com/

Suggested deployment:

* Frontend → Vercel / Netlify
* Backend → Render / Railway
* Database → MongoDB Atlas

```
```


## 👨‍💻 Author

**Rohit Gupta**
Aspiring Software Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub.
