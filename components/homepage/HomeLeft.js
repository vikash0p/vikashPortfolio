
"use client"
import { fadeIn } from '@/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowLongUp } from 'react-icons/hi2'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiNextui } from "react-icons/si";
import TypedComponent from './TypedComponent'
import TechStackDisplay from '../ReusableComponent/TechStackDisplay'
import { heading, text } from '../FontContainer'


const HomeLeft = () => {
    return (
        <>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.3
                }}
            >
                <p className='md:text-lg xl:text-xl'>Welcome to my world </p>
                <h1 className={`text-red-600 text-2xl md:text-4xl lg:text-5xl  font-semibold `}> <span className='text-white'> {`Hi, I'm`}</span> Vikash Pandat</h1>
                <TypedComponent />
            </motion.div>
            <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.4
                }}
            >
                <p className="md:text-xl ">
                    I am a website developer with 2 plus years of experience in <span className='back'>React.js</span> & <span className='back'>Next.js</span>. I have a strong foundation in front-end development and am skilled in creating user-friendly & responsive web applications using <span className='back'>React.js</span> & <span className='back'>Next.js</span>

                </p>


            </motion.div>
            <motion.div
                className='mt-5 md:mt-6 xl:mt-7'
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.5
                }}

            >
            </motion.div>
            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.4
                }}
                className='flex flex-col items-center gap-10 md:flex-row'>
                <Link href={"/work"} className='group relative w-[151px] h-[151px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat mt-7 back3 rounded-full '>
                    <div className='relative w-28 h-28 aspect-w-1 aspect-h-1'>
                        <Image
                            src={"/images/rounded-text.png"}
                            alt='Project image'
                            fill
                            className='object-cover w-full h-full transition-transform animate-spin-slow '
                            sizes='112px'
                            priority={true}
                        />
                    </div>

                    <motion.div className='absolute'
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                    >
                        <HiArrowLongUp size={30} className='font-bold text-white transition-transform duration-300 group-hover:translate-y-2 group-hover:scale-110' />
                    </motion.div>
                </Link>
                <TechStackDisplay />
            </motion.div>
        </>
    )
}

export default HomeLeft
