/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
  },
};

module.exports = nextConfig;
