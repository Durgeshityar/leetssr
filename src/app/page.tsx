'use client'

import { Hero } from '@/components/landing/hero'
import { Problem } from '@/components/landing/problem'
import { GetStarted } from '@/components/landing/get-started'
import { Footer } from '@/components/landing/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div
          className="absolute left-0 right-0 top-0 -z-10 m-auto h-[60rem] w-[90rem] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-[100px]"
          style={{
            clipPath: 'circle(40% at 50% 0)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative">
        <Hero />
        <Problem />
        <GetStarted />
        <Footer />
      </div>
    </main>
  )
}
