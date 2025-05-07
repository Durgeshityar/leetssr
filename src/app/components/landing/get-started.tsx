'use client'

import { motion } from 'framer-motion'
import { Github, Import, TrendingUp, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: Github,
    title: 'Connect Your Account',
    description:
      'Sign in with GitHub or email. Your progress syncs across devices.',
    code: `// Your progress is always synced
await auth.signIn({
  provider: 'github',
  scope: ['read:user']
})`,
  },
  {
    icon: Import,
    title: 'Import Your Study List',
    description:
      'Choose from curated problem sets or import your LeetCode favorites.',
    code: `// Import from LeetCode
const problems = await leetcode.import({
  username: 'your_handle',
  lists: ['favorites', 'todo']
})`,
  },
  {
    icon: TrendingUp,
    title: 'Start Your Journey',
    description: 'Follow your personalized study plan. Track your improvement.',
    code: `// Your learning curve
const progress = await analytics.track({
  problems_solved: 127,
  retention_rate: 94,
  streak_days: 30
})`,
  },
]

export function GetStarted() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000000,#000000),linear-gradient(to_bottom,#00000000,#000)] opacity-90"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
              Begin Your Journey
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Set up your personalized learning environment in minutes
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {steps.map((Step, index) => (
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
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Step.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-sm font-medium text-white">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 flex items-center group-hover:text-white/90 transition-colors">
                  {Step.title}
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-400 mb-6">{Step.description}</p>
                <pre className="bg-black/50 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                  <code>{Step.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg rounded-full font-medium transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center gap-2 group mb-4"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <span className="text-gray-500 text-sm">
              No credit card required • Cancel anytime
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
