import { BlogData } from "@/components/blogComponents/BlogData";


const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://vikash0p.vercel.app';

export const generateBlogMetadata = (category) => {
    const categoryBlogs = BlogData.filter((item) => item.tags === category);

    const categoryTitle = `${categoryBlogs[0]?.category || category} Articles | Blog`;
    const categoryDescription = `Explore articles related to ${category}, covering topics such as ${categoryBlogs
        .map((blog) => blog.title)
        .join(', ')}.`;

    return {
        title: categoryTitle,
        description: categoryDescription,
        openGraph: {
            title: categoryTitle,
            description: categoryDescription,
            url: `${appUrl}/blog/category/${category}`,
            images:
                categoryBlogs.length > 0
                    ? [
                        {
                            url: `${appUrl}${categoryBlogs[0].image}`,
                            width: 1200,
                            height: 630,
                            alt: `${categoryTitle} OpenGraph Image`,
                        },
                    ]
                    : [],
            siteName: 'Your Blog Site',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: categoryTitle,
            description: categoryDescription,
            images:
                categoryBlogs.length > 0
                    ? [`${appUrl}${categoryBlogs[0].image}`]
                    : [],
        },
    };
};
