/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
    // mdxRs: true,
  },
};

import withMDX from '@next/mdx';

export default withMDX()(nextConfig);
// options: {
//   remarkPlugins: [],
//   rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
// },
