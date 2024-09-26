import BlogSingleLayout from '@/components/blogComponents/BlogSingleLayout';
import React from 'react'

const BlogId = ({ params }) => {
    const { id } = params;

    return (
        <>
        <BlogSingleLayout  id={id} />
        </>
    )
}

export default BlogId
