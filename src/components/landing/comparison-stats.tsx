'use client'

import { motion } from 'framer-motion'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const hiringData = {
  labels: ['Traditional Preparation', 'With Leetcode'],
  datasets: [
    {
      label: 'Interview Success Rate',
      data: [40, 80], // 40% vs 80% success rate
      backgroundColor: ['rgba(75, 85, 99, 0.5)', 'rgba(0, 112, 243, 0.5)'],
      borderColor: ['rgb(75, 85, 99)', 'rgb(0, 112, 243)'],
      borderWidth: 1,
    },
  ],
}

const salaryData = {
  labels: ['Front-End Dev', 'DSA Expert'],
  datasets: [
    {
      label: 'Average Annual Salary (K)',
      data: [112, 165], // Based on the provided data
      backgroundColor: ['rgba(75, 85, 99, 0.5)', 'rgba(0, 112, 243, 0.5)'],
      borderColor: ['rgb(75, 85, 99)', 'rgb(0, 112, 243)'],
      borderWidth: 1,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: (context: any) => {
          if (context.datasetIndex === 0) {
            if (context.parsed.y) {
              return (
                context.dataset.label +
                ': ' +
                context.parsed.y +
                (context.datasetIndex === 0 ? '%' : 'K')
              )
            }
          }
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
  },
}

export function ComparisonStats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              The Numbers Speak for Themselves
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our data-driven approach delivers measurable results in both
              interview success and salary outcomes
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Interview Success Rate
            </h3>
            <div className="h-[300px]">
              <Bar data={hiringData} options={options} />
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Users report 2x higher interview success rates after just 4 weeks
              of consistent practice
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Salary Comparison
            </h3>
            <div className="h-[300px]">
              <Bar data={salaryData} options={options} />
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              DSA experts command 47% higher salaries compared to typical
              front-end developers
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-[#0070F3]/10 rounded-lg px-6 py-3 border border-[#0070F3]/20">
            <p className="text-[#0070F3] font-semibold">
              76% of employers prioritize demonstrated DSA skills over formal
              degrees
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
