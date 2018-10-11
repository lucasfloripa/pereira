import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const Produtos = () => {
  return (
    <Container className="text-center p-5">
      <Fade buttom>
        <h3
          className="font-weight-bold display-4 hr-text"
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
              <div className="p-2 align-self-center">
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
              <div className="p-2 align-self-center">
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
              <div className="p-2 align-self-center">
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
              <div className="p-2 align-self-center">
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
              <div className="p-2 align-self-center">
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
              <div className="p-2 align-self-center">
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
              className="card-image"
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
      {/* <div className="row mb-3">
        <div className="col-md-4">
          <Card>
            <CardBody className="color-red rounded-bottom">
              <a className="activator waves-effect waves-light mr-4" />
              <CardTitle>Card Title</CardTitle>
              <hr className="hr-light" />
              <CardText className="">
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardBody className="color-black rounded-bottom">
              <a className="activator waves-effect waves-light mr-4" />
              <CardTitle>Card Title</CardTitle>
              <hr className="hr-light" />
              <CardText className="">
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardBody className="color-red rounded-bottom">
              <a className="activator waves-effect waves-light mr-4" />
              <CardTitle>Card Title</CardTitle>
              <hr className="hr-light" />
              <CardText className="">
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <CardBody className="color-black rounded-bottom">
              <a className="activator waves-effect waves-light mr-4" />
              <CardTitle>Card Title</CardTitle>
              <hr className="hr-light" />
              <CardText className="">
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardBody className="color-red rounded-bottom">
              <a className="activator waves-effect waves-light mr-4" />
              <CardTitle>Card Title</CardTitle>
              <hr className="hr-light" />
              <CardText className="">
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardBody className="color-black rounded-bottom">
              <a className="activator waves-effect waves-light mr-4" />
              <CardTitle>Card Title</CardTitle>
              <hr className="hr-light" />
              <CardText className="">
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div> */}
    </Container>
  );
};

export default Produtos;
