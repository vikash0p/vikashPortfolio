'use client';
import React from 'react';
import { BlogData } from './BlogData';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SingleBlog = ({ id }) => {
    const blog = BlogData.find((blog) => blog.blogId === id);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            {/* Blog Header Section */}
            <div className="flex flex-col justify-center mb-10 md:items-center md:text-center">
                <h1 className="mb-4 text-xl font-bold md:text-2xl lg:text-4xl ">{blog.title}</h1>
                <p className="text-sm ">{blog.date}</p>
                <p className="mt-2 text-lg font-medium text-indigo-200">{blog.category}</p>
            </div>

            {/* Blog Image */}
            <div className="relative w-full max-w-4xl mx-auto h-96 lg:h-[500px] mb-8">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    quality={75}
                    loading='lazy'
                    sizes="(min-width: 1380px) 312px, (min-width: 1040px) calc(17.19vw + 78px), (min-width: 780px) 509px, (min-width: 420px) 381px, 92vw"
                    className="object-cover rounded-md shadow-md"
                />
            </div>

            {/* Blog Content */}
            <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-base leading-relaxed sm:text-lg">
                    {blog.description1}
                </p>
                <p className="text-base leading-relaxed sm:text-lg">
                    {blog.description2}
                </p>

<div>
    <Link href={`/blog`} className="px-8 py-2 rounded-lg back2 ">Back to Blog</Link>
</div>
            </div>
        </div>
    );
};

export default SingleBlog;
