'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiFramer, SiRedux } from 'react-icons/si';

const jobData = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Hobit Technologies Pvt Ltd',
        period: '04/2023 - 01/2024',
        description: 'Developed and enhanced user interfaces for web applications using React, Next.js, and Tailwind CSS.',
        technologies: [{ name: 'HTML', icon: <FaHtml5 className="text-orange-600" />, proficiency: 90 },
            { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" />, proficiency: 85 },
            { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, proficiency: 80 },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" />, proficiency: 75 },
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, proficiency: 65 },
            { name: 'React.js', icon: <FaReact className="text-cyan-500" />, proficiency: 85 },
            { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, proficiency: 80 },
            { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-600" />, proficiency: 70 },
            ],
    },
    {
        id: 2,
        title: 'Frontend Developer (Intern)',
        company: 'Imperial Auto Industries Ltd.',
        period: '07/2022 - 03/2023',
        description: 'Assisted in web application development, learning frontend technologies like React and Bootstrap.',
        technologies: [{ name: 'HTML', icon: <FaHtml5 className="text-orange-600" />, proficiency: 90 },
            { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" />, proficiency: 85 },
            { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, proficiency: 80 },
            { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" />, proficiency: 70 },
            { name: 'React.js', icon: <FaReact className="text-cyan-500" />, proficiency: 85 },
            { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" />, proficiency: 75 },
            { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-600" />, proficiency: 70 },
           ],
    },
];

const JobComponent = () => {
    return (
        <div className="py-8 mx-auto mt-10 max-w-7xl">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
             className="mb-8 text-3xl font-bold text-center">Job Experience</motion.h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {jobData.map((job, index) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="flex flex-col p-5 rounded-lg back2 gap-y-1 "
                    >
                        <h2 className="text-xl font-semibold md:text-2xl">{job.title}</h2>
                        <p className=" font-monoedium text-b md:text-lg">{job.company}</p>
                        <p className="text-sm ">{job.period}</p>
                        <p className="text-sm md:text-base">{job.description}</p>
                        <div className="flex space-x-3">
                            {job.technologies.map((value, index) => (
                                <span className='text-2xl' key={index} >{value.icon} </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default JobComponent;

