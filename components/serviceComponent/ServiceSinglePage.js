'use client'

import React from 'react'
import { mysServiceData } from './myServiceData'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa';


const ServiceSinglePage = ({ id }) => {
    const service = mysServiceData.find((item) => item.value === id);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, duration: 0.8 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className='w-full flex flex-col lg:flex-row gap-10'>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="p-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        key={service.value}
                        className="back1 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
                        variants={cardVariants}
                    >
                        <Link href={`/services/${service.value}`}>
                            <div className="relative h-80 md:h-[500px] w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    priority={true}
                                    className="rounded-t-lg w-full h-full object-cover"
                                    sizes="(min-width: 960px) 848px, calc(94.38vw - 39px)" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold back mb-4">
                                    {service.title}
                                </h3>
                                <p className="mb-4 lg:text-lg">{service.description}</p>
                                <ul className="mb-6 space-y-3 ">
                                    {service.bulletPoints.map((point, index) => (
                                        <li key={index} className="flex flex-row gap-2 items-center">
                                            <FaCheck />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                    {service.icons.map((iconData, index) => (
                                        <div key={index} className="flex flex-col items-center gap-2 back1 p-5 rounded-md ">
                                            <div className="">{iconData.icon}</div>
                                            <p className="text-sm font-bold">{iconData.title}</p>
                                            <p className="text-xs">{iconData.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceSinglePage;
