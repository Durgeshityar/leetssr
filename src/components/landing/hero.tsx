'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Brain, Github } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { WaitlistModal } from '@/components/waitlist/waitlist-modal'

export function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />

      {/* Animated mesh gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-800 to-gray-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto"
      >
        <div className="text-center">
          {/* Open Source Badge */}
          <Link
            href={'https://github.com/Durgeshityar/leetssr'}
            target="_blank"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 mb-8 hover:border-gray-500 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
            >
              <Github className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-all">
                Open Source
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="block text-white pb-4">Master LeetCode with</span>
            <span className="block bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Spaced Repetition
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Stop cramming. Start retaining. Our spaced repetition system helps
            you master algorithmic problems by optimizing when you review them.
            Increase your problem-solving retention by up to 95%.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-x-2 rounded-full px-8 py-3 text-base font-semibold text-white bg-white/10 hover:bg-white/20 transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-colors duration-300">
              <div className="h-14 w-14 rounded-xl bg-white/5 flex items-center justify-center">
                <Brain className="h-7 w-7 text-gray-400" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400">Retention Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-colors duration-300">
              <div className="h-14 w-14 rounded-xl bg-white/5 flex items-center justify-center">
                <Code2 className="h-7 w-7 text-gray-400" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-400">Problems</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom mesh gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gray-800 to-gray-700 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse" />
      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </section>
  )
}
