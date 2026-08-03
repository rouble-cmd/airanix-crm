'use client'

import { useState, useEffect } from 'react'

export default function DealsPage() {
  const [deals, setDeals] = useState([])
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [stage, setStage] = useState('PROSPECT')

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('crm_deals') || '[]')
    setDeals(saved)
  }, [])

  const handleAddDeal = (e) => {
    e.preventDefault()
    if (!title || !value) return

    const newDeal = {
      id: Date.now(),
      title,
      value: parseFloat(value),
      stage,
      createdAt: new Date().toISOString()
    }

    const updated = [...deals, newDeal]
    setDeals(updated)
    localStorage.setItem('crm_deals', JSON.stringify(updated))
    
    setTitle('')
    setValue('')
    setStage('PROSPECT')
  }

  const handleDelete = (id) => {
    const updated = deals.filter(d => d.id !== id)
    setDeals(updated)
    localStorage.setItem('crm_deals', JSON.stringify(updated))
  }

  const totalValue = deals.reduce((sum, d) => sum + d.value, 0)

  return (
    <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <h1>Deals</h1>

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '30px', marginBottom: '30px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <h3>Total Pipeline Value</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e40af' }}>₹{totalValue.toLocaleString()}</p>
        </div>

        <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Add New Deal</h2>
        <form onSubmit={handleAddDeal}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '15px' }}>
            <input placeholder="Deal Title *" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input placeholder="Deal Value *" type="number" value={value} onChange={(e) => setValue(e.target.value)} required />
            <select value={stage} onChange={(e) => setStage(e.target.value)}>
              <option value="PROSPECT">Prospect</option>
              <option value="NEGOTIATION">Negotiation</option>
              <option value="PROPOSAL">Proposal</option>
              <option value="ACTIVE">Active</option>
              <option value="WON">Won</option>
              <option value="LOST">Lost</option>
            </select>
          </div>
          <button type="submit" className="primary">Add Deal</button>
        </form>
      </div>

      <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        {deals.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
            No deals yet. Create your first deal above!
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Value</th>
                <th>Stage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal.id}>
                  <td>{deal.title}</td>
                  <td>₹{deal.value.toLocaleString()}</td>
                  <td>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      fontSize: '12px',
                      background: deal.stage === 'WON' ? '#dcfce7' : deal.stage === 'LOST' ? '#fee2e2' : '#fef3c7',
                      color: deal.stage === 'WON' ? '#166534' : deal.stage === 'LOST' ? '#991b1b' : '#92400e'
                    }}>
                      {deal.stage}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(deal.id)} style={{ background: '#ef4444', color: 'white', padding: '4px 8px', fontSize: '12px' }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  )
}
