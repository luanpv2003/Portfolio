import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Phan Văn Luân',
  description: 'Chào mừng bạn đến với CV của Phan Văn Luân <3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
