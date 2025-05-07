'use client'

import { motion } from 'framer-motion'

const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Features', href: '#' },
  { title: 'Pricing', href: '#' },
  { title: 'Blog', href: '#' },
  { title: 'Contact', href: '#' },
]

const HNLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-400"
  >
    <path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" />
  </svg>
)

const DevToLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-400"
  >
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                {link.title}
              </motion.a>
            ))}
          </div>

          {/* Featured In */}
          <div className="flex items-center justify-end gap-6">
            <span className="text-gray-500 text-sm">As seen on:</span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.1 }}
              className="hover:opacity-75 transition-opacity"
            >
              <HNLogo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.2 }}
              className="hover:opacity-75 transition-opacity"
            >
              <DevToLogo />
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            © 2025 LeetCode SRS.{' '}
            <a href="#" className="hover:text-teal-500">
              Privacy
            </a>{' '}
            ·{' '}
            <a href="#" className="hover:text-teal-500">
              Terms
            </a>
          </p>
        </div>

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'LeetCode SRS',
              applicationCategory: 'EducationalApplication',
              description:
                'Spaced-Repetition System for mastering coding interview questions',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </div>
    </footer>
  )
}
