import { resolve } from 'path';
import { readFileSync } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Frontmatter } from './utils';
import rehypeHighlight from 'rehype-highlight';

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
        // remarkPlugins: [[remarkTwoslash, { theme: darkThemePath, path: '/' }]],
        rehypePlugins: [rehypeHighlight],
      },
    },
  });
  if (excerpt) {
    const { content } = await compileMDX({
      source: source.split('---')[2].slice(0, excerptLength),
      // options: {
      //   mdxOptions: {
      //     rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
      //   },
      // },
    });
    excerptContent = content;
  }

  return { content, frontmatter, excerpt: excerptContent };
}

const darkThemePath = resolve(process.cwd(), 'lib/moonlight-theme.json');

const rehypePrettyCodeOptions = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',
  // Or your own JSON theme
  // theme: JSON.parse(readFileSync(darkThemePath, 'utf-8')),

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
    node.properties.className.push('line--highlighted');
  },
  onVisitHighlightedWord(node: { properties: { className: string[] } }) {
    // Each word node has no className by default.
    node.properties.className = ['word'];
  },
};
