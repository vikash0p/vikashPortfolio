'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { BlogData } from "./BlogData";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt } from 'react-icons/fa';

export default function BlogDisplay() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBlogsData, setFilteredBlogsData] = useState(BlogData);

    useEffect(() => {
        const filteredBlogs = BlogData.filter((blog) => blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.category.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredBlogsData(filteredBlogs);
    }, [searchQuery]);


    const categoryData= BlogData.map((blog)=>blog.category);
    const uniqueCategories = [...new Set(categoryData)];
    console.log("🚀 ~ file: BlogDisplay.js:22 ~ uniqueCategories:", uniqueCategories);

    return (
        <div className="flex w-full flex-col lg:flex-row gap-y-4 md:gap-10 mt-10">
            {/* Blog Display Section */}
            <div className="w-3/4">
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
                            <div key={blog.blogId} className="back2 rounded-lg shadow-md p-6">
                                <Link href={`/blog/${blog.blogId}`} className="flex flex-col md:flex-row">
                                    <div className="relative w-full max-w-sm  h-72">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="w-full h-full object-cover rounded-lg" />
                                            <div className="absolute left-4  bottom-4 back2 px-3 py-2 flex gap-2 items-center">
                                            <FaCalendarAlt/>  {blog.date}
                                            </div>
                                    </div>

                                    <div className="md:ml-6 mt-4 md:mt-0">
                                        <h2 className="text-3xl font-semibold">{blog.title}</h2>
                                        <h6 className="mt-4 text-2xl">{blog.category}</h6>
                                        <p className="mt-2">{blog.description1}</p>
                                        <p className="mt-1">{blog.description2}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Input Section */}
            <motion.div
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            className="w-1/4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search blog..."
                        className="w-full px-3 py-2 rounded-sm back2 outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FiSearch className="absolute right-2 top-3" size={20} />
                </div>

                <div className="mt-4 space-y-5 w-full">
                    {
                        BlogData.map((blog) => (
                            <div key={blog.blogId} className="back2 rounded-lg shadow-md  w-full h-full">
                                {
                                    blog.category === "HTML Development" ? (
                                            <div className="relative max-w-sm  h-24 ">
                                                <Image
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    fill
                                                    className="w-full h-full object-cover rounded-lg" />
                                            </div>
                                    ):(
                                            <div className="py-2 px-1">

                                                <Link href={`/blog/${blog.blogId}`} className="flex  flex-row ">
                                                    <div className="relative w-32 h-20 ">
                                                        <Image
                                                            src={blog.image}
                                                            alt={blog.title}
                                                            fill
                                                            className="w-full h-full object-cover rounded-lg" />
                                                    </div>
                                                    <div className="md:ml-6 mt-4 md:mt-0">
                                                        <h2 className=" text-sm">{blog.title}</h2>

                                                    </div>
                                                </Link>
                                        </div>
                                    )
                                }

                            </div>
                        ))
                    }
                </div>
<div className="mt-4">
    <h2 className="text-2xl font-semibold">Tags</h2>
                    <div className="mt-2  space-y-3 ">
                        {
                            uniqueCategories.map((category) => (
                                <div key={category} className="back2 inline-block px-5 py-2 ">
                                    <Link href={`/blog/category/${category}`} className="flex  flex-row "> {category}  </Link>
                                </div>))
                        }
                    </div>
</div>
            </motion.div>
        </div>
    );
}
