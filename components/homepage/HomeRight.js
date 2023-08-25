"use client";
import React from 'react'
import Image from "next/image"
import { fadeIn } from '@/variants'
import { motion } from 'framer-motion'

const HomeRight = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.6
      }}
    >
      <Image
        src={'/images/vikash.png'}
        alt='avatar'
        width={300}
        height={300}
        sizes='400px'
        className='w-80 h-[448.3px] mb-14 mt-3 m-auto '
        priority={true}
      />
    </motion.div>
  )
}

export default HomeRight
