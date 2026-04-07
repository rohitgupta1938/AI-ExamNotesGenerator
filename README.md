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

* AI APIs
* Razorpay
* JWT Authentication

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

## 👨‍💻 Author

**Rohit Gupta**
Aspiring Software Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub.
