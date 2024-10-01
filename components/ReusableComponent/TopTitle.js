'use client'
import Link from 'next/link';
import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { motion } from 'framer-motion';

const TopTitle = ({title}) => {
    return (
        <motion.section
            className='flex flex-row items-center justify-between w-full h-20 px-5 mt-10 rounded-md md:px-10 back2'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, y: -50 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onKeyDown={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <motion.div
                className="text-2xl md:text-4xl "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                {title}
            </motion.div>

            <motion.div
                className="flex flex-row items-center gap-1 mt-2 text-sm md:text-base md:mt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <AiFillHome />
                <Link href="/" className=''>Home</Link>
                <span className='text-white'>/</span>
                <span  className=''>{title}</span>
            </motion.div>
        </motion.section>
    );
};

export default TopTitle;
