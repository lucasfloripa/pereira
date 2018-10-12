import React from "react";
import { Container, Card, CardTitle } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const Produtos = () => {
  return (
    <section id="produtos">
      <Container className="text-center p-5 ">
        <Fade buttom>
          <h3
            className="hr-text mb-resp font-weight-bold display-4"
            data-content="Nossos Produtos"
          />
          <p className="lead">Breve resumo sobre os produtos</p>
        </Fade>
        <Fade buttom>
          <div className="row my-5">
            <div className="col-md-4 zoom">
              <div className="d-flex justify-content-center">
                <div className="p-2">
                  <FontAwesomeIcon icon="car" color="red" size="4x" />
                </div>
                <div className="align-self-center p-2">
                  <h3>Nome Produto</h3>
                </div>
              </div>
              <p>Descrição do Produto</p>
            </div>
            <div className="col-md-4 zoom">
              <div className="d-flex justify-content-center">
                <div className="p-2">
                  <FontAwesomeIcon icon="car" color="red" size="4x" />
                </div>
                <div className="align-self-center p-2">
                  <h3>Nome Produto</h3>
                </div>
              </div>
              <p>Descrição do Produto</p>
            </div>
            <div className="col-md-4 zoom">
              <div className="d-flex justify-content-center">
                <div className="p-2">
                  <FontAwesomeIcon icon="car" color="red" size="4x" />
                </div>
                <div className="align-self-center p-2">
                  <h3>Nome Produto</h3>
                </div>
              </div>
              <p>Descrição do Produto</p>
            </div>
          </div>
        </Fade>
        <Fade buttom>
          <div className="row mb-5">
            <div className="col-md-4 zoom">
              <div className="d-flex justify-content-center">
                <div className="p-2">
                  <FontAwesomeIcon icon="car" color="red" size="4x" />
                </div>
                <div className="align-self-center p-2">
                  <h3>Nome Produto</h3>
                </div>
              </div>
              <p>Descrição do Produto</p>
            </div>
            <div className="col-md-4 zoom">
              <div className="d-flex justify-content-center">
                <div className="p-2">
                  <FontAwesomeIcon icon="car" color="red" size="4x" />
                </div>
                <div className="align-self-center p-2">
                  <h3>Nome Produto</h3>
                </div>
              </div>
              <p>Descrição do Produto</p>
            </div>
            <div className="col-md-4 zoom">
              <div className="d-flex justify-content-center">
                <div className="p-2">
                  <FontAwesomeIcon icon="car" color="red" size="4x" />
                </div>
                <div className="align-self-center p-2">
                  <h3>Nome Produto</h3>
                </div>
              </div>
              <p>Descrição do Produto</p>
            </div>
          </div>
        </Fade>
        <Fade buttom>
          <div className="row mx-auto mb-5">
            <div className="col-md-4 zoom">
              <div className="d-flex justify-content-center">
                <div className="p-2">
                  <FontAwesomeIcon icon="car" color="red" size="4x" />
                </div>
                <div className="align-self-center p-2">
                  <h3>Nome Produto</h3>
                </div>
              </div>
              <p>Descrição do Produto</p>
            </div>
            <div className="col-md-4 zoom">
              <div className="d-flex justify-content-center">
                <div className="p-2">
                  <FontAwesomeIcon icon="car" color="red" size="4x" />
                </div>
                <div className="align-self-center p-2">
                  <h3>Nome Produto</h3>
                </div>
              </div>
              <p>Descrição do Produto</p>
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
};

export default Produtos;
