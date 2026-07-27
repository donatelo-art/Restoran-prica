import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Restoran Priča - Luxury Danube River Seafood Restaurant',
  description: 'Premium seafood restaurant on the Danube river in Novi Banovci, Serbia. Fresh river fish, luxury dining experience, and authentic Serbian cuisine.',
  keywords: 'seafood restaurant, Danube river, Novi Banovci, Serbian cuisine, fine dining',
  openGraph: {
    title: 'Restoran Priča - Luxury Danube River Seafood Restaurant',
    description: 'Experience premium dining on the Danube river in Novi Banovci, Serbia.',
    type: 'website',
    locale: 'sr_RS',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <body>
        {children}
      </body>
    </html>
  )
}
