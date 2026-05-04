/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [320, 420, 640, 768],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
}

export default nextConfig
