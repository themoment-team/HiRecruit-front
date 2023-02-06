import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/static/HR_Transparent.png" type="image/png" />

          {/* Open Graph / Facebook */}

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hirecruit.site/" />
          <meta property="og:title" content="HR | 하이리쿠르트" />
          <meta
            property="og:description"
            content="HiRecruit을 통해 보다 뛰어난 멘토를 찾고, 혁신적인 취업준비 경험을 느끼세요."
          />
          <meta property="og:image" content="/static/더모먼트팀-OG.png" />

          {/* Twitter */}

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://hirecruit.site/" />
          <meta property="twitter:title" content="HR | 하이리쿠르트" />
          <meta
            property="twitter:description"
            content="HiRecruit을 통해 보다 뛰어난 멘토를 찾고, 혁신적인 취업준비 경험을 느끼세요."
          />
          <meta property="twitter:image" content="/static/더모먼트팀-OG.png" />

          {/* pretendard */}

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.mapApiKey}&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
