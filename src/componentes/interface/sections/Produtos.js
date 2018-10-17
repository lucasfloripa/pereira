import React, { Component } from "react";
import { Container, Card, CardTitle } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

import ProdutosWhatsAppIcon from "../produtos_componentes/ProdutosWhatsAppIcon";

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
      <section id="produtos">
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
            <h3
              className="hr-text mb-resp font-weight-bold display-4"
              data-content="Nossos Produtos"
            />
            <p className="lead">Breve resumo sobre os produtos</p>
          </Fade>
          <Fade buttom>
            <div className="row my-5">
              <div className="col-md-4 zoomCol">
                <div className="d-flex justify-content-center">
                  <div className="p-2">
                    <FontAwesomeIcon icon="car" color="red" size="4x" />
                  </div>
                  <div className="align-self-center p-2">
                    <h3 className="productH3">Nome Produto</h3>
                  </div>
                </div>
                <p className="lead">Descrição do Produto</p>
              </div>
              <div className="col-md-4 zoomCol">
                <div className="d-flex justify-content-center">
                  <div className="p-2">
                    <FontAwesomeIcon icon="car" color="red" size="4x" />
                  </div>
                  <div className="align-self-center p-2">
                    <h3 className="productH3">Nome Produto</h3>
                  </div>
                </div>
                <p className="lead">Descrição do Produto</p>
              </div>
              <div className="col-md-4 zoomCol">
                <div className="d-flex justify-content-center">
                  <div className="p-2">
                    <FontAwesomeIcon icon="car" color="red" size="4x" />
                  </div>
                  <div className="align-self-center p-2">
                    <h3 className="productH3">Nome Produto</h3>
                  </div>
                </div>
                <p className="lead">Descrição do Produto</p>
              </div>
            </div>
          </Fade>
          <Fade buttom>
            <div className="row mb-5">
              <div className="col-md-4 zoomCol">
                <div className="d-flex justify-content-center">
                  <div className="p-2">
                    <FontAwesomeIcon icon="car" color="red" size="4x" />
                  </div>
                  <div className="align-self-center p-2">
                    <h3 className="productH3">Nome Produto</h3>
                  </div>
                </div>
                <p className="lead">Descrição do Produto</p>
              </div>
              <div className="col-md-4 zoomCol">
                <div className="d-flex justify-content-center">
                  <div className="p-2">
                    <FontAwesomeIcon icon="car" color="red" size="4x" />
                  </div>
                  <div className="align-self-center p-2">
                    <h3 className="productH3">Nome Produto</h3>
                  </div>
                </div>
                <p className="lead">Descrição do Produto</p>
              </div>
              <div className="col-md-4 zoomCol">
                <div className="d-flex justify-content-center">
                  <div className="p-2">
                    <FontAwesomeIcon icon="car" color="red" size="4x" />
                  </div>
                  <div className="align-self-center p-2">
                    <h3 className="productH3">Nome Produto</h3>
                  </div>
                </div>
                <p className="lead">Descrição do Produto</p>
              </div>
            </div>
          </Fade>
          <Fade buttom>
            <div className="row mb-5">
              <div className="col-md-4 zoomCol">
                <div className="d-flex justify-content-center">
                  <div className="p-2">
                    <FontAwesomeIcon icon="car" color="red" size="4x" />
                  </div>
                  <div className="align-self-center p-2">
                    <h3 className="productH3">Nome Produto</h3>
                  </div>
                </div>
                <p className="lead">Descrição do Produto</p>
              </div>
              <div className="col-md-4 zoomCol">
                <div className="d-flex justify-content-center">
                  <div className="p-2">
                    <FontAwesomeIcon icon="car" color="red" size="4x" />
                  </div>
                  <div className="align-self-center p-2">
                    <h3 className="productH3">Nome Produto</h3>
                  </div>
                </div>
                <p className="lead">Descrição do Produto</p>
              </div>
            </div>
          </Fade>
          <Fade butoom>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <Card
                  style={{
                    backgroundImage:
                      "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                  }}
                >
                  <div className="text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4">
                    <h5>Título com Icone</h5>
                    <CardTitle tag="h3" className="pt-2">
                      <strong>Título</strong>
                    </CardTitle>
                    <p>Descrição</p>
                  </div>
                </Card>
              </div>
            </div>
          </Fade>
        </Container>
      </section>
    );
  }
}

export default Produtos;
