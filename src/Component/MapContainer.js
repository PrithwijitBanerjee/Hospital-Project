import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  width: 1400,
  height: 500
};

const center = {
  lat:  22.578005,
  lng:  88.358536
};

function MapContainer() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD2CLA5mgPIRvCdZgF-6Brz54_4GeLQXIg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapContainer)

