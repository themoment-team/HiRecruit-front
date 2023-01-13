import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import { GlobalStyle } from 'shared/GlobalStyle';
import { useWindowSize } from 'hooks/use-window-size';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const windowSize = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== '/site-state/inspection' && windowSize.width) {
      const { width } = windowSize;

      if (width <= 500 && router.pathname !== '/device/mobile') {
        window.location.href = '/device/mobile';
      }

      if (width > 500 && router.pathname !== '/') {
        window.location.href = '/';
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize]);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
