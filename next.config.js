/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/login/again',
        destination: '/login',
        permanent: true,
      }, 
    ]
  }
}

module.exports = nextConfig
