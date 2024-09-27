'use client'
import Image from "next/image"

 // Error boundaries must be Client Components

export default function Error({ error, reset }) {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Something went wrong!</h2>
            <div className="relative w-full max-w-sm md:max-w-md h-96">
                <Image
                    src="/error1-removebg-preview.png"
                    alt="errorImage"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover object-center rounded-lg"
                />

            </div>
            <button onClick={() => reset()} className="back2 px-4 py-2 rounded-lg" >Try again</button>
        </div>
    )
}