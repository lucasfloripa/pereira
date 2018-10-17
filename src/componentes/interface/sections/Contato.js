import React from "react";

import { Container } from "mdbreact";

import ContatoFormEnviarEmail from "../contato_componentes/ContatoFormEnviarEmail";
import ContatoFooterResp from "../contato_componentes/ContatoFooterResp";

import Fade from "react-reveal/Fade";

const Contato = () => {
  return (
    <section id="contato" className="pt-5">
      <Container className="p-5">
        <Fade buttom>
          <h3
            className="hr-text font-weight-bold display-4"
            data-content="Contato"
          />
        </Fade>
        <Fade buttom>
          <div className="row my-5">
            <div className="col-md-4 mb-resp">
              <h4>GOSTARIA DE MAIS INFORMAÇÕES? FALE CONOSCO.</h4>
              <hr></hr>
              <p className="lead">Por que você vai adiar a compra de um produto que pode te trazer tantas vantagens agora? A Pereira tem para oferecer o melhores itens de limpeza, higiene e descartáveis do mercado. Com os nossos produtos,você terá todas as ferramentas necessárias para se livrar daquele lixo e sujeira que tanto lhe incomôdam!</p>
            </div>
            <div className="col-md-8">
              <ContatoFormEnviarEmail />
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
