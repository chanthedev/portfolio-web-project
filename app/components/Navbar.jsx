'use client'

import { assets } from '../../assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from './ThemeProvider'

const Navbar = () => {
    
    const { isDarkMode, setIsDarkMode } = useTheme();
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
     const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden' >
        <Image src={assets.header_bg_color} alt=''className='w-full' />
    </div>

      <nav className={`w-full fixed px-4 lg:px-6 xl:px-8 py-4 flex
      items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <Link href="/" className='font-Ovo text-xl font-semibold cursor-pointer mr-14'>
            chanthedev
        </Link>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8
        rounded-full px-12 py-3 absolute left-1/2 -translate-x-1/2 translate-y-1
        ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
            <li><Link className='font-Ovo' href="/">Home</Link></li>
            <li><Link className='font-Ovo' href="/about">About</Link></li>
            <li><Link className='font-Ovo' href="/projects">Projects</Link></li>
            <li><Link className='font-Ovo' href="/contact">Contact</Link></li>
        </ul>

        <div className='flex items-center gap-3'>
            <button className='block md:hidden' onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
            </button>
            <button onClick={() => setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-5" />
            </button>
        </div>

      {/* -- ----- mobile menu ----- -- */}
    
      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
      top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

        <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 
            cursor-pointer' />
        </div>

          <li><Link className='font-Ovo' onClick={closeMenu} href="/">Home</Link></li>
          <li><Link className='font-Ovo' onClick={closeMenu} href="/about">About</Link></li>
          <li><Link className='font-Ovo' onClick={closeMenu} href="/projects">Projects</Link></li>
          <li><Link className='font-Ovo' onClick={closeMenu} href="/contact">Contact</Link></li>
      </ul>
      </nav>
    </>
  )
}

export default Navbar
