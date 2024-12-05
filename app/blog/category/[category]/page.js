import BlogCategoryLayout from '@/components/blogComponents/BlogCategoryLayout';
import { BlogData } from '@/components/blogComponents/BlogData';
import { generateBlogMetadata } from "@/meta/blog/generateBlogMetadata";
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

 return generateBlogMetadata(category);
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
