import React from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import { GlobalStyle } from 'shared/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
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
