'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';

const FilterBlogData = ({ filteredBlogsData }) => {
    return (
        <div>
            {filteredBlogsData.length === 0 ? (
                <div className="w-full min-h-[70vh] flex flex-col items-center gap-5 justify-center text-2xl md:text-3xl lg:text-4xl">
                    No Blog Found!
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 gap-6"
                >
                    {filteredBlogsData.map((blog) => (
                        <div key={blog.blogId} className="p-6 rounded-lg shadow-md back2">
                            <Link href={`/blog/${blog.blogId}`} className="flex flex-col md:flex-row">
                                <div className="relative w-full max-w-sm h-52 sm:max-w-xl md:h-72">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        sizes="(min-width: 1380px) 312px, (min-width: 1040px) calc(17.19vw + 78px), (min-width: 780px) 509px, (min-width: 420px) 381px, 92vw"
                                        loading='lazy'
                                        quality={75}
                                        className="object-cover w-full h-full rounded-lg" />
                                    <div className="absolute flex items-center gap-2 px-3 py-2 text-xs md:text-base left-4 bottom-4 back2">
                                        <FaCalendarAlt />  {blog.date}
                                    </div>
                                </div>

                                <div className="mt-4 md:ml-6 md:mt-0">
                                    <h2 className="font-semibold md:text-3xl">{blog.title}</h2>
                                    <h6 className="text-sm md:text-2xl">{blog.category}</h6>
                                    <div className='hidden md:block'>
                                        <p className="">{blog.description1}</p>
                                        <p className="">{blog.description2}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </motion.div>
            )}
        </div>
    )
}

export default FilterBlogData
