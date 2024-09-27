export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://myportfolio-navy-three.vercel.app/sitemap.xml',
    }
}