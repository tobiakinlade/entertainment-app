import Image from 'next/image';
import data from '../data';

function Nav() {
  return (
    <nav className='relative'>
      <h2>Trending</h2>

      <div className='flex space-x-2 overflow-x-scroll scrollbar-hide'>
        {data.map((post) => {
          const {
            title,
            thumbnail: { trending, regular },
            year,
            category,
            rating,
            isTrending,
            isBookedMarked,
          } = post;
          const {
            large: reg_large,
            medium: reg_medium,
            small: reg_small,
          } = regular;

          return (
            <div className='last:pr-24' key={title}>
              <Image
                height={1080}
                src={reg_small}
                width={1920}
                layout='responsive'
              />
              <h4>{title}</h4>
              <h6>{year}</h6>
            </div>
          );
        })}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    </nav>
  );
}

export default Nav;
