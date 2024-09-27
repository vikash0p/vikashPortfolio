import BlogCategoryLayout from '@/components/blogComponents/BlogCategoryLayout'
import { BlogData } from '@/components/blogComponents/BlogData';
import React from 'react'


export async function generateStaticParams() {
  return BlogData.map((item) => ({
    category: item.tags,
  }));
}
const BlogSingleCategory = ({ params }) => {
    const {category}=params
  return (
    <div>
      <BlogCategoryLayout category={category} />
    </div>
  )
}

export default BlogSingleCategory
