import { useGeofence } from '../context/GeofenceContext'

function GeofenceList() {
  const { state, dispatch } = useGeofence()

  return (
    <div style={{ width: '100%' }}>
      {state.geofences.length === 0 && (
        <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
          No geofences yet. Draw one on the map!
        </p>
      )}

      {state.geofences.map(fence => (
        <div key={fence.id} style={{
          padding: '10px',
          marginBottom: '8px',
          borderRadius: '6px',
          border: '1px solid #dcfce7',
          background: fence.active ? '#f0fdf4' : '#f8fafc'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: '500', color: '#1e293b' }}>
              {fence.name}
            </span>
            <span style={{
              fontSize: '11px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: fence.active ? '#16a34a' : '#94a3b8',
              color: 'white'
            }}>
              {fence.active ? 'Active' : 'Inactive'}
            </span>
          </div>

          <p style={{ fontSize: '11px', color: '#64748b', margin: '4px 0 0' }}>
            Type: {fence.type} {fence.radius ? `| Radius: ${Math.round(fence.radius)}m` : ''}
          </p>

          <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_ACTIVE', payload: fence.id })}
              style={{
                fontSize: '11px',
                padding: '3px 8px',
                borderRadius: '4px',
                border: '1px solid #16a34a',
                background: 'white',
                color: '#16a34a',
                cursor: 'pointer',
                fontWeight: '500'
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
                cursor: 'pointer',
                fontWeight: '500'
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