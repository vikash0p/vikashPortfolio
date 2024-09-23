"use client"
import { navData } from '@/data'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()

    return (
        <nav role="navigation" aria-label="Main Navigation" className='rounded-full z-30 fixed lg:top-[25%] lg:w-16 lg:left-[94%] lg:bottom-[25%] bottom-2 left-2 right-2 flex flex-row lg:flex-col back1'>
            {
                navData.map((value, index) => (
                    <Link
                        key={index}
                        href={value.path}
                        rel="preload"
                        crossOrigin="anonymous"
                        aria-label={value.name}  // Accessible label for screen readers
                        className={`text-xl py-3 px-3 m-auto xl:text-2xl cursor-pointer hover:text-red-500 transition-colors duration-300 ${pathname === value.path ? "text-red-500" : "text-white"}`}
                    >
                        <h1>{value.icon} <span className="sr-only">{value.name}</span></h1>  {/* Screen reader only text */}
                    </Link>
                ))
            }
        </nav>
    )
}

export default Header
