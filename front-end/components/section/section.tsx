import { ReactNode } from 'react';
import classNames from 'classnames';

import Heading from 'components/heading';

type SectionProps = {
  children: ReactNode;
  className?: string;
  Tag?: 'div' | 'main';
  heading?: string;
};

const Section = ({
  children,
  className,
  Tag = 'div',
  heading = ''
}: SectionProps) => {
  const classList = classNames('space-y-x-small', className);

  return (
    <Tag className={classList}>
      {heading && <Heading>{heading}</Heading>}
      {children}
    </Tag>
  );
};

export default Section;
