import React, { FunctionComponent, useState, useCallback } from 'react';
import styles from './Info.module.scss';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface IinfoProps {}

const Info: FunctionComponent<IinfoProps> = () => {
  const containerStyle = {
    top: '5vh',
    left: '10vw',
    width: '25rem',
    height: '25rem'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ''
  });

  const [map, setMap] = useState(null);
  console.log(map);

  const onLoad = useCallback((map) => {
    // const bounds = new window. .google.maps.LatLngBounds();
    // const bounds = new InfoWindow
    // map.fitBounds(bounds);
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
          zoom={17}
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
