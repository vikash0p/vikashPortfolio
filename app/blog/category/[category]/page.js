import BlogCategory from '@/components/blogComponents/BlogCategory'
import React from 'react'

const BlogSingleCategory = ({ params }) => {
    const {category}=params
  return (
    <div>
        <BlogCategory category={category} />
    </div>
  )
}

export default BlogSingleCategory
