import React from "react";
import { Container, Animation } from "mdbreact";

const Header = () => {
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
            <img
              src="/img/warung.jpg"
              className="img-fluid"
              alt="Responsive image"
            />
          </Animation>
        </div>
      </Container>
    </section>
  );
};

export default Header;
