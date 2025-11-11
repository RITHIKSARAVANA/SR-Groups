/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    basePath: '',
}

export default nextConfig 