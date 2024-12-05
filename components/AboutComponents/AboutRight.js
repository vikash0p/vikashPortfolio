"use client"
import { aboutData } from '@/utils/data'
import { fadeIn } from '@/utils/variants'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

// console.log(aboutData)

const AboutRight = () => {
  const [index, setIndex] = useState([0])

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.6
      }}
      className='flex flex-col'>
      <div className='mb-24 mt-10 '>
        {
          aboutData.map((value, ind) => {
            return (
              <button type="button" key={ind} className={`py-2 rounded-lg transition-colors duration-300 ease-in  px-4 mx-2 hover:bg-red-600 ${index === ind ? "bg-red-600 " : "bg-black"}`} onClick={() => setIndex(ind)}>{value.title} </button>
            )
          })
        }
      </div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.6
        }}
      >
        {
          aboutData[index].info.map((value, index) => {
            return (
              <div key={index} >
                <h1>{value.title} </h1>
              </div>
            )
          })
        }
      </motion.div>
    </motion.div>
  )
}

export default AboutRight
