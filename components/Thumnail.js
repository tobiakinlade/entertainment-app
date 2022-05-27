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
    <div className='h-[400px] w-[400px]'>
      {isTrending && (
        <div className='p-2 w-[400px]'>
          <Image
            className=''
            src={reg_large}
            width={400}
            height={300}
            objectFit='contain'
            layout='intrinsic'
          />
          <div className='space-x-2 text-white flex'>
            <p>{year}</p>
            <p>{category}</p>
          </div>
          <p>
            <p>{title}</p>
          </p>
        </div>
      )}
    </div>
  );
}

export default Thumnail;
