import classNames from 'classnames';
import { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

const Heading = ({
  children,
  className,
  level = 'h1'
}: HeadingProps) => {
  const Tag = level;
  const classList = classNames(className, 'text-primary', {
    'text-xxx-large': level === 'h1',
    'text-xx-large': level === 'h2',
    'text-x-large': level === 'h3',
    'text-large': ['h4', 'h5', 'h6'].includes(level)
  });

  return <Tag className={classList}>{children}</Tag>;
};

export default Heading;
