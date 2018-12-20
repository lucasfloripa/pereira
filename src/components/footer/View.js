import React, { Component } from 'react';
import { Container } from 'mdbreact';
import $ from 'jquery';
import Fade from 'react-reveal/Fade';

import Informations from './Informations';

class Footer extends Component {
  componentDidMount() {
    $('#year').text(new Date().getFullYear());
  }

  render() {
    return (
      <footer id="footer" style={{ backgroundColor: 'black' }}>
        <Container fluid className="text-white pt-3 px-5">
          <Fade buttom>
            <div className="row">
              <div className="col-md-6 p-0">
                <Informations />
              </div>
            </div>
            <div className="row pb-resp pt-3">
              <p className="p-0 d-block">
                Copyright &copy;
                <span id="year" /> PereiraSC
              </p>
              <span className="mr-3" />
              <p>| Design por Lucas Gonçalves |</p>
            </div>
          </Fade>
        </Container>
      </footer>
    );
  }
}

export default Footer;
