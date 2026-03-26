import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
            alt=''className='w-6' />
            chanthedev@gmail.com
        </div>
      </div>

    <div className='flex flex-col items-center gap-4 text-center border-t border-gray-400
    mx-[10%] mt-12 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:text-left'>
        <p className='shrink-0'>ⓒ 2026 chanthedev. All rights reserved.</p>
        <ul className='flex items-center justify-center gap-5 list-none sm:justify-end'>
            <li>
              <a target='_blank' href='https://www.linkedin.com/in/byeongchan-hong-3a7357353/' aria-label='LinkedIn'
              className='flex items-center justify-center w-9 h-9 rounded-full border border-gray-400 dark:border-white/40 hover:border-gray-600 dark:hover:border-white transition-colors duration-300'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                </svg>
              </a>
            </li>
            <li>
              <a target='_blank' href='https://github.com/chanthedev' aria-label='GitHub'
              className='flex items-center justify-center w-9 h-9 rounded-full border border-gray-400 dark:border-white/40 hover:border-gray-600 dark:hover:border-white transition-colors duration-300'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                  <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'/>
                </svg>
              </a>
            </li>
            <li>
              <a target='_blank' href='https://chanthedev.tistory.com/' aria-label='Blog'
              className='flex items-center justify-center w-9 h-9 rounded-full border border-gray-400 dark:border-white/40 hover:border-gray-600 dark:hover:border-white transition-colors duration-300'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                  <path d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z'/>
                </svg>
              </a>
            </li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
