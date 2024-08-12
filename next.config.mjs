
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cloudflare-ipfs.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
            },
            {
                hostname: "standing-emu-103.convex.cloud"
            }
          ],
    }
};

export default nextConfig;
