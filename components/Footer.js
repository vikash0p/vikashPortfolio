"use client"
import React from 'react'
import { social } from '@/data'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'


const Footer = () => {
  return (
    <div className='flex flex-col justify-between gap-4 px-5 pb-32 lg:flex-row lg:pb-0'>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.6
        }}
       className='text-center '>
        <h1>Vikash752200@gmail.com</h1>
        <h1>(+91)-9990127407 </h1>
      </motion.div>
      <motion.h1 
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.6
        }}
      className='text-center text-white '> &#169;2023 <span>Vikash.</span> All Rights Reserved</motion.h1>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.6
        }}
       className='flex items-center justify-center gap-3'>
        {
          social.map((value, index) => {
            return (
              <a key={index} href={value.href} target='_blank' >
                <h4 className='p-3 text-white transition-colors duration-300 border rounded-full border-gray hover:border-red-600 hover:text-red-500 '>{value.icon} </h4>
              </a>
            )
          })
        }
      </motion.div>
    </div>
  )
}

export default Footer
