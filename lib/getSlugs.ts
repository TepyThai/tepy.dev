import { readdirSync } from 'fs';
import { resolve } from 'path';
import { getMdx } from './getMdx';

export async function getPostMetaFromPath(
  relativePath: string,
  excerptLength = 200
) {
  const contentDir = resolve(process.cwd(), 'contents', relativePath);

  const posts = readdirSync(contentDir, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isFile())
    .map(async (dirent) => {
      const slug = dirent.name.replace(/\.md(x)$/, '');
      const { excerpt, frontmatter } = await getMdx({
        relativePath,
        slug,
        excerpt: true,
        excerptLength,
      });
      return { slug, title: frontmatter.title, excerpt };
    });

  return Promise.all(posts);
}
