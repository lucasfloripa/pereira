import React, { Component } from "react";
import { Container, Card } from "mdbreact";
import Fade from "react-reveal/Fade";

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
      Array.from(document.querySelectorAll(".productH2")).forEach(h2 => {
        h2.style.fontSize = "1.8rem";
      });
    }
  }

  render() {
    return (
      <section id="produtos" className="pt-5">
        <Container className="text-center text-white p-5 ">
          <Fade buttom>
            <h1
              className="display-4 font-weight-bold mb-5"
            >
              Produtos
            </h1>
            {/* <p className="lead font-weight-bold">
              Breve resumo sobre os produtos
            </p> */}
          </Fade>
          <Fade buttom>
            <div className="row mb-1">
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="car"
                  nome="Automotivo"
                  descricao="Descrição Produto"
                />
              </div>
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="utensils"
                  nome="Descartáveis"
                  descricao="Descrição Produto"
                />
              </div>
              <div className="col-md-4 zoomCol">
                <div
                  className="d-flex flex-column justify-content-center rounded-circle"
                  style={{
                    color: "black",
                    height: "250px",
                    background: "rgba(255,255,255, 0.05)"
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <div className="p-2">
                      <i
                        className="fas fa-toilet-paper fa-4x"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div className="align-self-center p-2">
                      <h2 className="productH2 font-weight-bold">Higiene</h2>
                    </div>
                  </div>
                  <p className="lead font-weight-bold">Descrição</p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade buttom>
            <div className="row mb-1">
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="broom"
                  nome="Limpeza"
                  descricao="Descrição Produto"
                />
              </div>
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="wine-glass-alt"
                  nome="Copa e Cozinha "
                  descricao="Descrição Produto"
                />
              </div>
              <div className="col-md-4 zoomCol">
                <ProdutosItem
                  icon="user-shield"
                  nome="EPI"
                  descricao="Descrição Produto"
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-8 zoomCol">
                <ProdutosItem
                  icon="cogs"
                  nome="Aluguel de Equipamentos"
                  descricao="Varredeiras e Limpa-pisos"
                />
              </div>
            </div>
          </Fade>
          {/* <Fade butoom>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <ProdutosFoto />
              </div>
            </div>
          </Fade> */}
        </Container>
      </section>
    );
  }
}

export default Produtos;
