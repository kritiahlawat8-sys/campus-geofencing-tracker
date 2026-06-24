import { createContext, useContext, useReducer } from 'react'

const GeofenceContext = createContext()

const initialState = {
  geofences: []
}

function geofenceReducer(state, action) {
  switch (action.type) {
    case 'ADD_FENCE':
      return { ...state, geofences: [...state.geofences, action.payload] }
    case 'REMOVE_FENCE':
      return { ...state, geofences: state.geofences.filter(f => f.id !== action.payload) }
    case 'TOGGLE_ACTIVE':
      return {
        ...state,
        geofences: state.geofences.map(f =>
          f.id === action.payload ? { ...f, active: !f.active } : f
        )
      }
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