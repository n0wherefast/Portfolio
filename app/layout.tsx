import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from './context/cotext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:"Alessio Russo Portfolio",
  description: 'web developer portfolio',
  icons:{
    icon:"/favicon-32x32.svg",
    apple:"/apple-touch-icon.svg",
    shortcut:"/favicon.ico",
  },
  other:{
    rel:'/favicon.ico'
  },
  manifest:"/site.webmanifest",
  openGraph: {
    title: 'Alessio Russo Portfolio',
    description: 'Web developer portfolio — Alessio Russo',
    url: '/',
    siteName: 'Alessio Russo',
    images: [
      {
        url: '/favicon-32x32.svg',
        width: 600,
        height: 315,
        alt: 'Alessio Russo Portfolio'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alessio Russo Portfolio',
    description: 'Web developer portfolio — Alessio Russo',
    images: ['/favicon-32x32.svg']
  }
  ,viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
      <AppProvider>
        {children}
      </AppProvider>
      </body>
    </html>
  )
}
