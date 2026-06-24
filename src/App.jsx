import MapView from './components/MapView'
import { GeofenceProvider } from './context/GeofenceContext'

function App() {
  return (
    <GeofenceProvider>
      <MapView />
    </GeofenceProvider>
  )
}

export default App