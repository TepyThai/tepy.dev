import { resolve } from 'path';
import { readFileSync } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Frontmatter } from './utils';
import rehypePrettyCode from 'rehype-pretty-code';

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
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
      },
    },
  });
  if (excerpt) {
    const { content } = await compileMDX({
      source: source.split('---')[2].slice(0, excerptLength),
      options: {
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
      },
    });
    excerptContent = content;
  }

  return { content, frontmatter, excerpt: excerptContent };
}

const rehypePrettyCodeOptions = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',
  // Or your own JSON theme
  // theme: JSON.parse(
  //   fs.readFileSync(require.resolve('./themes/dark.json'), 'utf-8')
  // ),

  // Keep the background or use a custom background color?
  keepBackground: true,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node: { children: string | any[] }) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node: { properties: { className: string[] } }) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node: { properties: { className: string[] } }) {
    // Each word node has no className by default.
    node.properties.className = ['word'];
  },
};
