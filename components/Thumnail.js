import Image from 'next/image';

function Thumnail({ data }) {
  const {
    title,
    thumbnail: { trending, regular },
    year,
    category,
    rating,
    isTrending,
    isBookedMarked,
  } = data;
  const { large: reg_large, medium: reg_medium, small: reg_small } = regular;

  return (
    <div className='space-x-2'>
      {isTrending && (
        <div>
          <Image width={1078} height={1080} src={reg_large} />
          <p>{title}</p>
          <p>{category}</p>
        </div>
      )}
    </div>
  );
}

export default Thumnail;
