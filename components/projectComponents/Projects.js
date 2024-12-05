"use client"
import { project } from '@/utils/data'
import { fadeIn } from '@/utils/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi';


const Projects = () => {

    const imageLoader = ({ src, width, quality }) => {
        return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
    }
    return (

        <>

            <div className='grid w-full grid-cols-1 mt-20 gap-y-10 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
                                key={index} className='relative overflow-hidden cursor-pointer back2 group'>

                                <div className='relative w-full max-w-sm h-[500px] lg:h-96'>
                                    <Image
                                        src={value.image}
                                        alt={value.link}
                                        fill
                                        className='object-cover object-top w-full h-full '
                                        sizes="(min-width: 1280px) 305px, (min-width: 1040px) calc(23.18vw + 92px), (min-width: 420px) 384px, calc(92vw + 16px)"
                                        quality={75}
                                        loading='eager'
                                    // loader={imageLoader}

                                    />

                                </div>



                                <div className='absolute bottom-0 left-0 right-0 h-12 transition-all duration-500 group-hover:h-28'>
                                    {/* Background with opacity */}
                                    <div className='absolute inset-0 transition-all duration-500 opacity-80 back1 group-hover:h-28'></div>

                                    {/* Foreground content (Text and Link) */}
                                    <div className='relative flex flex-col items-center gap-3 py-3'>
                                        <p className='text-xl uppercase'>{value.title}</p>
                                        <div className='transition-all duration-700 opacity-0 group-hover:opacity-100'>
                                            <Link href={value.link} target='_blank' className='flex items-center gap-2 px-5 py-2 rounded-sm back2'>
                                                Go to Project
                                                {/* React Icon for the arrow */}
                                                <FiArrowRight className="text-xl transition-all duration-300 group-hover:translate-x-3" />
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
