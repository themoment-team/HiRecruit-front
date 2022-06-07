import type { NextPage } from 'next';

import { Map } from 'components/Map';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HR | 하이리쿠르트</title>
      </Head>
      <Map />
    </>
  );
};

export default Home;
