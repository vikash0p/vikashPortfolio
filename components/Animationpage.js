"use client";
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Transiton from './Transiton'

import { usePathname } from 'next/navigation';

const Animationpage = ({ children }) => {
    
    const routers=usePathname();
    console.log(routers)
    
    return (
        <AnimatePresence mode='wait'>
            <motion.div key={routers} className='h-full' >
                <Transiton />
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Animationpage
