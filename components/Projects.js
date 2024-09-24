"use client"
import { project } from '@/data'
import { fadeIn } from '@/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const Projects = () => {
  return (

          <>

              <div className='grid w-full  mt-20 grid-cols-1 gap-y-10 gap-x-5   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                  {
                      project.map((value, index) => {
                          return (
                              <motion.div
                                  variants={fadeIn("up", 0.7)}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{
                                      once: true,
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



                                  <div className='absolute inset-0 back1 opacity-0 group-hover:opacity-90 transition-all duration-700  '>
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
