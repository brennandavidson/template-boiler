import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper routing on Vercel
  trailingSlash: false,

  // Allow external images from Unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },

  // SEO Redirects are now handled in middleware.ts for instant updates
  // Admin can manage redirects via dashboard without server restart
};

export default nextConfig;
