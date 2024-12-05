export const ProjectMetadata = {
    title: "Vikash Projects | Full-Stack Web Development Portfolio",
    description:
        "Explore Vikash's portfolio of innovative web development projects, showcasing expertise in full-stack development using React, Node.js, and modern JavaScript frameworks. From complex web applications to elegant frontend designs, discover how Vikash builds scalable, user-centric solutions.",
    openGraph: {
        title: {
            default: "Vikash Projects | Full-Stack Web Development",
            template: "%s | Projects",
        },
        description:
            "Dive into Vikash's project portfolio featuring cutting-edge web applications, creative solutions, and scalable systems built using React, Node.js, and modern web technologies. Explore case studies and in-depth details of each project.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
                width: 1200,
                height: 630,
                alt: "Vikash Projects openGraph",
            },
        ],
        url: `${process.env.NEXT_PUBLIC_APP_URL}`,
        siteName: "Vikash Projects",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vikash Projects | Full-Stack Web Development Portfolio",
        description:
            "View Vikash's portfolio of web development projects, built using React, Node.js, and modern web technologies. Explore scalable solutions, creative designs, and complex applications.",
        images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
        creator: "@VikashPortfolio",
    },
    applicationName: "Vikash Projects",
    keywords: [
        "Full-Stack Developer Projects",
        "Web Development Portfolio",
        "React Developer Projects",
        "NodeJS Developer Portfolio",
        "Frontend and Backend Projects",
        "JavaScript Projects",
        "Modern Web Applications",
        "Case Studies",
        "Project Portfolio",
        "Custom Web Solutions",
        "Vikash Projects",
        "Software Engineer Portfolio",
        "Technical Expertise",
        "Scalable Web Projects",
    ],
};