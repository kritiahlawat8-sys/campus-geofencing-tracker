import { Circle, Polygon, Popup } from 'react-leaflet'
import { useGeofence } from '../context/GeofenceContext'

function GeofenceVisualization() {
  const { state } = useGeofence()

  return (
    <>
      {state.geofences.map(fence => {
        if (fence.type === 'circle') {
          return (
            <Circle
              key={fence.id}
              center={[fence.center.lat, fence.center.lng]}
              radius={fence.radius}
              pathOptions={{
                color: fence.color || '#3b82f6',
                fillOpacity: 0.1,
                weight: 2
              }}
            >
              <Popup>{fence.name}</Popup>
            </Circle>
          )
        } else if (fence.type === 'polygon' && fence.coordinates && fence.coordinates[0]) {
          return (
            <Polygon
              key={fence.id}
              positions={fence.coordinates[0].map(coord => [coord.lat, coord.lng])}
              pathOptions={{
                color: fence.color || '#3b82f6',
                fillOpacity: 0.1,
                weight: 2
              }}
            >
              <Popup>{fence.name}</Popup>
            </Polygon>
          )
        }
        return null
      })}
    </>
  )
}

export default GeofenceVisualization