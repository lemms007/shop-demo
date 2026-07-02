import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sample-e-commerce",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
