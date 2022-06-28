import { Map } from 'react-kakao-maps-sdk';

import { useState } from 'react';
import useMarker from 'hooks/use-marker';
import { SideBar } from 'components/SideBar';
import { MarkerList } from 'components/MarkerList';
import { Launcher } from 'components/Launcher';

interface MapProps {
  cookies: {
    [key: string]: string;
  };
}

export const MapComponent: React.FC<MapProps> = ({ cookies }) => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const markers = useMarker(map);

  return (
    <>
      <Map
        center={{
          lat: 36.658563176254795,
          lng: 127.86119616960151,
        }}
        style={{
          position: 'fixed',
          width: 'calc(100vw - 28rem)',
          height: '94vh',
          borderRadius: '3.125rem',
          top: '1.85rem',
          right: '2.2rem',
        }}
        onCreate={setMap}
        level={12}
      >
        <MarkerList markers={markers} />
        <SideBar cookies={cookies} />
      </Map>
      <Launcher />
    </>
  );
};
