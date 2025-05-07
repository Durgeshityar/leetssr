'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Clock, Brain, Target } from 'lucide-react'
import Link from 'next/link'
import { ComparisonStats } from './comparison-stats'

const benefits = [
  {
    title: '3x Faster Learning',
    description:
      'Our spaced repetition algorithm optimizes your review intervals, helping you learn 3 times faster than traditional methods.',
    icon: Clock,
    stat: '300%',
    highlight: 'Speed Improvement',
  },
  {
    title: '95% Knowledge Retention',
    description:
      'While traditional methods lead to 90% knowledge loss, our system ensures you retain 95% of what you learn.',
    icon: Brain,
    stat: '95%',
    highlight: 'Retention Rate',
  },
  {
    title: '2x Interview Success',
    description:
      'Users report doubling their interview success rates after just 4 weeks of consistent practice.',
    icon: Target,
    stat: '200%',
    highlight: 'Success Rate',
  },
  {
    title: 'Exponential Growth',
    description:
      'Each hour invested compounds, as pattern recognition and problem-solving speed improve exponentially.',
    icon: TrendingUp,
    stat: '10x',
    highlight: 'ROI',
  },
]

export function GetStarted() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Small Investment, Exponential Returns
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Just 30 minutes a day with our system equals 2 hours of
              traditional practice. Here&apos;s your ROI
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-[#0070F3] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#0070F3]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-[#0070F3]/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-[#0070F3]" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {benefit.stat}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {benefit.description}
                </p>
                <div className="text-xs font-medium text-[#0070F3]">
                  {benefit.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ComparisonStats />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center">
            <Link
              href="#"
              className="group relative inline-flex items-center justify-center gap-x-2 px-8 py-4 text-lg font-semibold text-white rounded-full bg-[#0070F3] hover:bg-[#0070F3]/90 transition-all duration-200 shadow-lg hover:shadow-[#0070F3]/25"
            >
              Start Your Growth Journey
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              30-day money-back guarantee • Start free, upgrade anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
