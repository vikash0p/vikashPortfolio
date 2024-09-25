'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { fadeIn } from '@/variants';

const educationData = [
    {
        year: '2015-2016',
        degree: 'Secondary Education',
        university: 'Govt Model Sr Sec School',
        description:
            'Completed foundational secondary education with a focus on core subjects like Mathematics, Science, and English. Developed a strong academic base for future studies.',
    },
    {
        year: '2017-2018',
        degree: 'Senior Secondary Education',
        university: 'Govt Model Sr Sec School',
        description:
            'Specialized in the science stream with an emphasis on Physics, Chemistry, and Mathematics. Gained practical knowledge and developed analytical skills essential for higher education in technical fields.',
    },
    {
        year: '2019-2022',
        degree: 'Bachelor of Computer Applications (BCA)',
        university: 'Indira Gandhi National Open University',
        description:
            'Studied programming, data structures, algorithms, and web technologies. Developed skills in software development, database management, and computer networks, preparing for a career in IT.',
    },
    {
        year: '2022-2023',
        degree: 'Front-end Developer',
        university: 'Coding Ninjas',
        description:
            'Completed a specialized course in front-end development, mastering HTML, CSS, JavaScript, and modern frameworks like React. Built dynamic, responsive websites and applications, focusing on user experience and performance.',
    },
];


const EducationComponent = () => {
    return (
        <motion.section className="w-full  mt-10 py-5" variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: true,
                amount: 0.6
            }}>
            <h2 className="text-3xl font-bold  mb-4">My Education Qualification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educationData.map((education, index) => (
                    <motion.div
                        key={index}
                        className="back1 text-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="flex items-center mb-4">
                            <FaGraduationCap className="text-white text-3xl mr-4" />
                            <div>
                                <h3 className="text-xl font-bold">{education.degree}</h3>
                                <p className="text-sm bg-white text-red-600 inline-block px-3 py-1 rounded-md">{education.year}</p>
                            </div>
                        </div>
                        <p className="text-sm font-semibold">{education.university}</p>
                        <p className="text-sm mt-3">{education.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default EducationComponent;
