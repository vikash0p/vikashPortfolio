import { HomeLeft, HomeRight } from "@/components"




const Home = () => {
  return (
    <div className='w-full min-h-screen lg:flex place-items-center'>
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
