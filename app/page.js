import { HomeLeft, HomeRight } from "@/components"


export const metadata = {
  title: 'Home',
  description: '👋 Welcome to My Portfolio! 🚀 I\'m a dedicated Front- End Developer who turns ideas into captivating web experiences.With a blend of creativity and code, I craft user - friendly interfaces using HTML, CSS, and JavaScript.Explore my projects that showcase my passion for design and innovation.Let\'s build the web of tomorrow, today!'
}

const Home = () => {
  return (
    <div className='w-full min-h-screen lg:flex place-items-center '>
      <div className='flex-1'>
        <HomeLeft />
      </div>
      <div className='items-center justify-center flex-1 '>
        <HomeRight />
      </div>

    </div>
  )
}

export default Home
