import React, { Component } from 'react';
import { Polygon, Map, GoogleApiWrapper } from 'google-maps-react';


const style = {
  width: '100vw',
  height: '50vh',
}

const coords = [
  { lat: 51.527807, lng: -0.134470 },
  { lat: 51.527900, lng: -0.134570 }
]

class Info extends Component {
  render() {
  var triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}
    ];
    return (
        <Map 
          google={this.props.google} 
          zoom={19} 
          style={style}
          initialCenter={{
            lat: 51.527807,
            lng: -0.134470
          }}
          margin={[0,0,0,0]}
        >
        <Polygon
          paths={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={1}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={1}
        />
        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWUjvhjSt1YLLL7Ea1-qG1q2nmIL8c-rs'
})(Info);
