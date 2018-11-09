import React, { Component } from 'react';
import { Container, Animation } from 'mdbreact';
import HeaderCarousel from '../header_componentes/HeaderCarousel';
import Logo from '../../../imgs/logosite.png';
import HeaderWhatsAppIcon from '../header_componentes/HeaderWhatsAppIcon';

class Header extends Component {
  render() {
    return (
      <section id="header">
        <Container className="d-flex align-items-center h-100">
          <div className="col-md-6">
            <Animation type="zoomIn">
              <img className="d-block w-100" src={Logo} alt="Pereira Logo" />
            </Animation>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <Animation type="zoomIn">
              <HeaderCarousel />
            </Animation>
          </div>
          <div
            id="whatsapp-icon"
            className="d-none d-md-block"
            style={{ width: '200%', zIndex: '123' }}
          >
            <HeaderWhatsAppIcon />
          </div>
        </Container>
      </section>
    );
  }
}

export default Header;
