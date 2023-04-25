/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

export default config
