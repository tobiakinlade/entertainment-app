import Image from 'next/image';

function Header() {
  return (
    <div className='flex space-x-4 bg-[#161D2F] justify-between p-2'>
      <div>
        <Image
          src='/assets/logo.svg'
          objectFit='contain'
          height={40}
          width={40}
        />
      </div>
      <div className='flex space-x-6 p-2'>
        <div className=' text-[#FFFFFF]'>
          <Image
            src='/assets/icon-nav-home.svg'
            objectFit='contain'
            height={30}
            width={30}
            className='text-white'
          />
        </div>
        <div>
          <Image
            src='/assets/icon-nav-movies.svg'
            objectFit='contain'
            height={30}
            width={30}
          />
        </div>
        <div>
          <Image
            src='/assets/icon-nav-tv-series.svg'
            objectFit='contain'
            height={30}
            width={30}
          />
        </div>
        <div>
          <Image
            src='/assets/icon-nav-bookmark.svg'
            objectFit='contain'
            height={30}
            width={30}
          />
        </div>
      </div>
      <div>
        <div className='border border-white flex justify-center rounded-full'>
          <Image
            src='/assets/image-avatar.png'
            objectFit='contain'
            height={40}
            width={40}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
