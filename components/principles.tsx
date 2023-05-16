import { Card } from './card';
import { Section } from './section';

export const Principles = () => {
  return (
    <Section title='Principles' type={2}>
      <Card
        title='Balance is everything'
        description={`Balance is the key to navigate many aspects of life. One can hardly go wrong with balance, most of the time.`}
        type={2}
      />
      <Card
        title='Start with principles'
        description={`Principles are the foundation of everything. Understand the foundation deeply and become unstoppable in everything.`}
        type={2}
      />
      <Card
        title='Your Limit = You'
        description={`You are INFINTY. Do the math.`}
        type={2}
      />
      {/* <Card
        title='Principles'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim voluptates ut. Modi, assumenda culpa! Neque eveniet rem soluta, error at eius voluptatem tempora, necessitatibus, ullam velit alias sapiente suscipit.'
        type={2}
      /> */}
    </Section>
  );
};
