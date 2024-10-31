/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'console.cloudinary.com',
            },
        ],
   },
};
export default nextConfig;
