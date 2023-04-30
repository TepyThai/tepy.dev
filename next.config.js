/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  swcMinify: false,
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
