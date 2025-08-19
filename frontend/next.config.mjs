/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                pathname:"/uploads/**"
            }
        ],
        dangerouslyAllowSVG: true,
    }
};

export default nextConfig;
