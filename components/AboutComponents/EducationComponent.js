'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { fadeIn } from '@/utils/variants';

const educationData = [
    {
        degree: 'Secondary Education',
        university: 'Govt Model Sr Sec School',
        description:
            'Completed foundational secondary education with a focus on core subjects like Mathematics, Science, and English. Developed a strong academic base for future studies.',
    },
    {
        degree: 'Senior Secondary Education',
        university: 'Govt Model Sr Sec School',
        description:
            'Specialized in the science stream with an emphasis on Physics, Chemistry, and Mathematics. Gained practical knowledge and developed analytical skills essential for higher education in technical fields.',
    },
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        university: 'Indira Gandhi National Open University',
        description:
            'Studied programming, data structures, algorithms, and web technologies. Developed skills in software development, database management, and computer networks, preparing for a career in IT.',
    },
    {
        degree: 'Front-end Developer',
        university: 'Coding Ninjas',
        description:
            'Completed a specialized course in front-end development, mastering HTML, CSS, JavaScript, and modern frameworks like React. Built dynamic, responsive websites and applications, focusing on user experience and performance.',
    },
];


const EducationComponent = () => {
    return (
        <section className="w-full py-5 mt-10" variants={fadeIn("up", 0.6)}
        >
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-4 text-xl font-bold text-center md:text-3xl">My Education Qualification</motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {educationData.map((education, index) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-lg shadow-lg back2"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="flex items-center mb-4">
                            <FaGraduationCap className="mr-4 text-3xl text-white" />
                            <div>
                                <h3 className="text-xl font-bold">{education.degree}</h3>
                            </div>
                        </div>
                        <p className="text-sm font-semibold">{education.university}</p>
                        <p className="mt-3 text-sm">{education.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EducationComponent;
