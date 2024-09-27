export default function sitemap() {
    const currentDate = new Date().toISOString(); // Generate current date

    return [
        {
            url: 'https://myportfolio-navy-three.vercel.app/',
            lastModified: currentDate,
            changeFrequency: 'yearly', // Assuming yearly changes
            priority: 0.4,
        },
        {
            url: 'https://myportfolio-navy-three.vercel.app/about',
            lastModified: currentDate,
            changeFrequency: 'monthly', // Assuming monthly updates
            priority: 1.0,
        },
        {
            url: 'https://myportfolio-navy-three.vercel.app/services',
            lastModified: currentDate,
            changeFrequency: 'monthly', // Assuming monthly updates
            priority: 1.0,
        },
        {
            url: 'https://myportfolio-navy-three.vercel.app/work',
            lastModified: currentDate,
            changeFrequency: 'monthly', // Assuming monthly updates
            priority: 1.0,
        },
        {
            url: 'https://myportfolio-navy-three.vercel.app/blog',
            lastModified: currentDate,
            changeFrequency: 'weekly', // Blogs might update more frequently
            priority: 1.0,
        },
        {
            url: 'https://myportfolio-navy-three.vercel.app/contact',
            lastModified: currentDate,
            changeFrequency: 'yearly', // Assuming minimal changes to contact page
            priority: 1.0,
        },
    ];
}
