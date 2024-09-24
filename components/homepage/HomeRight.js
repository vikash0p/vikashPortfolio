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
      whileHover={{ scale: 1.05 }} // Framer Motion scaling on hover
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation
      className="  w-fit m-auto"
    >
      {/* Inner wrapper for the image */}
      <div className='relative w-80 h-80 rounded-full back1 '>
        <Image
          src={'/images/illustration.png'}
          alt='avatar'
          fill
          sizes="(min-width: 380px) 320px, calc(60vw + 104px)"
          className='w-full h-full mb-14 mt-10 m-auto bg-transparent object-cover object-center rounded-full '
          priority={true}
          quality={100}
        />
      </div>
    </motion.div>
  );
};

export default HomeRight;
