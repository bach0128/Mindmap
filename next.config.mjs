/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    if (!dev) {
      // Disable source maps in production
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
