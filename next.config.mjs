/** @type {import('next').NextConfig} */

const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.0.237"],
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "cdn.sanity.io",
  //     },
  //   ],
  // },
};

export default nextConfig;
