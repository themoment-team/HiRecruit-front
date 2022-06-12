import { useEffect, useState } from 'react';
import useCompanyList from './api/company/use-company-list';

const useMarker = (map: kakao.maps.Map | undefined) => {
  const [markers, setMarkers] = useState<any[]>([]);
  const { data } = useCompanyList();

  useEffect(() => {
    if (!(map && data)) return;
    const gc = new kakao.maps.services.Geocoder();

    setMarkers([]);

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
  }, [map, data]);

  return markers;
};

export default useMarker;
