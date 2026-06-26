function LandingPage({ onSelectRole }) {
  return (
  <div style={{
    minHeight: '100vh',
    background: '#f8fafc',
    display: 'flex',
    flexDirection: 'column'
  }}>
    
    {/* Navbar */}
    <nav style={{
      height: '56px',
      background: '#f0fdf4',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      position: 'sticky',
      top: 0,
      zIndex: 100
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
        <span style={{ fontWeight: '600', fontSize: '16px', color: '#1e293b' }}>
          Campus Geofencing Tracker
        </span>
      </div>
    </nav>

    {/* Scrollable Content */}
    <div style={{ flex: 1, overflowY: 'auto' }}>
      
      {/* Hero Section */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px' }}>
          
          {/* Logo/Icon */}
          <div style={{ fontSize: '80px', marginBottom: '30px' }}>
            🗺️📍
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '16px'
          }}>
            Campus Geofencing Tracker
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            A real-time location tracking system that monitors user movement across campus boundaries. Administrators can define virtual geofences and receive instant alerts when users enter or exit designated zones.
          </p>

          {/* Features */}
          <div style={{
            background: '#f0fdf4',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '40px',
            textAlign: 'left',
            display: 'inline-block'
          }}>
            <p style={{ fontSize: '14px', color: '#1e293b', margin: '8px 0' }}>
              ✓ Real-time GPS tracking
            </p>
            <p style={{ fontSize: '14px', color: '#1e293b', margin: '8px 0' }}>
              ✓ Draw circular and polygonal geofences
            </p>
            <p style={{ fontSize: '14px', color: '#1e293b', margin: '8px 0' }}>
              ✓ Instant entry/exit notifications
            </p>
            <p style={{ fontSize: '14px', color: '#1e293b', margin: '8px 0' }}>
              ✓ Activity log with CSV export
            </p>
          </div>

          {/* Scroll Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '20px'
          }}>
            <div style={{
              fontSize: '20px',
              animation: 'bounce 2s infinite'
            }}>
              ⬇️
            </div>
          </div>
          <p style={{ fontSize: '12px', color: '#94a3b8' }}>
            Scroll down to select your role
          </p>
        </div>
      </div>

      {/* Role Selection Section */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            Select Your Role
          </h2>

          <p style={{
            fontSize: '14px',
            color: '#64748b',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Choose how you want to use the Campus Geofencing Tracker
          </p>

          {/* Role Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            
            {/* Admin Button */}
            <button
              onClick={() => onSelectRole('admin')}
              style={{
                padding: '24px 20px',
                borderRadius: '8px',
                border: '2px solid #16a34a',
                background: '#f0fdf4',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#6ede97'
                e.target.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f0fdf4'
                e.target.style.transform = 'scale(1)'
              }}
            >
              <div style={{
                fontSize: '32px',
                marginBottom: '8px'
              }}>
                👨‍💼
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#16a34a',
                marginBottom: '8px'
              }}>
                Administrator
              </h3>
              <p style={{
                fontSize: '13px',
                color: '#64748b'
              }}>
                Draw geofences, monitor activity, manage zones, export reports
              </p>
            </button>

            {/* Student Button */}
            <button
              onClick={() => onSelectRole('student')}
              style={{
                padding: '24px 20px',
                borderRadius: '8px',
                border: '2px solid #5b91e7',
                background: '#eff6ff',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#83a5dc'
                e.target.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#eff6ff'
                e.target.style.transform = 'scale(1)'
              }}
            >
              <div style={{
                fontSize: '32px',
                marginBottom: '8px'
              }}>
                👨‍🎓
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#3b82f6',
                marginBottom: '8px'
              }}>
                Student
              </h3>
              <p style={{
                fontSize: '13px',
                color: '#64748b'
              }}>
                View your live location, see geofence boundaries, check-ins
              </p>
            </button>

          </div>
        </div>
      </div>

    </div>
  </div>
)
}
export default LandingPage