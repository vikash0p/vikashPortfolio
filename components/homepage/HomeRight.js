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
      <div className="back1 rounded-2xl">
        <Image
          src="/images/illustration.png"
          alt="avatar"
          width={300}
          height={448}
          className="object-cover object-center rounded-2xl h-[448px] "
          priority={true}
          quality={100}
        />
      </div>
    </motion.div>
  );
};

export default HomeRight;
