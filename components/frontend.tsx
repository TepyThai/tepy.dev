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
  },
  {
    title: 'Rich Text Editor',
    description:
      'Using React and TipTap, I built a rich text editor that can be used in any React app. It supports all the basic formatting options, as well as custom blocks and inline nodes. See the source code on GitHub.',
    icon: <TipTapIcon />,
  },
  {
    title: 'Astro',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim, doloribus voluptatibus maxime harum cum! Deleniti fuga expedita, mollitia aut repellat, consectetur enim, voluptas cumque est corporis impedit obcaecati at?',
    icon: <AstroIcon />,
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
