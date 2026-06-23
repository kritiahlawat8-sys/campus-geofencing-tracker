# Campus Geofencing Tracker

A real-time web application where administrators can draw virtual boundaries on a map and track users' live locations. The system detects when someone enters or exits a zone and logs all activity in real time.

Built as a technical assignment submitted to Mr. Sourav Singh.

---

## Features

- Live GPS location tracking using the browser's built-in Geolocation API
- Interactive map using Leaflet.js with zoom, pan and tile switching
- Circular and polygonal geofence creation (in progress)
- Real-time entry and exit alerts (in progress)
- Activity log with filtering and CSV export (in progress)
- Real-time location broadcasting using Firebase
- Responsive design for mobile and desktop

---

## Technologies Used

- React 18 with Vite
- Leaflet.js and react-leaflet for maps
- HTML5 Geolocation API for live tracking
- Firebase Realtime Database for real-time backend
- CSS3 for styling
- Git and GitHub for version control

---


## 🔥 Why Firebase over Socket.io?

Firebase Realtime Database was chosen as the real-time backend for the following reasons:

- No separate backend server needed - Firebase handles everything, reducing complexity
- Free tier available — sufficient for this project's requirements
- Real-time sync built-in — data updates automatically across all connected clients
- Easy setup — no need to deploy and manage a Node.js + Express server separately
- Socket.io would require a separate backend server hosted on Render/Railway, adding unnecessary complexity for this project

---

## 🏗️ Architecture

The frontend is built in React and runs in the browser. It uses the HTML5 Geolocation API to get the user's live GPS coordinates and displays them on a Leaflet map. Location data and geofence events will be sent to Firebase Realtime Database, which syncs the data across all connected users in real time.

Browser
└── React App
├── Leaflet.js (map)
├── Geolocation API (GPS)
└── Firebase (real-time data sync)

---

## How to Run Locally

Make sure you have Node.js and Git installed.

### Steps:

1. Clone the repository
```bash
git clone https://github.com/kritiahlawat8-sys/campus-geofencing-tracker.git
```

2. Go into the project folder
```bash
cd campus-geofencing-tracker
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and go to
http://localhost:5173

⚠️ Allow location permission when the browser asks — this is required for live GPS tracking.

---

## Screenshots

Live map with GPS tracking:

*(screenshot will be added)*

Geofence creation and activity log screenshots will be added as features are completed.

---

## Live Demo

Will be deployed on Vercel once the project is complete.

---

## 👩‍💻 Developer

Kriti AHLAWAT
Submitted to: Mr. Sourav Singh
Deadline: 28th June 2026