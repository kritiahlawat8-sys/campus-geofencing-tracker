import { Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'

const userIcon = L.divIcon({
  className: '',
  html: `<div style="
    width: 16px;
    height: 16px;
    background-color: #2563eb;
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #2563eb;
  "></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
})

function UserMarker({ location }) {
  if (!location) return null

  return (
    <>
      <Marker position={[location.lat, location.lng]} icon={userIcon}>
        <Popup>
          📍 You are here!<br />
          Lat: {location.lat.toFixed(5)}<br />
          Lng: {location.lng.toFixed(5)}<br />
          Accuracy: {location.accuracy.toFixed(0)}m
        </Popup>
      </Marker>

      <Circle
        center={[location.lat, location.lng]}
        radius={location.accuracy}
        pathOptions={{ color: '#2563eb', fillOpacity: 0.1 }}
      />
    </>
  )
}

export default UserMarker