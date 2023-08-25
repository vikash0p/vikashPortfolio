"use client";
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Transiton from './Transiton'

import { usePathname } from 'next/navigation';

const Animationpage = ({ children }) => {
    const router=usePathname();
    // console.log(router)
    return (
        <AnimatePresence mode='wait'>
            <motion.div key={router} className='h-full' >
                <Transiton />
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Animationpage
