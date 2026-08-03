import Link from 'next/link'

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
        <Link href="/dashboard">
          <div style={{ 
            padding: '20px', 
            background: 'white', 
            borderRadius: '8px', 
            cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}>
            <h3>📈 Dashboard</h3>
            <p>View your CRM metrics and statistics</p>
          </div>
        </Link>

        <Link href="/contacts">
          <div style={{ 
            padding: '20px', 
            background: 'white', 
            borderRadius: '8px', 
            cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}>
            <h3>👥 Contacts</h3>
            <p>Manage your leads and customers</p>
          </div>
        </Link>

        <Link href="/deals">
          <div style={{ 
            padding: '20px', 
            background: 'white', 
            borderRadius: '8px', 
            cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}>
            <h3>💰 Deals</h3>
            <p>Track your sales pipeline</p>
          </div>
        </Link>
      </div>
    </main>
  )
}
