export default function sitemap() {
    const currentDate = new Date().toISOString(); // Generate current date

    return [
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
            lastModified: currentDate,
            changeFrequency: 'yearly', // Assuming yearly changes
            priority: 0.4,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly', // Assuming monthly updates
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/services`,
            lastModified: currentDate,
            changeFrequency: 'monthly', // Assuming monthly updates
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/work`,
            lastModified: currentDate,
            changeFrequency: 'monthly', // Assuming monthly updates
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
            lastModified: currentDate,
            changeFrequency: 'weekly', // Blogs might update more frequently
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
            lastModified: currentDate,
            changeFrequency: 'yearly', // Assuming minimal changes to contact page
            priority: 1.0,
        },
    ];
}
