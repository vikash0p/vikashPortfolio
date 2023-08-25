"use client";
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Transiton from './Transiton'


import { useRouter } from 'next/router';

const Animationpage = ({ children }) => {
    const router=useRouter();
    // console.log(router)
    return (
        <AnimatePresence mode='wait'>
            <motion.div key={router.route} className='h-full' >
                <Transiton />
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Animationpage
