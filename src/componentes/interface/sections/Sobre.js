import React from "react";
import { Container } from "mdbreact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const Sobre = () => {
  return (
    <Container fluid className="p-5 text-center color-red text-white">
    <Fade buttom>
      <h3
        className="font-weight-bold display-4 hr-text-sobre"
        data-content="Quem Somos"
      />
      <p className="lead">Breve resumo sobre os quem somos</p>
      </Fade>
      <Fade buttom>
      <div className="row my-5">
        <div className="col">
          <h3>Nossa História</h3>
          <p>
            A Pereira Descartáveis é uma empresa que fornece soluções em
            produtos de higiene e descartáveis. Atuando no mercado há mais de 11
            anos, tem se posicionado fortemente, tornando-se referência em sua
            região. Possui profissionais capacitados e treinados no atendimento
            e suprimento de diversos tipos de produtos e equipamentos para
            higiene, limpeza e descartáveis. Produtos como Papéis Toalha,
            Sabonetes, Odorizadores, Dispensers, Lixeiras e uma infinidade de
            outros produtos.{" "}
          </p>
        </div>
      </div>
      </Fade>
      <Fade buttom>
      <div className="row">
        <div className="col-md-4">
          <FontAwesomeIcon
            icon="bullseye"
            color="white"
            size="4x"
            className="mb-2"
          />
          <h3>Missão</h3>
          <p>
            Gerar resultados dentro da ética e legalidade, a fim de atender com
            eficácia as expectativas de todos os clientes, colaboradores,
            fornecedores e a toda sociedade.
          </p>
        </div>
        <div className="col-md-4">
          <FontAwesomeIcon
            icon="eye"
            color="white"
            size="4x"
            className="mb-2"
          />
          <h3>Visão</h3>
          <p>
            Agregar conhecimentos, buscando melhoria contínua nas ações externas
            e internas; na qualidade dos serviços e no relacionamento com o
            mercado.
          </p>
        </div>
        <div className="col-md-4">
          <FontAwesomeIcon
            icon="dollar-sign"
            color="white"
            size="4x"
            className="mb-2"
          />
          <h3>Valores</h3>
          <p>
            Credibilidade. Comprometimento. Pontualidade. Integridade. Respeito
            ao Meio Ambiente.
          </p>
        </div>
      </div>
      </Fade>
    </Container>
  );
};

export default Sobre;
