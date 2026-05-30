# 🚨 Real-Time Disaster Alert and Response System

## 📌 Project Overview

The Real-Time Disaster Alert and Response System is a full-stack web application designed to detect, report, monitor, and respond to disasters in real time. The system enables users to report emergencies such as floods, fires, accidents, earthquakes, and other natural disasters while allowing authorities and rescue teams to receive instant notifications and take action quickly.

The application provides a centralized platform for disaster management with live alerts, location tracking, disaster mapping, and emergency response coordination.

---

# 🎯 Objectives

* Provide real-time disaster alerts.
* Allow users to report disasters instantly.
* Display disaster locations on an interactive map.
* Improve communication between citizens and emergency responders.
* Reduce disaster response time.
* Increase public safety and awareness.

---

# 🛠️ Technology Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Leaflet Maps
* Socket.IO Client
* CSS3

## Backend

* Node.js
* Express.js
* Socket.IO
* JWT Authentication
* Bcrypt.js

## Database

* MongoDB
* Mongoose

---

# 📂 Project Structure

```text
disaster-alert-system/

├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Disaster.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── disasterRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   └── DisasterMap.js
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   ├── Dashboard.js
    │   │   └── ReportDisaster.js
    │   ├── api.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
```

---

# ✨ Features

## User Features

* User Registration
* User Login
* JWT Authentication
* Disaster Reporting
* Real-Time Notifications
* Interactive Disaster Map
* View Recent Disaster Reports

## Admin Features (Future Scope)

* Manage Users
* Verify Reports
* Update Disaster Status
* Monitor Active Emergencies

## Real-Time Features

* Live Disaster Updates
* Socket.IO Integration
* Automatic Dashboard Refresh

---

# 🗄️ Database Schema

## User Collection

| Field    | Type   |
| -------- | ------ |
| name     | String |
| email    | String |
| password | String |
| role     | String |

## Disaster Collection

| Field       | Type     |
| ----------- | -------- |
| type        | String   |
| description | String   |
| latitude    | Number   |
| longitude   | Number   |
| status      | String   |
| reportedBy  | ObjectId |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>
cd disaster-alert-system
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/disasterDB
JWT_SECRET=disastersecretkey
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Run Frontend

```bash
npm start
```

---

# ▶️ Running the Project

### Start MongoDB

```bash
mongod
```

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm start
```

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:5000
```

---

# 🔄 Application Workflow

1. User registers and logs in.
2. JWT token is generated.
3. User reports a disaster.
4. Disaster data is stored in MongoDB.
5. Socket.IO broadcasts the event.
6. Dashboard updates in real time.
7. Disaster appears on the interactive map.
8. Emergency authorities can monitor incidents.

---

# 📈 Future Enhancements

* SOS Emergency Button
* Firebase Push Notifications
* AI-Based Disaster Prediction
* Weather API Integration
* SMS Alert System
* Image Upload Support
* Rescue Team Tracking
* Admin Dashboard
* Analytics Dashboard
* Mobile Application

---

# 📷 Sample Modules

* Login Module
* Registration Module
* Dashboard Module
* Disaster Reporting Module
* Interactive Map Module
* Real-Time Notification Module

---

# 🔒 Security Features

* Password Hashing (Bcrypt)
* JWT Authentication
* Protected Routes
* Secure API Access

---

# 👨‍💻 Author

Manoj Kumar

---

# 📄 License

This project is developed for academic and educational purposes.
