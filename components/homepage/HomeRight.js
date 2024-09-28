"use client";
import React from 'react';
import Image from 'next/image';
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';

const HomeRight = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full max-w-xs md:max-w-sm  m-auto h-80  md:h-96 rounded-full  back2 relative"
    >
 <Image
          src={'/images/illustration.png'}
          alt='avatar'
          fill
          sizes="320px"
          className='object-cover object-center '
          priority={true}
        />
    </motion.div>
  );
};

export default HomeRight;
