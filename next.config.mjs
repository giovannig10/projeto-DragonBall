/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dragonball-api.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
