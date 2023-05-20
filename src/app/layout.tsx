import './globals.css'

export const metadata = {
  title: 'Platzi React With Ts',
  description: 'Learing ts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
