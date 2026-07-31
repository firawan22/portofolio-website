/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "raw.githubusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: '/links',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
