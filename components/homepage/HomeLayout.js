'use client';

import dynamic from "next/dynamic";
const ExperienceCard = dynamic(() => import('@/components/homepage/ExperienceCard'), { ssr: false });
const HomeLeft = dynamic(() => import('@/components/homepage/HomeLeft'), { ssr: false });
const HomeRight = dynamic(() => import('@/components/homepage/HomeRight'), { ssr: false });
const TestimonialsSlides = dynamic(() => import('@/components/TestimonialsSlides'), { ssr: false });
/**
 * The HomeLayout component is the main component for the homepage.
 * It displays the hero section, the experience section, and the testimonials section.
 * The hero section is displayed in a flex box container and displays the HomeLeft and HomeRight components.
 * The experience section is displayed below the hero section and displays the ExperienceCard component.
 * The testimonials section is displayed below the experience section and displays the TestimonialsSlides component.
 */
const HomeLayout = () => {
    return (
        <section>
            {/* The hero section is displayed in a flex box container. It displays the HomeLeft and HomeRight components. */}
            <div className='w-full h-full lg:flex place-items-center mt-10'>
                {/* The HomeLeft component is displayed in a flex box item. */}
                <div className='flex-1'>
                    <HomeLeft />
                </div>
                {/* The HomeRight component is displayed in another flex box item. */}
                <div className='items-center justify-center flex-1 '>
                    <HomeRight />
                </div>

            </div>

            {/* The experience section is displayed below the hero section and displays the ExperienceCard component. */}
            <div className="mt-20">
                {/* The ExperienceCard component is displayed. */}
                <ExperienceCard />
            </div>

            {/* The testimonials section is displayed below the experience section and displays the TestimonialsSlides component. */}
            <div className="mt-20">
                {/* The TestimonialsSlides component is displayed. */}
                <TestimonialsSlides />
            </div>
        </section>
    )
}


export default HomeLayout
