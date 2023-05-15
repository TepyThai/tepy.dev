import { getMdx } from '@/lib/getMdx';
import { cn } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function WritingPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { content, frontmatter } = await getMdx({
    relativePath: 'writing',
    slug,
  });

  return (
    <>
      <h1 className={cn(' prose-headings:text-red-400')}>
        {frontmatter.title}
      </h1>
      {content}
    </>
  );
}
