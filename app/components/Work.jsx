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
        className='grid lg:grid-cols-[320px_1fr] grid-cols-1 mt-10 gap-5 dark:text-black'
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-[0_28px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80'
        >
          <p className='mb-3 text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400'>Portfolio Site</p>
          <h3 className='mb-4 text-2xl font-bold'>chanthedev website</h3>
          <p className='mb-5 text-sm leading-7 text-slate-600 dark:text-slate-300'>이 사이트는 제 포트폴리오 프로젝트로, 프론트엔드와 백엔드, AI 챗 기능을 함께 구현했습니다.</p>
          <div className='space-y-3 text-sm'>
            <p className='font-semibold text-slate-800 dark:text-slate-100'>적용 기술</p>
            <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
              <li>Next.js / React</li>
              <li>Tailwind CSS</li>
              <li>Node.js / API 라우트</li>
              <li>AI 챗/OpenAI 연동</li>
            </ul>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}
  

export default Work
