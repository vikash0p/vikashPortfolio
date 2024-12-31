export default function manifest() {
    return {
        name: 'Vikash  ',
        short_name: 'Vikash',
        description: 'A portfolio showcasing projects, skills, and expertise in Frontend web development, specializing in React, Node.js, and modern JavaScript frameworks.',
        start_url: '/',
        display: 'standalone',
        background_color: '#1a1333',
        theme_color: '#1a1333',
        orientation: 'portrait',
        scope: '/',
        lang: 'en',
        icons: [
            {
                src: '/favicon/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/favicon/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/favicon/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],

        shortcuts: [
            {
                name: 'Projects',
                short_name: 'Projects',
                description: 'Browse through all the projects',
                url: '/work',
                icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
            },
            {
                name: 'About',
                short_name: 'About',
                description: 'Learn more about me',
                url: '/about',
                icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
            },
            {
                name: 'Contact',
                short_name: 'Contact',
                description: 'Get in touch with me',
                url: '/contact',
                icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
            },
            {
                name: 'Blog',
                short_name: 'Blog',
                description: 'Web Development Insights & Tutorials',
                url: '/blog',
                icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
            },
            {
                name: 'Services',
                short_name: 'Services',
                description: 'Browse through all the services',
                url: '/services',
                icons: [{ src: '/favicon/icon.png', sizes: '192x192', type: 'image/png' }],
            },
        ],
        permissions: [
            {
                name: 'geolocation',
                description: 'Used to display your location on a map for contact purposes.',
            },
        ],
        categories: ['portfolio', 'development', 'web development'],
        iarc_rating_id: 'e12a34', // Optional, for app age ratings
        dir: 'ltr',
    };
}
