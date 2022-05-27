import data from '../data';
import Image from 'next/image';

function Recommend() {
  return (
    <div>
      <h1>Recommendation</h1>
      <div className='grid grid-cols-2 p-1 space-x-2 sm:grid-cols-3 sm:space-x-4 md:grid-cols-4 md:space-x-8'>
        {data.map((item, index) => {
          const {
            title,
            thumbnail: { regular, trending },
            year,
            category,
            isBookedMarked,
            isTrending,
            rating,
          } = item;
          const {
            large: reg_large,
            medium: reg_medium,
            small: reg_small,
          } = regular;
          return (
            <div className='' key={index}>
              <Image
                width={350}
                height={250}
                objectFit='contain'
                src={reg_small}
              />
              <div className='flex space-x-1'>
                <p>{year}</p>
                <div>{category}</div>
                <p>.{rating}</p>
              </div>
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommend;
