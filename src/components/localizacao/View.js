import React, { Component } from 'react';
import { Container } from 'mdbreact';
import Fade from 'react-reveal/Fade';

// import GoogleReactMap from './GoogleReactMap';

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
      <section id="localizacao" className="pt-5" style={{ zIndex: '-1' }}>
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
            <div className="row m-0" style={{ width: '100%' }}>
              <div className="col p-0">{/* <GoogleReactMap /> */}</div>
            </div>
          </Fade>
        </Container>
      </section>
    );
  }
}

export default Localizacao;
