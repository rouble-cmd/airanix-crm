export default function Home() {
  return (
    <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2>Welcome to Airanix CRM</h2>
        <p style={{ color: '#666', marginTop: '10px' }}>
          Professional Lead Management and Customer Relationship Management System
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #ddd' }}>
          <h3>📊 CRM System</h3>
          <p style={{ color: '#666', marginTop: '10px' }}>Professional customer relationship management</p>
        </div>

        <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #ddd' }}>
          <h3>📈 Lead Management</h3>
          <p style={{ color: '#666', marginTop: '10px' }}>Track and manage your sales pipeline</p>
        </div>

        <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #ddd' }}>
          <h3>💼 Business Tools</h3>
          <p style={{ color: '#666', marginTop: '10px' }}>Complete CRM solution for your business</p>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', background: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
        <p style={{ color: '#666' }}>Airanix CRM - Professional Sales Management Platform</p>
      </div>
    </main>
  )
}
