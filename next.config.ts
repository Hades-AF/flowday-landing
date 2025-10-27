import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: false }, 
  typescript: { ignoreBuildErrors: false },
  reactStrictMode: true,  // Extra Checks in Development
  images: {
    domains: [],
  },
  env: {},
};

export default nextConfig;
