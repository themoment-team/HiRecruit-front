import { Map } from 'react-kakao-maps-sdk';
import styled from '@emotion/styled';

import { Logo } from 'assets/Logo';

const LogoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const MapComponent: React.FC = () => {
  return (
    <>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
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
