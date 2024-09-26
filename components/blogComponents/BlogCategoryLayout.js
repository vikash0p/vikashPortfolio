'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const BlogCategory = dynamic(() => import('./BlogCategory'), { ssr: false });

const BlogCategoryLayout = ({category}) => {
  return (
    <div>
          <BlogCategory category={category} />

    </div>
  )
}

export default BlogCategoryLayout
