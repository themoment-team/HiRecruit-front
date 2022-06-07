import type { NextPage } from 'next';

import { Map } from 'components/Map';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>HR | 하이리쿠르트</title>
        <meta name="title" content="HR | 하이리쿠르트" />
        <meta
          name="description"
          content="HiRecruit을 통해 보다 뛰어난 멘토를 찾고, 혁신적인 취업준비 경험을 느끼세요."
        />
      </Head>
      <Map />
    </>
  );
};

export default Home;
