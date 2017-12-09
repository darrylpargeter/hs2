import { withGoogelMap, GoogleMap } from 'react-google-maps';

const Map = withGoogelMap((props) => 
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{
      lat: 51.5275,
      lng: -0.13269
    }}
  />
)

  export default Map;
