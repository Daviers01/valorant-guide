/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.contentstack.io",
  //       port: "",
  //       pathname: "/v3/assets",
  //     },
  //   ],
  // },
  images: {
    domains: ["images.contentstack.io"],
  },
};

module.exports = nextConfig;
