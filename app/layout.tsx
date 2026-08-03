export const metadata = {
  title: 'Airanix CRM',
  description: 'Lead Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
