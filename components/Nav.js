import Image from 'next/image';
import data from '../data';
import Thumnail from './Thumnail';

function Nav() {
  return (
    <nav className=' bg-[#161D2F]'>
      <h2 className='text-lg text-white'>Trending</h2>

      <div className='flex overflow-x-scroll   scrollbar-hide'>
        {data.map((post, index) => {
          const {
            title,
            thumbnail: { regular, trending },
            year,
            category,
            isBookedMarked,
            isTrending,
            rating,
          } = post;
          const {
            large: reg_large,
            medium: reg_medium,
            small: reg_small,
          } = regular;
          return (
            <div className=' ' key={index}>
              {isTrending && (
                <div className=''>
                  <Image
                    src={reg_large}
                    width={500}
                    height={300}
                    objectFit='contain'
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
        })}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    </nav>
  );
}

export default Nav;
