'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { BlogData } from "./BlogData";
import Link from "next/link";
import Image from "next/image";
import FilterBlogData from "./FilterBlogData";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from 'use-debounce';

export default function BlogDisplay() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchQuery = searchParams.get("search") || ""; // Get the search query from URL
    const [filteredBlogsData, setFilteredBlogsData] = useState(BlogData);
    const [inputValue, setInputValue] = useState(searchQuery); // Keep input in sync with URL
    const [debouncedInputValue] = useDebounce(inputValue, 1000); // Debounce the input value

    useEffect(() => {
        // Update the search query in the URL when input changes
        const query = debouncedInputValue ? `?search=${debouncedInputValue}` : "";
        router.push(`/blog${query}`);
    }, [debouncedInputValue, router]);

    useEffect(() => {
        const filteredBlogs = BlogData.filter(
            (blog) =>
                blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBlogsData(filteredBlogs);
    }, [searchQuery]);

    const handleSearchChange = (e) => {
        setInputValue(e.target.value); // Update input value state
    };

    const categoryData = BlogData.map((blog) => blog.tags);
    const uniqueCategories = [...new Set(categoryData.flat())]; // Flatten the tags array

    return (
        <div className="flex flex-col w-full mt-10 lg:flex-row gap-y-4 md:gap-10">
            {/* Blog Display Section */}
            <div className="order-last lg:w-3/4 lg:order-first">
                <FilterBlogData filteredBlogsData={filteredBlogsData} />
            </div>

            {/* Input Section */}
            <motion.div
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/4 ">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search blog..."
                        className="w-full px-3 py-2 rounded-sm outline-none back2"
                        value={inputValue}
                        onChange={handleSearchChange} // Call handler on change
                    />
                    <FiSearch className="absolute right-2 top-3" size={20} />
                </div>

                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">Tags</h2>
                    <div className="flex flex-wrap gap-5 mt-2">
                        {uniqueCategories.map((category) => (
                            <div key={category} className="inline-block px-5 py-2 back2">
                                <Link href={`/blog/category/${category}`} className="uppercase">
                                    {category}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden w-full mt-4 space-y-5 lg:block">
                    {BlogData.map((blog) => (
                        <div key={blog.blogId} className="w-full h-full rounded-lg shadow-md back2">
                            {blog.category === "HTML Development" ? (
                                <div className="relative h-24 max-w-sm">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        sizes="(min-width: 1340px) 335px, (min-width: 1040px) calc(37.86vw - 165px), (min-width: 780px) calc(60.42vw - 239px), (min-width: 480px) 384px, calc(89.38vw - 27px)"
                                        loading="eager"
                                        quality={75}
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                            ) : (
                                <div className="px-1 py-2">
                                    <Link href={`/blog/${blog.blogId}`} className="flex flex-row">
                                        <div className="relative w-32 h-20">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                sizes="(min-width: 1360px) 76px, 5.67vw"
                                                loading="lazy"
                                                quality={75}
                                                className="object-cover w-full h-full rounded-lg"
                                            />
                                        </div>
                                        <div className="mt-4 md:ml-6 md:mt-0">
                                            <h2 className="text-sm">{blog.title}</h2>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
