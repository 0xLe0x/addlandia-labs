/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['cdn.sanity.io'],
    unoptimized: true,
  },
}

export default config
