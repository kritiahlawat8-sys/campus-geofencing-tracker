import { useState } from 'react'
import MapView from './components/MapView'
import LandingPage from './components/LandingPage'
import { GeofenceProvider } from './context/GeofenceContext'
import './App.css'

function App() {
  const [role, setRole] = useState(null) // null, 'admin', 'student'

  const handleSelectRole = (selectedRole) => {
    setRole(selectedRole)
  }

  if (!role) {
    return <LandingPage onSelectRole={handleSelectRole} />
  }

  return (
    <GeofenceProvider>
      <div className="app-container">
        <MapView role={role} setRole={setRole} />
      </div>
    </GeofenceProvider>
  )
}

export default App