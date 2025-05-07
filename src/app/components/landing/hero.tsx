'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-block">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 backdrop-blur-sm">
              <span className="w-2 h-2 mr-2 bg-teal-400 rounded-full animate-pulse"></span>
              Now in Beta • 500 Early Access Spots Left
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Your Brain Deserves{' '}
            <span className="text-white">Better Algorithms</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stop treating your memory like a hash table with collisions. Start
            using the most sophisticated spaced repetition algorithm for coding
            interviews.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg rounded-full font-medium transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center gap-2 group"
          >
            Start Training Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <span className="text-gray-500 text-sm">
            No credit card • 14-day free trial • Cancel anytime
          </span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            ['5,000+', 'Active Users'],
            ['98%', 'Success Rate'],
            ['150+', 'FAANG Offers'],
          ].map(([stat, label]) => (
            <div key={label} className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white">{stat}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
