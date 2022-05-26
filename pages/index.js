import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/nav';
import Search from '../components/Search';

export default function Home() {
  return (
    <div className='w-full'>
      <Head>
        <title>Entertainment App</title>
        <link rel='icon' href='/assets/favicon-32x32.png' />
      </Head>

      <Header />
      <Search />
      <Nav />
    </div>
  );
}
