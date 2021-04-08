import React, { FunctionComponent, useState, useCallback } from 'react';
import styles from './Maps.module.scss';

import Footer from '../../../components/Footer';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface IMapsProps {}

const Maps: FunctionComponent<IMapsProps> = () => {
  const containerStyle = {
    top: '5vh',
    width: '100%',
    height: '94vh'
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
    <div className={styles.Maps} id='info'>
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
      {console.log(map)}
      <Footer />
    </div>
  );
};

export default Maps;
