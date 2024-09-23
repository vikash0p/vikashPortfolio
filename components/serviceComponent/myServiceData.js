import { FaCode, FaReact, FaHtml5, FaPalette, FaUser, FaDesktop } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

export const mysServiceData = [
    {
        value: 'web',
        title: 'Web Development',
        image: '/images/web-development.jpg', // replace with an actual image path
        description:
            'Web development is the process of creating websites or web applications. It involves both frontend and backend development, focusing on building responsive, interactive, and optimized websites for various platforms. Web developers use a variety of languages like HTML, CSS, JavaScript, and more to create sites that are user-friendly, accessible, and performant.',
        bulletPoints: [
            'Responsive design for all device types and sizes.',
            'Optimized for fast loading speeds.',
            'Utilizes HTML, CSS, and JavaScript for front-end development.',
            'Backend integration with server-side technologies.',
            'SEO-friendly development practices.',
            'Interactive user interfaces with smooth animations.',
            'Cross-browser compatibility.',
            'Secure and scalable web applications.',
            'Continuous updates for performance and security.',
            'Accessibility compliance for all users.',
        ],
        icons: [
            <FaCode  key='webId1' size={30} className="text-blue-500" />, // Coding
            <FaPalette key='webId2' size={30} className="text-pink-500" />, // Design
            <FaDesktop key='webId3' size={30} className="text-green-500" />, // Responsive Design
        ],
    },
    {
        value: 'react',
        title: 'React Development',
        image: '/images/react-development.jpg',
        description:
            'React development involves building dynamic, scalable front-end applications using the React JavaScript library. It enables developers to create reusable components, manage state efficiently, and improve the overall performance of web applications. React is widely used for building single-page applications (SPAs) that provide seamless user experiences.',
        bulletPoints: [
            'Component-based architecture for code reuse.',
            'Efficient state management with hooks and context.',
            'Fast rendering with virtual DOM.',
            'Integration with backend APIs via REST or GraphQL.',
            'Server-side rendering for improved performance.',
            'Cross-platform development with React Native.',
            'Easy to scale and maintain applications.',
            'Rich ecosystem of third-party libraries.',
            'Support for TypeScript and JavaScript.',
            'Highly modular for development and testing.',
        ],
        icons: [
            <FaReact  key='reactId1' size={30} className="text-sky-500" />, // React Icon
            <FaUser key='reactId2' size={30} className="text-purple-500" />, // User Experience
            <FaPalette key='reactId3' size={30} className="text-pink-500" />, // UI/UX Design
        ],
    },
    {
        value: 'next',
        title: 'Next.js Development',
        image: '/images/nextjs-development.jpg',
        description:
            'Next.js is a powerful React framework that enables server-side rendering and static site generation. It provides developers with the tools to create highly performant, SEO-optimized, and scalable web applications. With built-in routing, API support, and easy deployment solutions, Next.js is an excellent choice for modern web development.',
        bulletPoints: [
            'Server-side rendering for faster initial load times.',
            'Static site generation for optimized SEO.',
            'Dynamic routing with file-based system.',
            'API routes to handle backend services within the same app.',
            'Image optimization with Next.js Image component.',
            'Automatic code splitting for faster performance.',
            'Supports both static and dynamic applications.',
            'Seamless integration with React components and libraries.',
            'Built-in support for CSS and Sass.',
            'Easy deployment with platforms like Vercel.',
        ],
        icons: [
            <SiNextdotjs  key='nextId1' size={30} className="text-black" />, // Next.js Icon
            <FaDesktop key='nextId2' size={30} className="text-green-500" />, // Responsive Design
            <FaUser  key='nextId3' size={30} className="text-purple-500" />, // User Experience
        ],
    },
    {
        value: 'html',
        title: 'HTML Development',
        image: '/images/html-development.jpg',
        description:
            'HTML development involves creating the basic structure and content of web pages. It is the foundation of every website and is crucial for SEO, accessibility, and overall user experience. HTML developers focus on writing clean, semantic markup that is easy to maintain and integrate with CSS and JavaScript for enhanced functionality.',
        bulletPoints: [
            'Creating semantic and accessible web structures.',
            'SEO-friendly markup for better search rankings.',
            'Easy integration with CSS and JavaScript.',
            'Cross-browser compatibility.',
            'Use of modern HTML5 features.',
            'Optimized for performance and mobile devices.',
            'Basic form validation with HTML attributes.',
            'Works in conjunction with backend systems.',
            'Provides foundation for progressive web apps.',
            'Follows best practices for web development.',
        ],
        icons: [
            <FaHtml5  key='htmId1' size={30} className="text-orange-500" />, // HTML Icon
            <FaCode key='htmId2' size={30} className="text-blue-500" />, // Coding
            <FaUser  key='htmlId3' size={30} className="text-purple-500" />, // User Experience
        ],
    },
]

