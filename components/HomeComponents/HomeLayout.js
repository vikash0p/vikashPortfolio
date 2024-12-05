'use client';

import ExperienceCard from "./ExperienceCard";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import TestimonialsSlides from "./TestimonialsSlides";





const HomeLayout = () => {
    return (
        <section>
            {/* The hero section is displayed in a flex box container. It displays the HomeLeft and HomeRight components. */}
            <div className='w-full h-full py-10 lg:flex place-items-center'>
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