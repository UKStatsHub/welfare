import type { NextConfig } from "next";

declare const process: { env: { NODE_ENV?: string; NEXT_PUBLIC_BASE_PATH?: string } };

// GitHub Pages serves the site from a repository subpath (e.g. /welfare).
// In production, default to that subpath unless overridden by NEXT_PUBLIC_BASE_PATH.
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/welfare" : "");

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
