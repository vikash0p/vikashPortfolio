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
            changeFrequency: 'monthly', 
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/services`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/work`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
        },
    ];
}
