"use client"
import { project } from '@/data'
import { fadeIn } from '@/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const Projects = () => {
  return (
    
          <>
              <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{
                  once: false,
                  amount: 0.6
              }}
               class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-5xl pb-5 lg:pb-0 lg:px-24 text-white ">
                  project
              </motion.h1>
              <div className='grid w-full min-h-screen grid-cols-1 gap-5 lg:px-24 lg:py-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                  {
                      project.map((value, index) => {
                          return (
                              <motion.div 
                                  variants={fadeIn("up", 0.7)}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{
                                      once: false,
                                      amount: 0.6
                                  }}
                              key={index} className='relative overflow-hidden cursor-pointer rounded-xl group'>

                                  <Image
                                      src={value.image}
                                      alt={value.link}
                                      width={1000}
                                      height={1000}
                                      className='w-[380px] h-[380px] object-cover rounded-xl '
                                      sizes='400px'
                                      priority={true}
                                  />



                                  <div className='absolute inset-0 bg-gradient-to-l from-transparent  via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700  '>
                                      <a href={value.link} target='_blank' className='m-4 text-lg' >Go to Project</a>


                                  </div>
                                  <div className='absolute bottom-0 transition-all duration-300 translate-y-full group-hover:-translate-y-10 group-hover:lg:-translate-y-20'>
                                      <h1 className='text-2xl'>
                                          {value.title}
                                      </h1>
                                  </div>


                              </motion.div>

                          )
                      })
                  }
              </div>
          </>
  )
}

export default Projects
