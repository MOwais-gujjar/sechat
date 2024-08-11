
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cloudflare-ipfs.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
            },
          ],
    }
};

export default nextConfig;
