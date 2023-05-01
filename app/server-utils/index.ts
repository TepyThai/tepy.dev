import { readdirSync } from 'fs';
import { resolve } from 'path';
export function getPostSlugsFromPath(relativePath: string) {
  const subDir = relativePath.match(/^\s*\((.*?)\)/)?.[1];
  const dir = resolve(__dirname, relativePath);

  const posts = readdirSync(dir, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => (subDir ? `${subDir}/${dirent.name}` : dirent.name));

  return posts;
}
