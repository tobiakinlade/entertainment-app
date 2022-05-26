import Image from 'next/image';
import React from 'react';

function Search() {
  return (
    <form className='flex p-2 bg-[#161D2F] space-x-2'>
      <Image
        src='/assets/icon-search.svg'
        objectFit='contain'
        width={20}
        height={20}
      />
      <input
        className='bg-[#161D2F] flex-1 outline-none border-0'
        type='text'
        placeholder='Search form movies or TV series'
      />
    </form>
  );
}

export default Search;
