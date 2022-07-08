import { BottomSheetComponent } from 'components/BottomSheet';
import { useState } from 'react';
import { MobileWrapper } from './Mobile.styles';
import { Map } from 'react-kakao-maps-sdk';
import useMarker from 'hooks/use-marker';
import { MarkerList } from 'components/MarkerList';

interface MobileMapProps {
  cookies: {
    [key: string]: string;
  };
}

export const MobileMapComponent: React.FC<MobileMapProps> = ({ cookies }) => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const markers = useMarker(map);

  return (
    <MobileWrapper>
      <Map
        center={{
          lat: 36.658563176254795,
          lng: 127.86119616960151,
        }}
        style={{
          width: '100vw',
          height: '100vh',
        }}
        onCreate={setMap}
        level={12}
      >
        <MarkerList markers={markers} />
        <BottomSheetComponent cookies={cookies} />
      </Map>
    </MobileWrapper>
  );
};
