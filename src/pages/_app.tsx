import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useRouter } from 'next/router';

import { GlobalStyle } from 'shared/GlobalStyle';
import useSiteState from 'hooks/api/google-spread-sheets/use-site-state';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { data: siteState } = useSiteState();

  useEffect(() => {
    switch (siteState) {
      case 'INSPECTION':
        router.replace('/site-state/inspection');
        break;
      case 'NORMAL':
        router.replace('/');
        break;
      default:
        router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteState]);

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.mapApiKey}&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
