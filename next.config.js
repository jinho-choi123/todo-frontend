/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: true,
      }, 
      {
        source: '/signup',
        destination: '/',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
