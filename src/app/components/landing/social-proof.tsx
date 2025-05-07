'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const testimonials = [
  {
    quote:
      'I nailed my FAANG offer after 3 months of daily SRS reviews. The spaced repetition really works!',
    author: 'Sarah Chen',
    role: 'Software Engineer @ Google',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote:
      'This tool completely changed how I prepare for technical interviews. The retention improvement is real.',
    author: 'Michael Park',
    role: 'Senior Developer @ Meta',
    image: 'https://i.pravatar.cc/150?img=2',
  },
]

export function SocialProof() {
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
              Proven Results
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join thousands of engineers who&apos;ve transformed their
              interview preparation
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl transform transition-transform group-hover:scale-[1.02]"></div>
            <div className="relative p-8 border border-gray-800 rounded-xl bg-black/50 backdrop-blur-sm">
              <div className="text-5xl font-bold text-white mb-2">70%</div>
              <p className="text-gray-400">Average Retention Improvement</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl transform transition-transform group-hover:scale-[1.02]"></div>
            <div className="relative p-8 border border-gray-800 rounded-xl bg-black/50 backdrop-blur-sm">
              <div className="text-5xl font-bold text-white mb-2">50%</div>
              <p className="text-gray-400">Less Study Time Required</p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent rounded-xl"></div>
              <div className="relative p-8 border border-gray-800 rounded-xl backdrop-blur-sm hover:border-gray-700 transition-colors">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full ring-1 ring-gray-800"
                  />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg rounded-full font-medium transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Join 5,000+ Engineers
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
