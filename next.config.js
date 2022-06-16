/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    gssIdKey: process.env.NEXT_PUBLIC_GSS_ID_KEY,
    gssApiKey: process.env.NEXT_PUBLIC_GSS_API_KEY,
  },
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
