import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-draw/dist/leaflet.draw.css'
import 'leaflet-draw'
import { useGeofence } from '../context/GeofenceContext'

function GeofenceDrawer() {
  const map = useMap()
  const { dispatch } = useGeofence()

  useEffect(() => {
    const drawnItems = new L.FeatureGroup()
    map.addLayer(drawnItems)

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems
      },
      draw: {
        circle: true,
        polygon: true,
        rectangle: false,
        polyline: false,
        marker: false,
        circlemarker: false
      }
    })

    map.addControl(drawControl)

    map.on(L.Draw.Event.CREATED, (e) => {
      const layer = e.layer
      const type = e.layerType

      drawnItems.addLayer(layer)

      const name = prompt('Enter geofence name:') || 'Unnamed Zone'

      let fenceData = {
        id: Date.now(),
        name,
        type,
        active: true,
        color: '#3b82f6'
      }

      if (type === 'circle') {
        fenceData.center = layer.getLatLng()
        fenceData.radius = layer.getRadius()
      } else if (type === 'polygon') {
        fenceData.coordinates = layer.getLatLngs()
      }

      dispatch({ type: 'ADD_FENCE', payload: fenceData })
    })

    return () => {
      map.removeControl(drawControl)
      map.removeLayer(drawnItems)
    }
  }, [])

  return null
}

export default GeofenceDrawer