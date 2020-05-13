import React, { Component } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

class ReactGoogleMaps extends Component {
  mapRef = {};
  constructor(props) {
    super(props);
    this.state = {
      listMarker: [
        { lat: -34.397, lng: 150.644 },
        { lat: -1.397, lng: 150.6 },
        { lat: -34.397, lng: 151.6 },
      ],
    };
  }

  componentDidMount() {
    this.onFitBounds();
  }

  onFitBounds = () => {
    const bounds = new window.google.maps.LatLngBounds();
    const { listMarker } = this.state;
    listMarker.forEach((item) => {
      bounds.extend(new window.google.maps.LatLng(item.lat, item.lng));
    });
    this.mapRef.fitBounds(bounds);
  };

  render() {
    const { listMarker } = this.state;
    return (
      <GoogleMap
        ref={(ref) => {
          this.mapRef = ref;
        }}
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        {listMarker.map((item, index) => (
          <Marker key={index} position={item} />
        ))}
      </GoogleMap>
    );
  }
}

export default compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(ReactGoogleMaps);
