import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const style = {
  width: '100vw',
  height: '50vh',
}

class Info extends Component {
  render() {
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
        />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWUjvhjSt1YLLL7Ea1-qG1q2nmIL8c-rs'
})(Info);
