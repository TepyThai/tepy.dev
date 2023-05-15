import { resolve } from 'path';
import { readFileSync } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Frontmatter } from './utils';

export async function getMdx({
  relativePath,
  slug,
}: {
  relativePath: string;
  slug: string;
}) {
  const contentDir = resolve(
    process.cwd(),
    'contents',
    relativePath,
    `${slug}.mdx`
  );
  const source = readFileSync(contentDir, 'utf8').toString();
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        useDynamicImport: true,
      },
    },
  });
  console.log('frontmatter', frontmatter);
  return { content, frontmatter };
}
