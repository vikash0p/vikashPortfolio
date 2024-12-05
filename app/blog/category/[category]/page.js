import BlogCategoryLayout from '@/components/blogComponents/BlogCategoryLayout';
import { BlogData } from '@/components/blogComponents/BlogData';
import React from 'react';

// Generate static paths for categories
export async function generateStaticParams() {
  const uniqueCategories = [...new Set(BlogData.map(item => item.tags))];
  return uniqueCategories.map(category => ({
    category,
  }));
}

// Generate dynamic metadata for category pages
export async function generateMetadata({ params }) {
  const { category } = params;

  // Generate a category-specific title and description
  const categoryBlogs = BlogData.filter(item => item.tags === category);
  // console.log("🚀 ~ file: page.js:19 ~ categoryBlogs:", categoryBlogs[0].image );
  const categoryTitle = `${categoryBlogs[0].category} Articles | Blog`;
  const categoryDescription = `Explore articles related to ${category}, covering topics such as ${categoryBlogs.map(blog => blog.title).join(', ')}.`;

  return {
    title: categoryTitle,
    description: categoryDescription,
    openGraph: {
      title: categoryTitle,
      description: categoryDescription,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/category/${category}`,
      images: categoryBlogs.length > 0 ?
        [{
          url: `${process.env.NEXT_PUBLIC_APP_URL}${categoryBlogs[0].image}`,
          width: 1200,
          height: 630,
          alt: `${categoryTitle} OpenGraph Image`,
        }]
        : [],
      siteName: 'Your Blog Site',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: categoryTitle,
      description: categoryDescription,
      images: categoryBlogs.length > 0 ?
        [`${process.env.NEXT_PUBLIC_APP_URL}${categoryBlogs[0].image}`]
        : [],
    },
  };
}

// Component to render category blog posts
const BlogSingleCategory = ({ params }) => {
  const { category } = params;

  return (
    <div>
      <BlogCategoryLayout category={category} />
    </div>
  );
};

export default BlogSingleCategory;
