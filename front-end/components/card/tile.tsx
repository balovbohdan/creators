import Heading from 'components/heading';

type TileProps = {
  coverSrc: string;
};

const Tile = ({ coverSrc }: TileProps) => {
  return (
    <a
      href={coverSrc}
      className='
        block w-full max-w-[400px] p-[5px] cursor-pointer
        rounded-normal box-border border-2 border-transparent
        hover:no-underline hover:border-accent
      '
    >
      <div
        className='h-[230px] rounded-normal bg-center bg-cover'
        style={{ backgroundImage: `url(${coverSrc})` }}
      />
      <div className='grid-rows-2'>
        <Heading level='h4' className='mx-0 my-xxx-small text-primary'>
          Pick and Match - Complete Game Kit
        </Heading>
        <p className='mx-0 my-xxx-small text-secondary text-small'>
          By John Doe
        </p>
      </div>
    </a>
  );
};

export default Tile;
