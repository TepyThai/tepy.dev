import { resolve } from 'path';
import { readFileSync } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Frontmatter } from './utils';

export async function getMdx({
  relativePath,
  slug,
  excerpt = false,
  excerptLength = 200,
}: {
  relativePath: string;
  slug: string;
  excerpt?: boolean;
  excerptLength?: number;
}) {
  let excerptContent;

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
  if (excerpt) {
    const { content } = await compileMDX({
      source: source.split('---')[2].slice(0, excerptLength),
    });
    excerptContent = content;
  }

  return { content, frontmatter, excerpt: excerptContent };
}
