'use client'
import React from 'react'
import { FaCode, FaReact, FaHtml5 } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ServiceData = () => {
    const services = [
        {
            id: 1,
            value: 'web',
            title: 'Web Development',
            description: 'Building responsive and interactive websites.',
            icon: <FaCode size={50} className="text-white" />,
        },
        {
            id: 2,
            value: 'react',
            title: 'React.js Development',
            description: 'Creating scalable front-end applications using React.',
            icon: <FaReact size={50} className="text-sky-400" />,
        },
        {
            id: 3,
            value: 'next',
            title: 'Next.js Development',
            description: 'Building modern web applications with Next.js framework.',
            icon: <SiNextdotjs size={50} className="text-white" />,
        },
        {
            id: 4,
            value: 'html',
            title: 'HTML Development',
            description: 'Structuring websites with semantic HTML.',
            icon: <FaHtml5 size={50} className="text-orange-500" />,
        },
    ]

    // Framer Motion Variants for animation
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <motion.div
            className="grid grid-cols-1 gap-6 md:p-4 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {services.map((service) => (
                <motion.div
                    key={service.id}
                    id={`service-${service.id}`}
                    className="p-6 transition-shadow duration-300 rounded-lg shadow-lg back2"
                    whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    variants={cardVariants}
                >
                    <Link href={`/services/${service.value}`} className="flex flex-col items-center">
                        <motion.div className="mb-4" whileHover={{ rotate: 20 }}>
                            {service.icon}
                        </motion.div>
                        <h3 className="mb-2 font-semibold md:text-xl">{service.title}</h3>
                        <p className="text-sm text-center ">{service.description}</p>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default ServiceData
