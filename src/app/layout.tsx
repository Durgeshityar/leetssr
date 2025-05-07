import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LeetCode SRS - Never Forget a Coding Interview Question Again',
  description:
    'Spaced-Repetition meets Interactive Code Flashcards for FAANG success. Master DSA with smart scheduling and AI-powered hints.',
  openGraph: {
    title: 'LeetCode SRS - Never Forget a Coding Interview Question Again',
    description:
      'Spaced-Repetition meets Interactive Code Flashcards for FAANG success',
    type: 'website',
    url: 'https://leetcode-srs.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
