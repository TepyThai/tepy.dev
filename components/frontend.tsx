'use client';

import { Card, CardProps } from './card';
import { AstroIcon } from './icon/astro-icon';
import { ReactIcon } from './icon/react-icon';
import { TipTapIcon } from './icon/tiptap-icon';
import { Section } from './section';

const data: CardProps[] = [
  {
    title: 'React',
    description: `I've been using React since its Class Components days back in 2018. I mostly built portfolio websites `,
    icon: <ReactIcon />,
    type: 1,
    href: '/react',
  },
  {
    title: 'Rich Text Editor',
    description:
      'Using React and TipTap, I built a rich text editor that can be used in any React app. It supports all the basic formatting options, as well as custom blocks and inline nodes. See the source code on GitHub.',
    icon: <TipTapIcon />,
    type: 1,
    href: '/rte',
  },
  {
    title: 'Next.js',
    description: `I've been using Next.js since 2020. I've built a few websites with it, including this one. I'm also familiar with Next.js's API routes and serverless functions.`,
    icon: <AstroIcon />,
    type: 1,
    href: '/next',
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
