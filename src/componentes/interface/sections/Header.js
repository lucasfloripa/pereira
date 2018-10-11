import React from "react";
import { Container, Animation } from "mdbreact";

const Header = () => {
  return (
    <div id="main-area">
      <Container
        className="d-flex justify-content-start align-items-center h-100 w-75"
        fluid
      >
        <Animation type="fadeInLeft">
          <h3 className="display-1 text-white text-left">Pereira</h3>
          <p className="display-4 text-danger text-left">
            Higiene, Limpeza e Descartáveis
          </p>
        </Animation>
      </Container>
    </div>
  );
};

export default Header;
