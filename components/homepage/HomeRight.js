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
      className="back4  m-auto w-80 h-80 md:w-[450px] md:h-[450px] relative overflow-hidden"
    >
      <div className="relative w-full h-full">
        <Image
          src={'/images/vikash.webp'}
          alt='avatar'
          fill
          className='object-cover object-center'
          priority={true}
        />
      </div>
    </motion.div>
  );
};

export default HomeRight;
