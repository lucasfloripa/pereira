import React, { Component } from "react";
import { Container, Animation } from "mdbreact";
import HeaderCarousel from "../header_componentes/HeaderCarousel";
import asd from "../../../imgs/logosite.png";

class Header extends Component {
  render() {
    return (
      <section id="header">
        <Container className="d-flex align-items-center h-100">
          <div className="col-md-6">
            <Animation type="zoomIn">
              {/* <h1 className="display-3 text-white text-left">
                PereiraSC Produtos de Higiene, Limpeza e Descartáveis
              </h1> */}
              <img className="d-block w-100" src={asd} />
            </Animation>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <Animation type="fadeInRight" delay="2s">
              <HeaderCarousel />
            </Animation>
          </div>
        </Container>
      </section>
    );
  }
}

export default Header;
