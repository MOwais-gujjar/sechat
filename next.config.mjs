
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
            },
            {
                protocol: 'https',
                hostname: "zxglejitebeelfhtrqid.supabase.co"
            }

            
          ],
    }
};

export default nextConfig;
