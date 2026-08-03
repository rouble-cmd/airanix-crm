export default function ContactsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <h1>Contacts</h1>

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '30px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Add New Contact</h2>
        <form>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '15px' }}>
            <input placeholder="Name" type="text" />
            <input placeholder="Email" type="email" />
            <input placeholder="Phone" type="text" />
            <input placeholder="Company" type="text" />
            <select>
              <option>Lead</option>
              <option>Prospect</option>
              <option>Customer</option>
            </select>
          </div>
          <button type="button" style={{ background: '#1e40af', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Add Contact</button>
        </form>
      </div>

      <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginTop: '30px' }}>
        <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
          No contacts yet. Add your first contact above!
        </div>
      </div>
    </div>
  )
}
