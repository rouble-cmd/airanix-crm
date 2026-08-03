export default function DealsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <h1>Deals</h1>

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '30px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <h3>Total Pipeline Value</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e40af' }}>₹0</p>
        </div>

        <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Add New Deal</h2>
        <form>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '15px' }}>
            <input placeholder="Deal Title" type="text" />
            <input placeholder="Deal Value" type="number" />
            <select>
              <option>Prospect</option>
              <option>Negotiation</option>
              <option>Proposal</option>
              <option>Active</option>
              <option>Won</option>
              <option>Lost</option>
            </select>
          </div>
          <button type="button" style={{ background: '#1e40af', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Add Deal</button>
        </form>
      </div>

      <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginTop: '30px' }}>
        <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
          No deals yet. Create your first deal above!
        </div>
      </div>
    </div>
  )
}
