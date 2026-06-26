import { useState } from 'react'
import GeofenceList from './GeofenceList'
import ActivityLog from './ActivityLog'

function Sidebar({ logs }) {
  const [activeTab, setActiveTab] = useState('geofences')

  return (
    <div style={{
      width: '320px',
      background: '#ffffff',
      borderRight: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxShadow: '2px 0 4px rgba(0,0,0,0.05)'
    }}>
      
      {/* Tabs */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #e2e8f0',
        padding: '8px',
        gap: '8px'
      }}>
        <button
          onClick={() => setActiveTab('geofences')}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '6px',
            border: 'none',
            background: activeTab === 'geofences' ? '#dcfce7' : 'white',
            color: activeTab === 'geofences' ? '#16a34a' : '#64748b',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '12px'
          }}
        >
          Geofences
        </button>
        <button
          onClick={() => setActiveTab('activity')}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '6px',
            border: 'none',
            background: activeTab === 'activity' ? '#dcfce7' : 'white',
            color: activeTab === 'activity' ? '#16a34a' : '#64748b',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '12px'
          }}
        >
          Activity
        </button>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
      }}>
        {activeTab === 'geofences' && (
          <>
            <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>
              Geofences ({logs ? 'loading' : '0'})
            </h3>
            <GeofenceList />
          </>
        )}

        {activeTab === 'activity' && (
          <>
            <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>
              Recent Activity ({logs.length})
            </h3>
            <ActivityLog logs={logs} />
          </>
        )}
      </div>

    </div>
  )
}

export default Sidebar