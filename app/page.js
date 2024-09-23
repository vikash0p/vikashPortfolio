import { HomeLeft, HomeRight } from "@/components"
import ExperienceCard from "@/components/homepage/ExperienceCard"


// https://rainbowit.net/themes/inbio/
// https://preview.themeforest.net/item/rizal-personal-portfolio-html5-template/full_screen_preview/54364755
// https://gerold.themejunction.net/home-03/

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
   </section>
  )
}

export default Home
