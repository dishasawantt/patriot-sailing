import type { NextConfig } from "next";

// Static export for GitHub Pages, served from /patriot-sailing in production.
const repo = "patriot-sailing";
const isProd = process.env.NODE_ENV === "production";
const base = isProd ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
  basePath: base,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: base },
};

export default nextConfig;
