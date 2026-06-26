
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
  map.off(L.Draw.Event.CREATED)
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

const colorOptions = ['#3b82f6', '#16a34a', '#dc2626', '#f59e0b', '#8b5cf6', '#ec4899']
const colorPrompt = prompt(
  'Select color:\n1-Blue\n2-Green\n3-Red\n4-Orange\n5-Purple\n6-Pink\nEnter number (1-6):',
  '1'
)
const colorIndex = Math.max(0, Math.min(5, parseInt(colorPrompt || '1') - 1))
const color = colorOptions[colorIndex]

      let fenceData = {
        id: Date.now(),
        name,
        type,
        active: true,
        color: color
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