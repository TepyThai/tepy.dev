/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
    // mdxRs: true,
    serverComponentsExternalPackages: ['shiki'],
  },
};

import withMDX from '@next/mdx';

export default withMDX()(nextConfig);
// options: {
//   remarkPlugins: [],
//   rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
// },
