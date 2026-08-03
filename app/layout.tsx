import './globals.css'

export const metadata = {
  title: 'Airanix CRM',
  description: 'Professional CRM System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <nav style={{ background: '#1e40af', color: 'white', padding: '16px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1>📊 Airanix CRM</h1>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
