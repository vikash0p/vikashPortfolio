
"use client"
import { fadeIn } from '@/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowLongUp } from 'react-icons/hi2'


const HomeLeft = () => {
    return (
        <>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.6
                }}
            >
                <h5 className='md:text-lg xl:text-xl mb-2 lg:mb-3'>Hi, my name is </h5>
                <h1 className='text-red-600 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold'>Vikash pandat.</h1>
                <h3 className='text-red-600 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold'>I build thing htmlFor the web.</h3>
            </motion.div>
            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.6
                }}
            >
                <p className='md:text-xl'>I am a website developer with  1+ experience in <span className='text-red-600 font-semibold'>React Js</span> & <span className='text-red-600 font-semibold'>Next Js.</span> I have a strong foundation in front-end and i am skilled  in creating user friendly  & responsive web applications using <span className='text-red-600 font-semibold'>react</span> and  <span className='text-red-600 font-semibold'>next</span> ecosystem.</p>
                <Link href='/' className='text-red-600 md:text-xl font-semibold underline '>Learn more</Link>

            </motion.div>
            <motion.div
                className='mt-5 md:mt-6 xl:mt-7'
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.6
                }}

            >
                <Link href={'/'} className='bg-red-600 rounded-sm px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4'>Check out my project</Link>
            </motion.div>
            <Link href={"/work"} className='group relative w-[151px] h-[151px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat mt-7 '>
                <Image
                    src={"/images/rounded-text.png"}
                    alt='Projectimage'
                    width={140}
                    height={140}
                    className='   max-w-[121px] max-h-[121px]  animate-spin-slow transition-transform'
                    sizes='141px'
                    priority={true}
                />
                <motion.div className='absolute'
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    animate="show"
                >
                    <HiArrowLongUp size={30} className='group-hover:translate-y-2 transition-transform duration-300 text-red-600 group-hover:text-red-900 ' />
                </motion.div>
            </Link>
        </>
    )
}

export default HomeLeft
