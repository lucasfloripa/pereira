import React from 'react';

import { Container } from 'mdbreact';

import ContatoFormEnviarEmail from '../contato_componentes/ContatoFormEnviarEmail';
import ContatoFooterResp from '../contato_componentes/ContatoFooterResp';

import Fade from 'react-reveal/Fade';

const Contato = () => {
  return (
    <section id="contato" className="color-light-red pt-5">
      <Container className="p-5">
        <Fade buttom>
          <h1
            className="hr-text font-weight-bold display-4"
            data-content="Contato"
          />
        </Fade>
        <Fade buttom>
          <div className="row d-flex flex-column align-items-center my-5">
            <h4 className="mb-4 text-white">
              GOSTARIA DE MAIS INFORMAÇÕES? FALE CONOSCO.
            </h4>
            <ContatoFormEnviarEmail />
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
