/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        deviceSizes: [320, 480, 640, 768, 1024, 1280, 1440, 1600, 1920],
        imageSizes: [64, 128, 256, 384, 512, 768, 1024],
        formats: ['image/avif', 'image/webp'],
    }
}

module.exports = nextConfig
