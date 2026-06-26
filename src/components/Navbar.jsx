function Navbar() {
  return (
    <nav style={{
      height: '56px',
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      zIndex: 1000,
      position: 'relative'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          background: '#1d8d46',
          borderRadius: '8px',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px'
        }}>
          🗺️
        </div>
        <span style={{ fontWeight: '600', fontSize: '16px', color: '#1e293b' }}>
          Campus Geofencing Tracker
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#3ed977'
        }} />
        <span style={{ fontSize: '13px', color: '#3deb7c', fontWeight: '500' }}>
          Live Tracking Active
        </span>
      </div>
    </nav>
  )
}

export default Navbar