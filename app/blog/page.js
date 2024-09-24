import BlogDisplay from '@/components/blogComponents/BlogDisplay'
import TopTitle from '@/components/ReusableComponent/TopTitle'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <TopTitle title={'Blog'} />
      <BlogDisplay />
    </div>
  )
}

export default Blog
