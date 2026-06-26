import { createContext, useContext, useReducer } from 'react'

const GeofenceContext = createContext()

const initialState = {
  geofences: JSON.parse(localStorage.getItem('geofences')) || []
}

function geofenceReducer(state, action) {
  switch (action.type) {
    case 'ADD_FENCE':
      const newState1 = { ...state, geofences: [...state.geofences, action.payload] }
      localStorage.setItem('geofences', JSON.stringify(newState1.geofences))
      return newState1
      
    case 'REMOVE_FENCE':
      const newState2 = { ...state, geofences: state.geofences.filter(f => f.id !== action.payload) }
      localStorage.setItem('geofences', JSON.stringify(newState2.geofences))
      return newState2
      
    case 'TOGGLE_ACTIVE':
      const newState3 = {
        ...state,
        geofences: state.geofences.map(f =>
          f.id === action.payload ? { ...f, active: !f.active } : f
        )
      }
      localStorage.setItem('geofences', JSON.stringify(newState3.geofences))
      return newState3
      
    default:
      return state
  }
}

export function GeofenceProvider({ children }) {
  const [state, dispatch] = useReducer(geofenceReducer, initialState)
  return (
    <GeofenceContext.Provider value={{ state, dispatch }}>
      {children}
    </GeofenceContext.Provider>
  )
}

export function useGeofence() {
  return useContext(GeofenceContext)
}