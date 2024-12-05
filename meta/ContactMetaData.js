export const ContactMetaData = {
    title: "Contact Vikash | Get in Touch with a Full-Stack Developer",
    description:
        "Get in touch with Vikash for web development inquiries, project collaborations, or any technical support. Specializing in React, Node.js, and modern web technologies.",
    openGraph: {
        title: {
            default: "Contact Vikash | Full-Stack Developer & Software Engineer",
            template: "%s | Contact Vikash",
        },
        description:
            "Contact Vikash to discuss web development projects, technical collaborations, or consulting opportunities. Specializing in building scalable web applications with modern technologies.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
                width: 1200,
                height: 630,
                alt: "Vikash Contact Page openGraph",
            },
        ],
        url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
        siteName: "Vikash Contact",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Vikash | Full-Stack Developer & Software Engineer",
        description:
            "Reach out to Vikash for web development services or collaboration opportunities. Specializing in React, Node.js, and modern JavaScript frameworks.",
        images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
        creator: "@VikashPortfolio",
    },
    applicationName: "Vikash Contact",
    keywords: [
        "Contact Vikash",
        "Full-Stack Developer Contact",
        "Web Development Services",
        "React Developer Contact",
        "NodeJS Developer",
        "Web Developer Consultation",
        "Software Engineer Contact",
        "Hire Full-Stack Developer",
        "Frontend Developer Contact",
        "Backend Developer",
        "Project Collaboration",
        "Vikash Portfolio Contact",
        "Get in Touch",
        "Web Development Support",
        "Technical Inquiries",
    ],
};
