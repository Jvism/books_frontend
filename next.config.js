/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/**',
      },
    ],
  },
}

module.exports = nextConfig
