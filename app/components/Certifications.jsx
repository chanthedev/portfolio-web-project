import { certData } from '../../assets/assets'
import { motion } from 'framer-motion'
import React from 'react'

const Certifications = () => {
  return (
    <motion.div
      id='certifications'
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
        What I've earned
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        IT Certifications
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14 max-w-4xl mx-auto'
      >
        {certData.map(({ name, code, issuer, year }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, translateY: -4 }}
            transition={{ duration: 0.3 }}
            className='border border-gray-300 dark:border-white/30 rounded-2xl p-6
            hover:shadow-md hover:shadow-black/10 dark:hover:shadow-white/10
            hover:bg-lightHover dark:hover:bg-darkHover/50 duration-300 cursor-default'
          >
            <div className='flex items-center justify-between mb-4'>
              <span className='text-xs font-semibold tracking-widest uppercase
              text-orange-500 dark:text-orange-400'>
                {code}
              </span>
              <span className='text-xs text-gray-400 dark:text-white/50'>{year}</span>
            </div>
            <h3 className='font-semibold text-gray-800 dark:text-white leading-snug mb-2'>
              {name}
            </h3>
            <p className='text-sm text-gray-500 dark:text-white/60'>{issuer}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Certifications
