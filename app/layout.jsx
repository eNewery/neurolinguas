import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Neurolinguas',
  description: 'Neurolinguas: habla inglés como un nativo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>


      <body className={inter.className}>{children}</body>
    </html>
  )
}
