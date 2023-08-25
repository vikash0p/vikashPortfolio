"use client"
import { navData } from '@/data'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'



const Header = () => {
    const pathname = usePathname()

    return (
        <divi className=' rounded-full  z-50 fixed lg:top-[25%] lg:w-16   lg:left-[94%] lg:bottom-[25%] bottom-2 left-2 right-2 flex flex-row lg:flex-col bg-violet-800  md:bg-white/10'>
            {
                navData.map((value, index) => {
                    return (
                        <Link key={index} href={value.path} className={`text-xl py-3 px-3 m-auto  xl:text-2xl cursor-pointer hover:text-violet-500 
                        transition-colors duration-300 ${pathname === value.path ? "text-red-500" : " text-white"}`} >
                            <h1>{value.icon} </h1>
                        </Link>
                    )
                })
            }
        </divi>
    )
}

export default Header
