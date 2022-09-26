import { ReactNode } from 'react';

import Section from 'components/section';
import Heading from 'components/heading';

type PageProps = {
  children: ReactNode;
  heading?: string;
};

const Page = ({ children, heading= '' }: PageProps) => (
  <>
    <header className='bg-primary h-[60px]' />
    <Section Tag='main' heading={heading} className='mx-small my-large'>
      <Heading>{heading}</Heading>
      {children}
    </Section>
  </>
);

export default Page;
