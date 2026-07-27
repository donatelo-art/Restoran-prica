import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://restoranprica.com'),
  title: 'Restoran Priča — riba sa žara na obali Dunava | Novi Banovci',
  description:
    'Restoran Priča u Novim Banovcima: sveža rečna riba sa žara, riblja čorba, morski plodovi i vina domaćih vinarija — sto na samoj obali Dunava.',
  keywords: [
    'restoran Novi Banovci',
    'riblji restoran Dunav',
    'rečna riba sa žara',
    'riblja čorba',
    'restoran na Dunavu',
    'Restoran Priča',
  ],
  openGraph: {
    title: 'Restoran Priča — riba sa žara na obali Dunava',
    description:
      'Sveža rečna riba sa žara, vina domaćih vinarija i sto tik uz vodu. Novi Banovci, na obali Dunava.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'Restoran Priča',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr-Latn">
      <body>{children}</body>
    </html>
  )
}
