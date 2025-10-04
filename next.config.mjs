/** @type {import('next').NextConfig} */
const PORT = process.env.PORT;

const nextConfig = {
  async rewrites() {
    return [{
      source: "/api/:path*",
      destination: `http://localhost:${PORT}/:path*`,
    }, ];
  },
};

export default nextConfig;