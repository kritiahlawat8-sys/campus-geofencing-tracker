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
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
        {['all', 'entry', 'exit'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              fontSize: '11px',
              padding: '4px 8px',
              borderRadius: '4px',
              border: '1px solid #dcfce7',
              background: filter === f ? '#16a34a' : 'white',
              color: filter === f ? 'white' : '#64748b',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <button
        onClick={exportCSV}
        style={{
          width: '100%',
          fontSize: '11px',
          padding: '6px 8px',
          borderRadius: '4px',
          border: 'none',
          background: '#16a34a',
          color: 'white',
          cursor: 'pointer',
          fontWeight: '500',
          marginBottom: '8px'
        }}
      >
        Export CSV
      </button>

      {filteredLogs.length === 0 && (
        <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
          No activity yet.
        </p>
      )}

      {filteredLogs.map((log, index) => (
        <div key={index} style={{
          padding: '8px',
          marginBottom: '6px',
          borderRadius: '6px',
          border: '1px solid #dcfce7',
          borderLeft: `3px solid ${log.type === 'entry' ? '#16a34a' : '#ef4444'}`,
          background: '#f8fafc'
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
            {log.user}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ActivityLog