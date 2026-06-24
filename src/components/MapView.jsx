import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import useGeolocation from '../hooks/useGeolocation'
import UserMarker from './UserMarker'
import GeofenceDrawer from './GeofenceDrawer'
import GeofenceList from './GeofenceList'

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
        <AutoCenter location={location} />
        <GeofenceDrawer />
      </MapContainer>

    </div>
  )
}

export default MapView