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
  const rootClassList = classNames('space-y-x-small', className);

  return (
    <Tag className={rootClassList}>
      {heading && <Heading>{heading}</Heading>}
      {children}
    </Tag>
  );
};

export default Section;
