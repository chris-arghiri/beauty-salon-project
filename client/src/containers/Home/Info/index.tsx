import React, { FunctionComponent, useState, useCallback } from 'react';
import styles from './Info.module.scss';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface IinfoProps {}

const Info: FunctionComponent<IinfoProps> = () => {
  const containerStyle = {
    width: '70rem',
    height: '30rem'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAuCqr9q1soEE9Atjt64EdHSFuANK9xyzE'
  });

  const [map, setMap] = useState(null);
  console.log(map);

  const onLoad = useCallback((map) => {
    // const bounds = new window. .google.maps.LatLngBounds();
    // const bounds = new InfoWindow
    // map.fitBounds(bounds);
    // console.log(InfoWindow);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  return (
    <div className={styles.Info} id='info'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Info;
