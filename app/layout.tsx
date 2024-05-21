import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from './context/cotext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:"Alessio Russo Portfolio",
  description: 'web developer portfolio',
  icons:{
    icon:"/favicon-32x32.png",
    apple:"/apple-touch-icon.png",
    shortcut:"/apple-touch-icon.png",
  },
  other:{
    rel:'/favicon.ico'
  },
  manifest:"/site.webmanifest"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <form name="contact" data-netlify netlify-honeypot="bot-field" hidden>
      <input autoComplete='on' type="text" name="name" />
      <input autoComplete='on' type="email" name="email" />
      <textarea name="message"></textarea>
      </form> */}
      <AppProvider>
        {children}
      </AppProvider>
      </body>
    </html>
  )
}
