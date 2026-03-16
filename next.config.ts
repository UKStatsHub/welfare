import type { NextConfig } from "next";

// GitHub Pages project site is served at https://<org>.github.io/welfare/
// Ensure Next generates URLs with the correct base path.
const basePath = "/welfare";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
