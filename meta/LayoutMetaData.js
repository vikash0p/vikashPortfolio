export const LayoutMetaData = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  title: {
    default: "Vikash | Frontend Developer Portfolio & Software Engineer",
    template: "%s | Vikash",
  },
  description:
    "Explore Vikash's portfolio showcasing expertise in full-stack web development, from building modern web applications to solving complex coding challenges. Discover projects, skills, and achievements that demonstrate Vikash's proficiency in React, Node.js, and more.",
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
    title: "Vikash Portfolio | Frontend Developer & Software Engineer",
    description:
      "Explore the portfolio of Vikash, a Frontend web developer skilled in React, Node.js, and JavaScript technologies. Discover innovative projects and technical expertise.",
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
  authors: [
    { name: "Vikash" },
    { name: "Vikash Portfolio", url: `${process.env.NEXT_PUBLIC_APP_URL}` },
  ],
  creator: "Vikash",
  publisher: "Vikash Portfolio",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
};
