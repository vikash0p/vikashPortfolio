'use client'
import dynamic from 'next/dynamic';
import React from 'react'
import TopTitle from '../ReusableComponent/TopTitle'


const BlogDisplay = dynamic(() => import('./BlogDisplay'), {
  ssr: false,
});

const BlogLayout = () => {
  return (
    <div>
      <TopTitle title={'Blog'} />
      <BlogDisplay />
    </div>
  )
}

export default BlogLayout