import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.atomicatpages.net",
      },
    ],
  },
};

export default nextConfig;
