'use client'

import { motion } from 'framer-motion'
import { AlertCircle, ArrowRight } from 'lucide-react'

const problems = [
  {
    title: 'The Forgetting Curve Strikes Again',
    description:
      'That perfect binary tree implementation? Gone in 2 weeks. Your brilliant dynamic programming solution? A distant memory. Break the cycle of cramming and forgetting.',
    stat: '92%',
    statLabel: 'Knowledge Loss Rate',
  },
  {
    title: 'Random Practice is Just Random',
    description:
      'Grinding LeetCode without a system is like deploying without CI/CD. Your brain needs structured repetition to build lasting neural pathways.',
    stat: '76%',
    statLabel: 'Inefficient Study Time',
  },
  {
    title: 'Static Learning in a Dynamic World',
    description:
      'Reading solutions is like watching someone code. You need to write, run, and debug real code to build muscle memory. Time to get your hands dirty.',
    stat: '83%',
    statLabel: 'Theory-Practice Gap',
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
              The Interview Prep Problem
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Traditional methods are failing engineers. Here&apos;s why.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
