/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  },
  images: {
    domains: ['github.com', 'https://avatars.githubusercontent.com/'],
  },
};

module.exports = nextConfig;
