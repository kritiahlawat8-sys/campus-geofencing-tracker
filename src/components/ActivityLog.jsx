import { useState } from 'react'

function ActivityLog({ logs }) {
  const [filter, setFilter] = useState('all')

  const filteredLogs = logs.filter(log => {
    if (filter === 'all') return true
    return log.type === filter
  })

  const exportCSV = () => {
    const headers = 'Timestamp,User,Geofence,Event Type\n'
    const rows = logs.map(log =>
      `${log.timestamp},${log.user},${log.geofence},${log.type}`
    ).join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'activity_log.csv'
    a.click()
  }

  return (
    <div style={{
      position: 'absolute',
      bottom: '10px',
      left: '10px',
      width: '320px',
      background: 'white',
      borderRadius: '8px',
      padding: '12px',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      maxHeight: '250px',
      overflowY: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', color: '#1e293b' }}>
          Activity Log ({logs.length})
        </h3>
        <button
          onClick={exportCSV}
          style={{
            fontSize: '11px',
            padding: '3px 8px',
            borderRadius: '4px',
            border: '1px solid #3b82f6',
            background: '#3b82f6',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Export CSV
        </button>
      </div>

      <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
        {['all', 'entry', 'exit'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              fontSize: '11px',
              padding: '3px 8px',
              borderRadius: '4px',
              border: '1px solid #e2e8f0',
              background: filter === f ? '#3b82f6' : 'white',
              color: filter === f ? 'white' : '#64748b',
              cursor: 'pointer'
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {filteredLogs.length === 0 && (
        <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
          No activity yet. Enter or exit a geofence zone!
        </p>
      )}

      {filteredLogs.map((log, index) => (
        <div key={index} style={{
          padding: '6px 8px',
          marginBottom: '6px',
          borderRadius: '6px',
          border: '1px solid #e2e8f0',
          borderLeft: `3px solid ${log.type === 'entry' ? '#22c55e' : '#ef4444'}`
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '12px', fontWeight: '500', color: '#1e293b' }}>
              {log.type === 'entry' ? '🟢' : '🔴'} {log.geofence}
            </span>
            <span style={{ fontSize: '11px', color: '#94a3b8' }}>
              {log.timestamp}
            </span>
          </div>
          <p style={{ fontSize: '11px', color: '#64748b', margin: '2px 0 0' }}>
            {log.user} — {log.type}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ActivityLog