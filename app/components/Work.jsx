'use client'

import React from 'react'
import { motion } from "motion/react"

function Work() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 pt-24 scroll-mt-20'
    >
        <motion.h4 
        initial={{ y:-20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My portfolio
      </motion.h4>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}    
        className='grid grid-cols-auto mt-10 gap-5 dark:text-black'
      >
        {/* Projects will be added here */}
      </motion.div>
    </motion.div>
  )
}
  

export default Work
