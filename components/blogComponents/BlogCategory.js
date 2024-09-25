'use client'
import React from 'react'
import { BlogData } from './BlogData'
import FilterBlogData from './FilterBlogData'
import TopTitle from '../ReusableComponent/TopTitle'

const BlogCategory = ({category}) => {
    const BlogCategoryData=BlogData.filter((blog)=>blog.tags===category)
    console.log("🚀 ~ file: BlogCategory.js:7 ~ BlogCategoryData:", BlogCategoryData);

  return (
    <div>
        <TopTitle title={`Blog / ${category}`} />
        <div className='mt-12 lg:max-w-4xl m-auto'>
              <FilterBlogData filteredBlogsData={BlogCategoryData} />

        </div>
    </div>
  )
}

export default BlogCategory
