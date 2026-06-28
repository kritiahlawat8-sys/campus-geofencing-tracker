# Campus Geofencing Tracker

A real-time web application that allows administrators to create virtual boundaries (geofences) on a map and monitor users' live locations. The system automatically detects when a user enters or exits a geofenced area and records these events in real time.

This project was developed as a technical assignment submitted to **Mr. Sourav Singh**.

---

# ✨ Features

## 🗺️ Mapping & Live Location

* Live GPS location tracking using the HTML5 Geolocation API
* Real-time location updates with `watchPosition()`
* Interactive map powered by Leaflet.js
* User location marker with accuracy circle
* Automatic map centering on the user's current location

---

## 📍 Geofence Management

* Create circular geofences
* Create polygon geofences
* Visualize all geofences on the map
* Custom color selection for geofences
* Persistent geofence storage using localStorage

---

## 🚨 Geofence Detection

* Real-time entry and exit detection
* Activity log with timestamps
* Filter activity records
* Export activity logs as CSV

### Algorithms Used

* **Haversine Formula** — Calculates the distance between GPS coordinates for circular geofences.
* **Ray-Casting Algorithm** — Determines whether a location lies inside or outside a polygon geofence.

---

## ☁️ Real-Time Tracking

* Firebase Realtime Database integration
* Live cloud synchronization
* UUID-based user identification
* Simultaneous multi-user tracking
* Automatic real-time updates using Firebase listeners

---

## 👥 Role-Based Access

### Admin

* Create and delete geofences
* View all users
* Monitor entry and exit events
* Manage geofence settings

### Student

* Share live location
* View assigned geofences
* Receive real-time monitoring

---

## 🎨 User Interface

* Modern landing page
* Clean light theme (white & green)
* Responsive dashboard layout
* Navigation bar with live tracking status
* Sidebar with tabbed navigation
* Geofence management panel
* Activity log panel
* Compass branding

---

# 🛠️ Technologies Used

## Frontend

* React 18
* Vite

## Maps

* Leaflet.js
* React Leaflet
* Leaflet Draw

## Backend

* Firebase Realtime Database

## State Management

* React Context API
* useReducer

## Styling

* CSS3
* Tailwind CSS

## APIs & Utilities

* HTML5 Geolocation API
* UUID
* localStorage

---

# 🔥 Why Firebase Instead of Socket.io?

Firebase Realtime Database was selected because it provides real-time synchronization without requiring a separate backend server.

### Advantages

* No Node.js backend required
* Built-in real-time synchronization
* Free tier suitable for development projects
* Automatic data persistence
* Faster development and deployment
* Scales easily for multiple connected users

Socket.io would require building, deploying, and maintaining an additional backend server, increasing the project's complexity.

---

# 🏗️ Project Architecture

```
Browser
│
└── React Application
    │
    ├── HTML5 Geolocation API
    │        │
    │        ▼
    │   Live GPS Coordinates
    │
    ├── Leaflet.js
    │        │
    │        ▼
    │   Interactive Map
    │
    ├── React Context API + useReducer
    │
    └── Firebase Realtime Database
             │
             ▼
     Real-Time Cloud Synchronization
```

---



# 🚀 How to Run Locally

### Prerequisites

* Node.js
* Git

### Clone the Repository

```bash
git clone https://github.com/kritiahlawat8-sys/campus-geofencing-tracker.git
```

### Navigate to the Project

```bash
cd campus-geofencing-tracker
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

> **Note:** Allow location permission when prompted. Live GPS tracking requires browser location access.

---

# 📷 Screenshots

### Landing Page

<img width="1470" height="819" alt="image" src="https://github.com/user-attachments/assets/dd11cd49-7a9a-4c13-a66e-137ac546e929" />


### Live GPS Tracking

<img width="1063" height="597" alt="image" src="https://github.com/user-attachments/assets/ea5ed0b6-44ad-4314-8136-2ac2c9544e44" />


### Geofence Creation

<img width="1385" height="723" alt="image" src="https://github.com/user-attachments/assets/fc4a09ab-7364-42db-b0eb-fcab90237632" />


### Activity Log

<img width="895" height="541" alt="image" src="https://github.com/user-attachments/assets/4ca88a5a-cb9f-4826-a2c3-7f107b82ba3b" />


---

# 👩‍💻 Developer

**Kriti Ahlawat**

B.Tech (Information Technology)

Submitted to **Mr. Sourav Singh**

**Project:** Campus Geofencing Tracker
