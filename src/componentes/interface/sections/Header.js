import React, { Component } from "react";
import { Container, Animation } from "mdbreact";

class Header extends Component {
  render() {
    return (
      <section id="header">
        <Container className="d-flex align-items-center h-100">
          <div className="col-md-6">
            <Animation type="fadeInLeft">
              <h1 className="display-3 text-white text-left">
              PereiraSC Produtos de Higiene, Limpeza e Descartáveis
              </h1>
            </Animation>
          </div>
        </Container>
      </section>
    );
  }
}

export default Header;
