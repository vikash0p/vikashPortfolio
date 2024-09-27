import { BlogData } from '@/components/blogComponents/BlogData';
import BlogSingleLayout from '@/components/blogComponents/BlogSingleLayout';
import React from 'react'

export async  function generateStaticParams() {
    return BlogData.map((item) => ({
        id: item.blogId,
    }));
}

const BlogId = ({ params }) => {
    const { id } = params;

    return (
        <>
        <BlogSingleLayout  id={id} />
        </>
    )
}

export default BlogId
