import { useGeofence } from '../context/GeofenceContext'

function GeofenceList() {
  const { state, dispatch } = useGeofence()

  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      width: '250px',
      background: 'white',
      borderRadius: '8px',
      padding: '12px',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      maxHeight: '400px',
      overflowY: 'auto'
    }}>
      <h3 style={{ margin: '0 0 10px', fontSize: '14px', color: '#1e293b' }}>
        Geofences ({state.geofences.length})
      </h3>

      {state.geofences.length === 0 && (
        <p style={{ fontSize: '12px', color: '#94a3b8' }}>
          No geofences yet. Draw a circle or polygon on the map!
        </p>
      )}

      {state.geofences.map(fence => (
        <div key={fence.id} style={{
          padding: '8px',
          marginBottom: '8px',
          borderRadius: '6px',
          border: '1px solid #e2e8f0',
          background: fence.active ? '#f0f9ff' : '#f8fafc'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: '500', color: '#1e293b' }}>
              {fence.name}
            </span>
            <span style={{
              fontSize: '11px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: fence.active ? '#3b82f6' : '#94a3b8',
              color: 'white'
            }}>
              {fence.active ? 'Active' : 'Inactive'}
            </span>
          </div>

          <p style={{ fontSize: '11px', color: '#64748b', margin: '4px 0' }}>
            Type: {fence.type} {fence.radius ? `| Radius: ${Math.round(fence.radius)}m` : ''}
          </p>

          <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_ACTIVE', payload: fence.id })}
              style={{
                fontSize: '11px',
                padding: '3px 8px',
                borderRadius: '4px',
                border: '1px solid #3b82f6',
                background: 'white',
                color: '#3b82f6',
                cursor: 'pointer'
              }}
            >
              {fence.active ? 'Deactivate' : 'Activate'}
            </button>

            <button
              onClick={() => dispatch({ type: 'REMOVE_FENCE', payload: fence.id })}
              style={{
                fontSize: '11px',
                padding: '3px 8px',
                borderRadius: '4px',
                border: '1px solid #ef4444',
                background: 'white',
                color: '#ef4444',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GeofenceList