import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PereiraSC = ({ text }) => (
  <div>
    <FontAwesomeIcon icon="map-marker-alt" color="red" size="3x" />{" "}
    <h5 className="text-danger">{text}</h5>
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -27.55950272,
      lng: -48.61838101
    },
    zoom: 18
  };

  render() {
    return (
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDZj0Ig8xkhh4Tw1a2FEX1IdcH4Kktk99I" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <PereiraSC lat={-27.55950272} lng={-48.61838101} text={"Pereira"} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
