import BlogLayout from '@/components/blogComponents/BlogLayout'
import React from 'react'
export const metadata = {
  title: "Vikash Blog's | Web Development Insights & Tutorials",
  description:
    "Dive into Vikash's blog for in-depth articles, tutorials, and insights on web development, React, Node.js, JavaScript, and modern technologies. Stay updated with the latest trends in frontend and backend development.",
  openGraph: {
    title: {
      default: "Vikash's Blog | Web Development & Tutorials",
      template: "%s | Vikash's Blog",
    },
    description:
      "Explore a variety of web development articles, coding tutorials, and technical insights shared by Vikash. From React to Node.js and everything in between, Vikash covers the latest trends and best practices in software development.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Vikash Blog Page openGraph",
      },
    ],
    url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
    siteName: "Vikash Blog",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikash's Blog | Web Development Insights & Tutorials",
    description:
      "Read the latest articles and tutorials by Vikash, a full-stack developer. Gain insights into modern web development techniques, tools, and frameworks.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
    creator: "@VikashPortfolio",
  },
  applicationName: "Vikash Blog",
  keywords: [
    "Web Development Blog",
    "JavaScript Tutorials",
    "React Tutorials",
    "NodeJS Guides",
    "Frontend Development",
    "Backend Development",
    "Full-Stack Developer Blog",
    "Web Development Insights",
    "Programming Tutorials",
    "Vikash Blog",
    "Tech Articles",
    "Software Development",
    "Coding Tips",
    "Modern Web Technologies",
    "Development Best Practices",
    "React Projects",
    "JavaScript Frameworks",
  ],
};

const Blog = () => {
  return (
    <div>
    <BlogLayout />
    </div>
  )
}

export default Blog
