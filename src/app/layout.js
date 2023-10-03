import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'News homepage',
  description: 'This is a solution to the News homepage challenge on Frontend Mentor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter text-base`}>{children}</body>
    </html>
  )
}
