'use client'

import { motion } from 'framer-motion'
import { AlertCircle, ArrowRight } from 'lucide-react'

const problems = [
  {
    title: 'The Forgetting Curve Is Killing Your Progress',
    description:
      'Studies show that developers forget 90% of what they learn within a month. That perfect binary tree solution? Gone in 2 weeks. Your dynamic programming approach? A distant memory.',
    stat: '90%',
    statLabel: 'Knowledge Lost',
    impact: 'Wasted study hours',
  },
  {
    title: 'Interview Anxiety from Inconsistent Practice',
    description:
      'Random practice leads to confidence gaps. When faced with a similar problem in interviews, you struggle to recall the patterns and optimal solutions you&apos;ve studied before.',
    stat: '68%',
    statLabel: 'Failed Interviews',
    impact: 'Lost opportunities',
  },
  {
    title: 'Time Investment Without Returns',
    description:
      'Traditional grinding means spending 100+ hours memorizing solutions, only to blank out during interviews. Your valuable time deserves better returns.',
    stat: '75%',
    statLabel: 'Inefficient Study',
    impact: 'Time wasted',
  },
  {
    title: 'Pattern Recognition Paralysis',
    description:
      'Most developers can&apos;t identify problem patterns, treating each question as unique. This leads to slower problem-solving and missed optimizations in interviews.',
    stat: '82%',
    statLabel: 'Pattern Miss Rate',
    impact: 'Lower success rate',
  },
]

export function Problem() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000000,#000000),linear-gradient(to_bottom,#00000000,#000)] opacity-90"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-4">
              Why Most Interview Prep Fails
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The traditional approach to LeetCode practice is fundamentally
              broken. Here&apos;s what&apos;s holding you back.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent rounded-xl transform transition-transform group-hover:scale-[1.02]"></div>
              <div className="relative p-8 border border-gray-800 rounded-xl bg-black/50 backdrop-blur-sm hover:border-gray-700 transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-500">
                      {problem.stat}
                    </div>
                    <div className="text-sm text-gray-500">
                      {problem.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 flex items-center group-hover:text-red-400 transition-colors">
                  {problem.title}
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-400">{problem.description}</p>
                <div className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400">
                  Impact: {problem.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
