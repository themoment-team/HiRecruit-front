import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';

import { MobileMap } from 'components/MobileMap';

interface MobileProps {
  cookies: {
    [key: string]: string;
  };
}

const Mobile: NextPage<MobileProps> = ({ cookies }) => {
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
      <SWRConfig
        value={{
          revalidateOnFocus: false,
        }}
      >
        <MobileMap cookies={cookies} />
      </SWRConfig>
      <Toaster />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookies = ctx.req.cookies;

  return {
    props: {
      cookies,
    },
  };
};

export default Mobile;
