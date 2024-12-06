import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center w-full gap-3 mt-10'>
            <div className="relative w-full max-w-sm md:max-w-md h-96">
                <Image
                    src="https://res.cloudinary.com/dhttnehwp/image/upload/v1733393867/vikashProtfolio/z9k6tw2vdartbuubovsd.png"
                    alt="errorImage"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center w-full h-full rounded-lg "
                    quality={75}
                />

            </div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='px-6 py-2 rounded-sm back2'>Return Home</Link>
        </div>
    )
}