'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ContactsPage() {
  const [contacts, setContacts] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState('LEAD')

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('crm_contacts') || '[]')
    setContacts(saved)
  }, [])

  const handleAddContact = (e) => {
    e.preventDefault()
    if (!name || !email) return

    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
      company,
      status,
      createdAt: new Date().toISOString()
    }

    const updated = [...contacts, newContact]
    setContacts(updated)
    localStorage.setItem('crm_contacts', JSON.stringify(updated))
    
    setName('')
    setEmail('')
    setPhone('')
    setCompany('')
    setStatus('LEAD')
  }

  const handleDelete = (id) => {
    const updated = contacts.filter(c => c.id !== id)
    setContacts(updated)
    localStorage.setItem('crm_contacts', JSON.stringify(updated))
  }

  return (
    <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <h1>Contacts</h1>

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '30px', marginBottom: '30px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Add New Contact</h2>
        <form onSubmit={handleAddContact}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '15px' }}>
            <input placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} required />
            <input placeholder="Email *" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="LEAD">Lead</option>
              <option value="PROSPECT">Prospect</option>
              <option value="CUSTOMER">Customer</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>
          <button type="submit" className="primary">Add Contact</button>
        </form>
      </div>

      <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        {contacts.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
            No contacts yet. Add your first contact above!
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone || '-'}</td>
                  <td>{contact.company || '-'}</td>
                  <td>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      fontSize: '12px',
                      background: contact.status === 'LEAD' ? '#fef3c7' : contact.status === 'CUSTOMER' ? '#dcfce7' : '#f3f4f6',
                      color: contact.status === 'LEAD' ? '#92400e' : contact.status === 'CUSTOMER' ? '#166534' : '#374151'
                    }}>
                      {contact.status}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(contact.id)} style={{ background: '#ef4444', color: 'white', padding: '4px 8px', fontSize: '12px' }}>
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
