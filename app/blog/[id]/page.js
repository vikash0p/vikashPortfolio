import { BlogData } from '@/components/blogComponents/BlogData';
import BlogSingleLayout from '@/components/blogComponents/BlogSingleLayout';
import { generateMetaDataById } from "@/meta/blog/generateMetaDataById";
import React from 'react'

// export async  function generateStaticParams() {
//     return BlogData.map((item) => ({id: item.blogId,   }));
// }
export async function generateMetadata({ params }) {
    const { id } = params;

    return generateMetaDataById(id);

}

const BlogId = ({ params }) => {
    const { id } = params;

    return (
        <BlogSingleLayout  id={id} />
    )
}

export default BlogId
