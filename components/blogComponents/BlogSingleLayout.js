'use client'
import dynamic from 'next/dynamic';
import React from 'react'

const TopTitle = dynamic(() => import('../ReusableComponent/TopTitle'), {
    srr:false,
});

const SingleBlog = dynamic(() => import('./SingleBlog'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const BlogSingleLayout = ({id}) => {
  return (
    <>
      <TopTitle title={`Blog / ${id}`} />
      <SingleBlog id={id} />
    </>
  )
}

export default BlogSingleLayout