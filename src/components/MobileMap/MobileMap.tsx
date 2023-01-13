import { BottomSheetComponent } from 'components/BottomSheet';
import { useState } from 'react';
import { MobileWrapper } from './Mobile.styles';
import { Map } from 'react-kakao-maps-sdk';
import useMarker from 'hooks/use-marker';
import { MarkerList } from 'components/MarkerList';
import defaultMapConfig from 'shared/DefaultMapConfig';

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
          lat: defaultMapConfig.lat,
          lng: defaultMapConfig.lng,
        }}
        style={{
          width: '100vw',
          height: '100vh',
        }}
        onCreate={setMap}
        level={defaultMapConfig.level}
      >
        <MarkerList markers={markers} />
        <BottomSheetComponent cookies={cookies} />
      </Map>
    </MobileWrapper>
  );
};
