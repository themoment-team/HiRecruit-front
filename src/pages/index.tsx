import type { NextPage } from 'next';
import { Map } from 'react-kakao-maps-sdk';

const Home: NextPage = () => {
  return (
    <>
      <Map
        center={{
          lat: 36.658563176254795,
          lng: 127.86119616960151,
        }}
        style={{
          width: '100vw',
          height: '100vh',
        }}
        level={12}
      />
    </>
  );
};

export default Home;
