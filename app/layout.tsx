import React from 'react';
import './globals.css'

export const metadata = {
  title: 'GitHub Stats',
  description: 'GitHub repository statistics viewer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
