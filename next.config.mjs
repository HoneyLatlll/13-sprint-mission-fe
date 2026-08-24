/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minsu-bucket-20260823.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
