import React, { Component } from "react";
import { Container } from "mdbreact";
import Fade from "react-reveal/Fade";

import GoogleReactMap from "./GoogleReactMap";

class Localizacao extends Component {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <section id="localizacao" className="pt-5" style={{ zIndex: "-1" }}>
        <Container className="text-center pt-5 px-0" fluid>
          <Fade buttom>
            <h1
              className="hr-text-loc font-weight-bold display-4"
              data-content="Endereço"
            />
            <p className="lead">
              R. Eliane Mota, 2505 - Ipiranga, São José - SC
            </p>
            <p className="lead mb-5">CEP: 88110-840.</p>
          </Fade>
          <Fade buttom>
            <div className="row m-0" style={{ width: "100%" }}>
              <div className="col p-0">
                {/* <GoogleReactMap /> */}

                <div style={{ width: "100%" }}>
                  <iframe
                    style={{ width: "100%", height: "400px" }}
                    className="m-0 p-0"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=-27.559402611687613,-48.6179780960083&amp;q=R.%20Eliane%20Mota%2C%202505%20-%20Ipiranga%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC%2C%2088110-840%2C%20Brasil+(PereiraSC)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  >
                    <a href="https://www.maps.ie/map-my-route/">
                      Create route map
                    </a>
                  </iframe>
                </div>
                <br />
                <br />
              </div>
            </div>
          </Fade>
        </Container>
      </section>
    );
  }
}

export default Localizacao;
