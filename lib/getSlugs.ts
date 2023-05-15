import { readdirSync } from 'fs';
import { resolve } from 'path';

export function getPostMetaFromPath(relativePath: string) {
  const contentDir = resolve(process.cwd(), 'contents', relativePath);

  const posts = readdirSync(contentDir, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name.replace(/\.md(x)$/, ''));

  return posts;
}
