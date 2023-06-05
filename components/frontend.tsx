'use client';

import { Card, CardProps } from './card';
import { NextIcon } from './icon/next-icon';
import { ReactIcon } from './icon/react-icon';
import { TipTapIcon } from './icon/tiptap-icon';
import { Section } from './section';

const data: CardProps[] = [
  {
    title: 'React',
    description: `I've been using React since its Class Components days back in 2018. I rebuilt my personal site many times with Gatsby, Next.js, Remix, Astro, and now Next 13, as a result of my love for hypertrendy stacks. In the last 2 years, I've been building rich UI SPA apps including full-fledged WYSIWYG complex editor.`,
    icon: <ReactIcon />,
    type: 1,
  },
  {
    title: 'Rich Text Editor',
    description: `I'd say I have some strange fates with WYSIWYG editor. I built 2 full production-ready editors, one for my personal side project using Slate.js and one for my current company using TipTap. I've also tried a few other editors in my free time such as Draft.js, ProseMirror, Quill.js, and Lexical.`,
    icon: <TipTapIcon />,
    type: 1,
  },
  {
    title: 'Next.js',
    description: `I've been a fan of Next.js and Vercel since 2019. I built my first fullstack site with Next.js and Graphql. Rebuilt my personal site twice with Next.js and MDX. Unfortunately, I've not got the chance to build any production-ready apps with Next.js in my job yet, so I'm really looking forward to it. I believe that as a Frontend developer, mastering Next.js is a great way to understand and build a better web app.`,
    icon: <NextIcon />,
    type: 1,
  },
];

export const Frontend = () => {
  return (
    <Section title='Frontend' type={1}>
      {data.map((card) => (
        <Card {...card} key={card.title} />
      ))}
    </Section>
  );
};
