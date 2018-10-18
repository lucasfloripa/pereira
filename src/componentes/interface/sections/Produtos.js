import React, { Component } from "react";
import { Container } from "mdbreact";
import Fade from "react-reveal/Fade";

import ProdutosWhatsAppIcon from "../produtos_componentes/ProdutosWhatsAppIcon";
import ProdutosItem from "../produtos_componentes/ProdutosItem";
import ProdutosFoto from "../produtos_componentes/ProdutosFoto";

class Produtos extends Component {
  componentDidMount() {
    if (window.innerWidth > 768) {
      Array.from(document.querySelectorAll(".zoomCol")).forEach(element => {
        element.classList.add("zoom");
      });
    }
    if (window.innerWidth < 364) {
      Array.from(document.querySelectorAll(".productH3")).forEach(h3 => {
        h3.style.fontSize = "2rem";
      });
    }
  }

  render() {
    return (
      <section id="produtos" className="pt-5">
        <Container className="text-center p-5 ">
          <div
            id="whatsapp-icon"
            className="d-none d-md-block"
            style={{ width: "200%" }}
          >
            <Fade buttom>
              <ProdutosWhatsAppIcon />
            </Fade>
          </div>
          <Fade buttom>
            <h1
              className="hr-text mb-resp font-weight-bold display-4"
              data-content="Nossos Produtos"
            />
            <p className="lead">Breve resumo sobre os produtos</p>
          </Fade>
          <Fade buttom>
            <div className="row my-5">
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="car"
                  nome="Nome Produto"
                  descricao="Descrição Produto"
                />
              </div>
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="car"
                  nome="Nome Produto"
                  descricao="Descrição Produto"
                />
              </div>
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="car"
                  nome="Nome Produto"
                  descricao="Descrição Produto"
                />
              </div>
            </div>
          </Fade>
          <Fade buttom>
            <div className="row mb-5">
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="car"
                  nome="Nome Produto"
                  descricao="Descrição Produto"
                />
              </div>
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="car"
                  nome="Nome Produto"
                  descricao="Descrição Produto"
                />
              </div>
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="car"
                  nome="Nome Produto"
                  descricao="Descrição Produto"
                />
              </div>
            </div>
          </Fade>
          <Fade buttom>
            <div className="row mb-5">
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="car"
                  nome="Nome Produto"
                  descricao="Descrição Produto"
                />
              </div>
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="car"
                  nome="Nome Produto"
                  descricao="Descrição Produto"
                />
              </div>
            </div>
          </Fade>
          <Fade butoom>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <ProdutosFoto />
              </div>
            </div>
          </Fade>
        </Container>
      </section>
    );
  }
}

export default Produtos;
