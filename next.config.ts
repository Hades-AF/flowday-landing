import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Extra Checks in Development
  images: {
    domains: [],
  },
  env: {},
};

export default nextConfig;
