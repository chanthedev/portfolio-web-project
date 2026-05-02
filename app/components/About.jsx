'use client'

import React from 'react'
import Image from 'next/image';
import { assets } from '../../assets/assets';
import { motion } from "motion/react"

const infoCards = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'AI School (Altor Mentoring) (Feb 2026~)\nKyung Hee Univ. B.A. International Relations',
  },
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages',
    description: 'Korean (Native)\nEnglish (Advanced) - TOEIC 955(2019)\nIndonesian (Intermediate)',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Certifications',
    description: 'AWS CCP (Achieved)',
  },
];

const certifications = [
  {
    name: 'Information Processing Engineer',
    code: '정보처리기사',
    status: 'Passed Written / Preparing for Practical',
    statusType: 'partial',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    status: 'Achieved',
    statusType: 'achieved',
  },
  {
    name: 'AWS Solutions Architect Associate',
    code: 'SAA-C03',
    status: 'In Progress',
    statusType: 'progress',
  },
];

const statusStyles = {
  achieved: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  partial:  'bg-amber-100  text-amber-700  dark:bg-amber-900/40  dark:text-amber-300',
  progress: 'bg-blue-100   text-blue-700   dark:bg-blue-900/40   dark:text-blue-300',
};

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id='about'
      className='w-full px-[12%] py-10 pt-24 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        About me
      </motion.h2>
      {/* ── Dashboard grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='mt-16 mb-12 flex flex-col gap-5'
      >

        {/* Row 1 — Current Role (full width) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='w-full rounded-2xl border border-purple-200 bg-purple-50
                     dark:border-purple-800 dark:bg-purple-900/20 p-6
                     flex flex-col sm:flex-row sm:items-center gap-4'
        >
          {/* Icon */}
          <div className='shrink-0 w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40
                          flex items-center justify-center text-purple-500 dark:text-purple-300'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={1.8} viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z' />
              <path strokeLinecap='round' strokeLinejoin='round' d='M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2' />
            </svg>
          </div>

          {/* Content */}
          <div className='flex-1 min-w-0'>
            <p className='text-xs font-semibold uppercase tracking-widest text-purple-500 dark:text-purple-400 mb-1 font-Ovo'>
              Current Role
            </p>
            <p className='font-semibold text-gray-800 dark:text-white font-Ovo text-base'>
              University Staff, EduTech Support Team
            </p>
            <p className='text-sm text-gray-500 dark:text-white/50 font-Ovo mt-0.5'>
              LMS Management · English Helpdesk (International Students &amp; Faculty)
            </p>
          </div>

          {/* Period badge */}
          <span className='shrink-0 self-start sm:self-center text-xs font-Ovo font-medium
                           px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/50
                           text-purple-600 dark:text-purple-300 whitespace-nowrap'>
            Dec, 2025 – Present
          </span>
        </motion.div>

        {/* Row 2 — Info cards (Education · Languages · Certifications) */}
        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
          {infoCards.map(({ icon, iconDark, title, description }, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index + 0.4 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className='border-[0.5px] border-gray-400 rounded-2xl p-6 cursor-pointer
                         hover:bg-lightHover duration-300
                         hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
            >
              <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-1' />
              <h3 className='mt-4 mb-3 font-semibold text-gray-700 dark:text-white font-Ovo'>{title}</h3>
              <p className='text-gray-600 text-sm dark:text-white/80 whitespace-pre-line leading-relaxed font-Ovo'>
                {description}
              </p>
            </motion.li>
          ))}
        </ul>

      </motion.div>

      {/* ── Divider ── */}
      <div className='w-full h-px bg-gray-200 dark:bg-white/10 mb-12' />

      {/* ── Detailed Certifications ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3 className='text-2xl font-Ovo mb-6 text-center'>Certifications</h3>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
          {certifications.map(({ name, code, status, statusType }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i + 0.2 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className='border-[0.5px] border-gray-300 dark:border-white/20 rounded-2xl p-5
                         bg-white/60 dark:bg-white/5 backdrop-blur-sm
                         hover:shadow-black dark:hover:shadow-white duration-300'
            >
              <p className='text-xs text-gray-400 dark:text-white/40 font-Ovo mb-1'>{code}</p>
              <p className='font-semibold text-gray-800 dark:text-white font-Ovo text-sm mb-3 leading-snug'>{name}</p>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[statusType]}`}>
                {status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
