"use client"
import { navData } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()

    return (
        <nav role="navigation" aria-label="Main Navigation" className='rounded-full z-30 fixed lg:top-[25%] lg:w-16 lg:left-[94%] lg:bottom-[25%] bottom-2 left-2 right-2 flex flex-row lg:flex-col back3'>
            {
                navData.map((value, index) => (
                    <Link
                        key={index}
                        href={value.path}
                        passHref
                        // legacyBehavior
                        // scroll={false}
                        aria-label={value.name}
                        className={`relative group text-xl py-3 px-3 m-auto xl:text-2xl cursor-pointer hover:text-red-500 transition-colors duration-300 ${pathname === value.path ? "text-red-500" : "text-white"}`}
                    >
                        {/* Icon */}
                        <h1>{value.icon} <span className="sr-only">{value.name}</span></h1>

                        {/* Tooltip with the name on hover and arrow */}
                        <span className=" hidden lg:block absolute w-20 left-[-180%] top-1/2 transform  -translate-y-1/2 bg-red-500  text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {value.name}
                            {/* Arrow for tooltip */}
                            <span className="absolute left-[100%] top-1/2 bg-red-500  -translate-y-1/2 -ml-2 w-4 h-4 rotate-45 border-t-4 border-b-4 border-l-4 border-transparent border-l-back1"></span>
                        </span>
                    </Link>
                ))
            }
        </nav>
    )
}

export default Header
