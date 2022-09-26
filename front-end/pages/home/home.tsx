import Card from 'components/card';
import Page from 'components/page';
import Section from 'components/section';

import testData from '../testData';

type ListProps = {
  heading: string;
  items: Array<{
    id: string;
    coverSrc: string;
  }>;
};

const List = ({ heading, items }: ListProps) => (
  <Section heading={heading}>
    <ul className='grid m-0 p-0 list-none grid-cols-3 gap-small'>
      {items.map((item) => (
        <li key={item.id}>
          <Card coverSrc={item.coverSrc} />
        </li>
      ))}
    </ul>
  </Section>
);

const Home = () => (
  <Page>
    <div className='space-y-large'>
      <List heading='Objects' items={testData.objects} />
      <List heading='Backgrounds' items={testData.backgrounds} />
      <List heading='Textures' items={testData.textures} />
    </div>
  </Page>
);

export default Home;
