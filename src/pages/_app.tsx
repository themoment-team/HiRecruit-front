import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import { GlobalStyle } from 'shared/GlobalStyle';
import { useWindowSize } from 'hooks/use-window-size';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const windowSize = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    if (windowSize.width) {
      const { width } = windowSize;

      if (width <= 500) {
        router.push('/device/mobile');
      }

      if (width > 500) {
        router.push('/');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize]);

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
