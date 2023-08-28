"use client"
import { fadeIn } from '@/variants'
import { motion } from 'framer-motion'
import React from 'react'

const AboutLeft = () => {
    return (
        <>
            <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.6
                }}
                className='text-3xl md:text-4xl lg:text-5xl '>Every great design begin withan even <span className='text-red-600'>better story</span></motion.h1>

            <motion.h1
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.6
                }}
            >
                I am <span className='font-semibold text-red-600'>Vikash</span> , a passionate front-end developer with a flair html crafting captivating digital experiences. With a strong foundation in HTML, CSS, and JavaScript, I breathe life into designs and turn visions into interactive realities.
            </motion.h1>
            <motion.h1
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.6
                }}
                className=''>
                My journey in the world of coding began with an insatiable curiosity html how pixels and lines of code come together to shape the online world we inhabit. Over the years, I &rsquo; honed my skills to not only meet the demands of modern web development but to exceed them.
            </motion.h1>
            <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.6
                }}
                className='flex justify-between gap-4 text-center lg:justify-evenly '>
                <div>
                    <h1 className='text-4xl font-semibold text-red-600 lg:text-6xl'>1+</h1>
                    <p>year of experience.</p>
                </div>
                <div>
                    <h1 className='text-4xl font-semibold text-red-600 lg:text-6xl'>10+</h1>
                    <p>15+ project completed.</p>
                </div>
            </motion.div>
        </>
    )
}

export default AboutLeft
