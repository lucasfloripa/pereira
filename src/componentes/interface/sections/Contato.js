import React from "react";

import { Container } from "mdbreact";

import ContatoFormEnviarEmail from "../contato_componentes/ContatoFormEnviarEmail";
import ContatoInfo from "../contato_componentes/ContatoInfo";
import ContatoFooterResp from "../contato_componentes/ContatoFooterResp";

import Fade from "react-reveal/Fade";

const Contato = () => {
  return (
    <section id="contato">
      <Container className="p-5">
        <Fade buttom>
          <h3
            className="hr-text font-weight-bold display-4"
            data-content="Contato"
          />
        </Fade>
        <Fade buttom>
          <div className="row my-5">
            <div className="col-md-6 mb-resp">
              <ContatoInfo />
            </div>
            <div className="col-md-6">
              <ContatoFormEnviarEmail />
            </div>
          </div>
        </Fade>
      </Container>
      <Container className="color-red p-5" fluid>
        <Fade buttom>
          <div className="row">
            <div className="col">
              <div style={{width: '100%'}}>
                <iframe
                  width="100%"
                  height="400"
                  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=R.%20Eliane%20Mota%2C%202505%20-%20Ipiranga%20S%C3%A3o%20Jos%C3%A9%20-%20SC%2088110-840.%20Brasil+(Pereira%20Descart%C3%A1veis)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                />
              </div>
              <br />
            </div>
          </div>
        </Fade>
      </Container>
      <Container
        className="d-block d-md-none color-black fixed-bottom p-2"
        fluid
      >
        <ContatoFooterResp />
      </Container>
    </section>
  );
};

export default Contato;
