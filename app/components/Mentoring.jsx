import { mentoringData } from '@/assets/assets'
import { motion } from 'framer-motion'
import React from 'react'

const Mentoring = () => {
  return (
    <motion.div
      id='mentoring'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Experience
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        IT Mentoring & Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-3xl mx-auto mt-14 flex flex-col gap-8'
      >
        {mentoringData.map(({ title, role, period, description }, index) => (
          <motion.div
            key={index}
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            className='flex gap-6 items-start border-l-2 border-gray-300
            dark:border-white/30 pl-6'
          >
            <div className='flex-1'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1'>
                <h3 className='font-semibold text-gray-800 dark:text-white text-lg'>
                  {title}
                </h3>
                <span className='text-sm text-gray-400 dark:text-white/50 shrink-0'>
                  {period}
                </span>
              </div>
              <p className='text-sm font-medium text-orange-500 dark:text-orange-400 mb-3'>
                {role}
              </p>
              <p className='text-gray-600 dark:text-white/70 font-Ovo text-sm leading-relaxed'>
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Mentoring
