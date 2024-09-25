"use client"
import { project } from '@/data'
import { fadeIn } from '@/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi';


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
                                key={index} className='relative overflow-hidden cursor-pointer  group'>

                                <div className='relative w-full max-w-sm h-[500px] lg:h-96'>
                                    <Image
                                        src={value.image}
                                        alt={value.link}
                                        fill
                                        className='w-full h-full object-cover object-top '
                                        sizes='400px'
                                        priority={true}
                                        quality={100}
                                    />

                                </div>



                                <div className='absolute bottom-0 left-0 right-0 h-12 group-hover:h-28 transition-all duration-500'>
                                    {/* Background with opacity */}
                                    <div className='absolute inset-0 opacity-80 back1 transition-all duration-500 group-hover:h-28'></div>

                                    {/* Foreground content (Text and Link) */}
                                    <div className='relative py-3 flex flex-col items-center gap-3'>
                                        <p className='text-xl uppercase'>{value.title}</p>
                                        <div className='opacity-0 group-hover:opacity-100 transition-all duration-700'>
                                            <Link href={value.link} target='_blank' className='back2 px-5 py-2 rounded-sm flex items-center gap-2'>
                                                Go to Project
                                                {/* React Icon for the arrow */}
                                                <FiArrowRight className="text-xl group-hover:translate-x-3 transition-all duration-300" />
                                            </Link>
                                        </div>
                                    </div>
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
