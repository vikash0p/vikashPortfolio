import BlogLayout from '@/components/blogComponents/BlogLayout'
import { BlogMetaData } from "@/meta/BlogMetaData"
import React from 'react'
export const metadata = BlogMetaData;

const Blog = () => {
  return (
    <BlogLayout />
  )
}

export default Blog
