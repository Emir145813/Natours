import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.valdeloire-france.com",
      },
      {
      protocol: "https",
      hostname: "cdn.sanity.io",
    },
    {
      protocol: "https",
      hostname: "www.revigorate.com",
    },
    ],
  },
};

export default nextConfig;
