'use client'
import Link from 'next/link';
import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { motion } from 'framer-motion';

const TopTitle = ({title}) => {
    return (
        <motion.section
            className='w-full h-20 flex flex-col md:flex-row justify-between px-5 md:px-10 mt-10 items-center back1 rounded-md'
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
                className="flex flex-row gap-1 items-center text-sm md:text-base mt-2 md:mt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <AiFillHome />
                <Link href="/" className=''>Home</Link>
                <span className='text-gray-400'>/</span>
                <Link href="/about" className='text-red-600 hover:text-red-800 transition-colors'>{title}</Link>
            </motion.div>
        </motion.section>
    );
};

export default TopTitle;
