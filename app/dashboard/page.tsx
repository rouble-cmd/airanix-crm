export default function Dashboard() {
  return (
    <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <h1>Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#666', fontSize: '14px' }}>Total Contacts</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0 0 0' }}>0</p>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#666', fontSize: '14px' }}>New Leads</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0 0 0' }}>0</p>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#666', fontSize: '14px' }}>Active Deals</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0 0 0' }}>0</p>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#666', fontSize: '14px' }}>Conversions</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0 0 0' }}>0</p>
        </div>
      </div>
    </main>
  )
}
