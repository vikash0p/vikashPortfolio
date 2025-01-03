export const HomeMetaData = {
    title: "Vikash Portfolio | Frontend Developer & Software Engineer",
    description:
        "Welcome to Vikash's personal portfolio. Explore projects, skills, and expertise in Frontend web development, specializing in React, Node.js, and modern JavaScript frameworks.",
    openGraph: {
        title: {
            default: "Vikash | Frontend Developer Portfolio",
            template: "%s | Vikash",
        },
        description:
            "Welcome to Vikash's portfolio! Specializing in modern web development, Vikash brings innovative solutions to complex technical challenges. Explore projects, coding expertise, and case studies to see how Vikash can bring value to your development team.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
                width: 1200,
                height: 630,
                alt: "Vikash Portfolio openGraph",
            },
        ],
        url: `${process.env.NEXT_PUBLIC_APP_URL}`,
        siteName: "Vikash Portfolio",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: 'Vikash Portfolio | Frontend Developer & Software Engineer',
        description: 'Explore the portfolio of Vikash, a Frontend web developer skilled in React, Node.js, and JavaScript technologies. Discover innovative projects and technical expertise.',
        images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
        creator: "@VikashPortfolio",
    },
    applicationName: "Vikash Portfolio",
    keywords: [
        "FullStackDeveloper",
        "WebDeveloper",
        "ReactDeveloper",
        "NodeJS",
        "JavaScript",
        "Portfolio",
        "FrontendDevelopment",
        "BackendDevelopment",
        "ModernWebApps",
        "SoftwareEngineer",
    ],

};