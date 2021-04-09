import React, { FunctionComponent, useState, useCallback, useRef } from 'react';
import styles from './Maps.module.scss';

import Footer from '../../../components/Footer';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';
import { env } from 'process';

interface IMapsProps {}

const Maps: FunctionComponent<IMapsProps> = () => {
  const containerStyle = {
    top: '5vh',
    width: '100%',
    height: '94vh'
  };

  const center = {
    lat: 47.0186885,
    lng: 28.8269086
  };

  const libraries: Libraries = ['places'];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <div className={styles.Maps} id='info'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          onLoad={onMapLoad}>
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
};

export default Maps;
