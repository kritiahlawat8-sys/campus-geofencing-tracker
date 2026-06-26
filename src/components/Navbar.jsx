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
        <img 
  src="/image.png" 
  alt="Logo" 
  style={{
    width: '32px',
    height: '32px',
    borderRadius: '8px'
  }}
  />
  
        <span style={{ fontWeight: '600', fontSize: '16px', color: 'red' }}>
  THIS IS MY NAVBAR
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