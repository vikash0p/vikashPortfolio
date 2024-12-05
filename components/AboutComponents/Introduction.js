'use client'
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";



const Introdction = () => {
    return (
        <section className='space-y-5'>
            <motion.div
                className=''
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.6
                }}
            >
                <h1 className={`back text-3xl md:text-4xl lg:text-5xl  font-semibold `}> Vikash Pandat</h1>
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
                <p className="md:text-xl">
                    I am a website developer with 2 plus years of experience in React.js & Next.js. I have a strong foundation in front-end development and am skilled in creating user-friendly & responsive web applications using{" "}
                    <span className="flex flex-row gap-2 items-center">
                        <span className="text-2xl text-cyan-600"><FaReact /></span> &{" "}
                        <span className="text-2xl flex flex-row gap-2 items-center "><SiNextdotjs /> ecosystem</span>
                    </span>
                </p>


            </motion.div>
        </section>
    )
}

export default Introdction
