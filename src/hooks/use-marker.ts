import { useEffect, useState } from 'react';
import { UserData } from 'types/worker.type';

const useMarker = (data: UserData[], map: kakao.maps.Map | undefined) => {
  const [markers, setMarkers] = useState<any[]>([]);

  useEffect(() => {
    if (!map) return;
    const gc = new kakao.maps.services.Geocoder();

    data.forEach(info => {
      gc.addressSearch(info.location, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = {
            ...info,
            position: {
              lat: result[0].y,
              lng: result[0].x,
            },
          };

          if (markers === []) {
            // generate initial marker
            setMarkers([coords]);
          } else {
            setMarkers(prevState => [...prevState, coords]);
          }
        }
      });
    });
  }, [map]);

  return markers;
};

export default useMarker;
