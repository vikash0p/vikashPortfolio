import { BlogData } from '@/components/blogComponents/BlogData';
import BlogSingleLayout from '@/components/blogComponents/BlogSingleLayout';
import React from 'react'

export async  function generateStaticParams() {
    return BlogData.map((item) => ({
        id: item.blogId,
    }));
}
export async function generateMetadata({ params }) {
    const { id } = params;

    // Find the blog post based on id from BlogData
    const blogPost = BlogData.find(item => item.blogId === id);
    // console.log("🚀 ~ file: page.js:15 ~ blogPost:", blogPost.image);

    if (blogPost) {
        return {
            title: `${blogPost.title} | Blog`,
            description: `${blogPost.description1}`,
            openGraph: {
                title: `${blogPost.title} | Blog`,
                description: `${blogPost.description1}`,
                url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${id}`,
                images: [
                    {
                        url: `${process.env.NEXT_PUBLIC_APP_URL}/${blogPost.image}`,
                        width: 1200,
                        height: 630,
                        alt: `${blogPost.title} - Blog Post`,
                    },
                ],
                siteName: 'Your Blog Site',
                type: 'article',
                article: {
                    publishedTime: blogPost.date,
                    tags: [blogPost.tags],
                },
            },
            twitter: {
                card: 'summary_large_image',
                title: `${blogPost.title} | Blog`,
                description: `${blogPost.description1}`,
                images: `${process.env.NEXT_PUBLIC_APP_URL}/${blogPost.image}`,
            },
        };
    } else {
        return {
            title: 'Blog Post Not Found',
            description: 'This blog post could not be found.',
        };
    }
}

const BlogId = ({ params }) => {
    const { id } = params;

    return (
        <>
        <BlogSingleLayout  id={id} />
        </>
    )
}

export default BlogId
