import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    images: {
        unoptimized: true,
        domains: ['hostinger.com'], // Add your domain if needed
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // Add other config options as needed
};

export default nextConfig;
