'use client'

import { motion } from 'framer-motion'
import { Brain, Sparkles, Code2, GitBranch } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Neural-Optimized Scheduling',
    description:
      'Our ML model predicts your forgetting curve for each problem type. Review exactly when your neurons need it.',
    code: `// Your memory curve for Binary Trees
const retention = await brain.predict({
  problemType: 'BinaryTree',
  lastReview: '2024-03-15',
  successRate: 0.85
})`,
  },
  {
    icon: Code2,
    title: 'Interactive Code Environment',
    description:
      'Write, run, and test solutions in your browser. Real-time compilation and test cases, just like the real thing.',
    code: `function mergeSortedLists(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  
  return l1.val < l2.val
    ? { val: l1.val, next: mergeSortedLists(l1.next, l2) }
    : { val: l2.val, next: mergeSortedLists(l1, l2.next) }
}`,
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Hints',
    description:
      'Stuck? Our GPT-4 tutor provides incremental hints, from subtle nudges to detailed approach breakdowns.',
    code: `// Hint level 1: "Think about using a hashmap"
// Hint level 2: "Track complement values"
// Hint level 3: Detailed approach revealed`,
  },
  {
    icon: GitBranch,
    title: 'Solution Versioning',
    description:
      'Track your solution evolution over time. Compare approaches, measure improvement, and build confidence.',
    code: `// Version 1: O(n²) nested loops
// Version 2: O(n) with extra space
// Version 3: O(n) optimal approach
git diff v1 v3 solution.ts`,
  },
]

export function Solution() {
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
              Not Just Another Flashcard App
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We've built the IDE-integrated spaced repetition system we wished
              existed
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((Feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl transform transition-transform group-hover:scale-[1.02]"></div>
              <div className="relative p-8 border border-gray-800 rounded-xl bg-black/50 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-lg bg-gray-800 flex items-center justify-center mb-6">
                  <Feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {Feature.title}
                </h3>
                <p className="text-gray-400 mb-6">{Feature.description}</p>
                <pre className="bg-black/50 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                  <code>{Feature.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
