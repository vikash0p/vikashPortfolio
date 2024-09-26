import BlogCategoryLayout from '@/components/blogComponents/BlogCategoryLayout'
import React from 'react'

const BlogSingleCategory = ({ params }) => {
    const {category}=params
  return (
    <div>
      <BlogCategoryLayout category={category} />
    </div>
  )
}

export default BlogSingleCategory
