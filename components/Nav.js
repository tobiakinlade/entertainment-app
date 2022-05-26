import Image from 'next/image';
import Data from '../data.json';

function Nav() {
  return (
    <nav>
      <h2>Trending</h2>

      <div className='flex space-x-2 scroll-x-2'>
        {Data.map((post) => {
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
            <div key={title}>
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
    </nav>
  );
}

export default Nav;
