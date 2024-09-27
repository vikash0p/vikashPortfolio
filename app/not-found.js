import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full mt-10 flex flex-col justify-center items-center  gap-3'>
            <div className="relative w-full max-w-sm md:max-w-md h-96">
                <Image
                    src="/error1-removebg-preview.png"
                    alt="errorImage"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover object-center rounded-lg "
                />

            </div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='back2  px-6 py-2 rounded-sm'>Return Home</Link>
        </div>
    )
}