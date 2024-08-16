/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
};

export default nextConfig;
