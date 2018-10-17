import React, { Component } from "react";
import { Container, Animation } from "mdbreact";
import HeaderCarousel from "../header_componentes/HeaderCarousel";

class Header extends Component {
  componentDidMount() {
    const headerTitle = document.querySelector("#header h3");
    const headerParagraph = document.querySelector("#header p");

    if (window.innerWidth < 364) {
      headerTitle.style.fontSize = "4rem";
      headerParagraph.style.fontSize = "2rem";
    }
  }

  render() {
    return (
      <section id="header">
        <Container className="d-flex align-items-center h-100">
          <div className="col-md-6">
            <Animation type="fadeInLeft">
              <h3 className="display-1 text-white text-left">Pereira</h3>
              <p className="display-4 text-danger text-left">
                Higiene, Limpeza e Descartáveis
              </p>
            </Animation>
          </div>
          <div className="col-md-6">
            <Animation type="fadeInRight">
              {/* <HeaderCarousel /> */}
              {/* <img src="/img/warung.jpg" className="img-fluid" alt="" /> */}
            </Animation>
          </div>
        </Container>
      </section>
    );
  }
}

export default Header;
