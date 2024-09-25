import { HomeLeft, HomeRight, TestimonialsSlides } from "@/components"
import ExperienceCard from "@/components/homepage/ExperienceCard"


const Home = () => {
  return (
   <section>
      <div className='w-full h-full lg:flex place-items-center mt-10'>
        <div className='flex-1'>
          <HomeLeft />
        </div>
        <div className='items-center justify-center flex-1 '>
          <HomeRight />
        </div>

      </div>
      <div className="mt-20">
        <ExperienceCard />
      </div>
      <div>
        <TestimonialsSlides />
      </div>
   </section>
  )
}

export default Home
