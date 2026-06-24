import FirebaseUsers from './FirebaseUsers'
import useFirebaseUsers from '../hooks/useFirebaseUsers'
import { saveLocation } from "../firebase/locationService";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState, useRef } from 'react'
import useGeolocation from '../hooks/useGeolocation'
import UserMarker from './UserMarker'
import GeofenceDrawer from './GeofenceDrawer'
import GeofenceList from './GeofenceList'
import ActivityLog from './ActivityLog'
import { useGeofence } from '../context/GeofenceContext'

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function isPointInPolygon(point, polygon) {
  let inside = false
  const x = point.lng, y = point.lat
  const pts = polygon[0]
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i].lng, yi = pts[i].lat
    const xj = pts[j].lng, yj = pts[j].lat
    if (((yi > y) !== (yj > y)) &&
      (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
      inside = !inside
    }
  }
  return inside
}

function AutoCenter({ location }) {
  const map = useMap()
  useEffect(() => {
    if (location) {
      map.setView([location.lat, location.lng], 17)
    }
  }, [location])
  return null
}

function MapView() {
  const { location, error } = useGeolocation()
  const users = useFirebaseUsers()
  console.log(users)
  const { state } = useGeofence()
  const [logs, setLogs] = useState([])
  const insideRef = useRef({})

  const userId = localStorage.getItem("userId") ||
  crypto.randomUUID()

localStorage.setItem("userId", userId)


  useEffect(() => {
  if (!location) return

  saveLocation(userId, location)
}, [location])

  useEffect(() => {
    if (!location) return

    state.geofences.forEach(fence => {
      if (!fence.active) return

      let isInside = false

      if (fence.type === 'circle') {
        const dist = haversineDistance(
          location.lat, location.lng,
          fence.center.lat, fence.center.lng
        )
        isInside = dist <= fence.radius
      } else if (fence.type === 'polygon') {
        isInside = isPointInPolygon(
          { lat: location.lat, lng: location.lng },
          fence.coordinates
        )
      }

      const wasInside = insideRef.current[fence.id]

      if (isInside && !wasInside) {
        insideRef.current[fence.id] = true
        setLogs(prev => [...prev, {
          type: 'entry',
          geofence: fence.name,
          user: 'You',
          timestamp: new Date().toLocaleTimeString()
        }])
      } else if (!isInside && wasInside) {
        insideRef.current[fence.id] = false
        setLogs(prev => [...prev, {
          type: 'exit',
          geofence: fence.name,
          user: 'You',
          timestamp: new Date().toLocaleTimeString()
        }])
      }
    })
  }, [location, state.geofences])

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>

      {error && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'red',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '8px',
          zIndex: 1000
        }}>
          ⚠️ {error}
        </div>
      )}

      <GeofenceList />
      <ActivityLog logs={logs} />

      <MapContainer
        center={[28.3670, 77.3120]}
        zoom={15}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <UserMarker location={location} />
        <FirebaseUsers users={users} />
        <AutoCenter location={location} />
        <GeofenceDrawer />
      </MapContainer>

    </div>
  )
}

export default MapView