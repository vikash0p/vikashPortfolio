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

const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

    return (
        <div className='flex flex-col w-full gap-10 mt-10 lg:flex-row'>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="md:p-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        key={service.value}
                        className="overflow-hidden transition-all transform rounded-lg shadow-lg back1 hover:scale-105"
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
                                    className="object-cover w-full h-full rounded-t-lg"
                                    sizes="(min-width: 960px) 848px, calc(94.38vw - 39px)" />
                            </div>
                            <div className="p-1 md:p-4">
                                <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl ">
                                    {service.title}
                                </h3>
                                <p className="mb-4 lg:text-lg">{service.description}</p>
                                <ul className="mb-6 space-y-3 ">
                                    {service.bulletPoints.map((point, index) => (
                                        <li key={index} className="flex flex-row items-center gap-2">
                                            <FaCheck />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                                    {service.icons.map((iconData, index) => (
                                        <div key={index} className="flex flex-col items-center gap-2 p-5 rounded-md back1 ">
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
