/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
  },
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
