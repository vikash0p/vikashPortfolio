import SingleBlog from '@/components/blogComponents/SingleBlog';
import TopTitle from '@/components/ReusableComponent/TopTitle';
import React from 'react'

const BlogId = ({ params }) => {
    const { id } = params;

    return (
        <div>
            <TopTitle title={`Blog / ${id}`} />
            <SingleBlog id={id} />
        </div>
    )
}

export default BlogId
