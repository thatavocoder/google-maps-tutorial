import { GoogleMap, MarkerF } from '@react-google-maps/api';

const MapWithMarker = () => {
  const myLatLng = { lat: 19.07, lng: 72.87 }

  return (
    <>
      <h1>Displaying A Map With A Marker</h1>
      <GoogleMap
        zoom={5}
        center={myLatLng}
        mapContainerClassName='map-container'
      >
        <MarkerF position={myLatLng} draggable />
      </GoogleMap>
    </>
  );
};

export default MapWithMarker;
