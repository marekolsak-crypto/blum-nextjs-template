import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    qualities: [100],
  },
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/form",
      "@mantine/dates",
      "@mantine/modals",
      "@mantine/notifications",
      "@mantine/dropzone",
      "@mantine/carousel",
      "@mantine/spotlight",
      "@mantine/tiptap",
    ],
  },
};

export default nextConfig;
