import Image from 'next/image';
import data from '../data';
import Thumnail from './Thumnail';

function Nav() {
  return (
    <nav className='relative'>
      <h2>Trending</h2>

      <div className='flex overflow-x-scroll space-x-1 scrollbar-hide'>
        {data.map((post, index) => {
          return (
            <div className='last:pr-24 space-x-2' key={index}>
              <Thumnail data={post} />
            </div>
          );
        })}
      </div>
      {/* <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' /> */}
    </nav>
  );
}

export default Nav;
