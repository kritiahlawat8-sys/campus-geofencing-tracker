import MapView from './components/MapView'
import { GeofenceProvider } from './context/GeofenceContext'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <GeofenceProvider>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <MapView />
        </div>
      </div>
    </GeofenceProvider>
  )
}

export default App