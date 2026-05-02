'use client'

import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-4xl mx-auto h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-12'>

        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className='shrink-0'>
          <Image src={assets.profile_img} alt='' className='rounded-full w-36 sm:w-44' />
        </motion.div>

        <div className='flex flex-col items-center gap-5'>

          <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='px-5 py-2 border border-gray-400 dark:border-white/40 rounded-full
          text-sm font-Ovo text-gray-500 dark:text-white/60 text-center'>
            Hello, I'm
          </motion.div>

          <div>
            <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-4xl sm:text-5xl font-Ovo whitespace-nowrap text-center'>
              Byeongchan Hong
            </motion.h1>

            <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='mt-2 text-3xl sm:text-4xl text-gray-500 dark:text-white/60 font-Ovo text-center'>
              Cloud Engineer
            </motion.h2>
          </div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='flex flex-col items-center gap-3'>

            <div className='flex items-center gap-3 text-gray-600 dark:text-white/70'>
              <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-5' />
              <span className='font-Ovo'>chanthedev@gmail.com</span>
            </div>

            <div className='flex items-center gap-3 text-gray-600 dark:text-white/70'>
              <svg className='w-5 h-5 shrink-0 fill-current' viewBox='0 0 24 24'>
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z'/>
              </svg>
              <span className='font-Ovo'>Busan, South Korea</span>
            </div>

          </motion.div>

</div>
      </div>
    </div>
  )
}

export default Header
