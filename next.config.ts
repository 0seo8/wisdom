import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hazrjfxlzlhymyfghhme.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: '/지혜의밭', destination: '/company', permanent: true },
      { source: '/공지사항', destination: '/notice', permanent: true },
      { source: '/문의하기', destination: '/contact', permanent: true },
      { source: '/브로슈어', destination: '/brochure', permanent: true },
      { source: '/일상의예술', destination: '/daily-art', permanent: true },
      { source: '/기업교육-및-행사', destination: '/business', permanent: true },
      { source: '/힐소마', destination: '/healsoma', permanent: true },
      { source: '/소매틱랩', destination: '/somatic-lab', permanent: true },
    ];
  },
  output: "standalone",
};

export default nextConfig;
