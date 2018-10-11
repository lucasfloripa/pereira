import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Input
} from "mdbreact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const Contato = () => {
  return (
    <div className="pt-5">
      <Fade buttom>
        <h3
          className="font-weight-bold display-4 hr-text"
          data-content="Contato"
        />
      </Fade>
      <Container className="p-5">
        <Fade buttom>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex">
                <div
                  className="d-flex justify-content-center p-4"
                  style={{ width: "25%" }}
                >
                  <FontAwesomeIcon icon="map-pin" color="red" size="4x" />
                </div>
                <div className="align-self-center p-4" style={{ width: "75%" }}>
                  R. Eliane Mota, 2505 - Ipiranga, São José - SC
                  <br />
                  88110-840.
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="d-flex justify-content-center p-4"
                  style={{ width: "25%" }}
                >
                  <FontAwesomeIcon icon="phone" color="red" size="4x" />
                </div>
                <div className="align-self-center p-4" style={{ width: "75%" }}>
                  Fixo: (48)3246-9892
                  <br />
                  WhatsApp: (48)99947-0129
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="d-flex justify-content-center p-4"
                  style={{ width: "25%" }}
                >
                  <FontAwesomeIcon icon="envelope" color="red" size="4x" />
                </div>
                <div className="align-self-center p-4" style={{ width: "75%" }}>
                  precisoPegarOEmailDele@gmail.com
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Card>
                <CardBody>
                  <CardTitle>Entre em Contato!</CardTitle>
                  <CardText>
                    <Input label="Nome" icon="user" />
                    <Input label="Email" icon="envelope" />
                    <Input label="Telefone" icon="phone" />
                    <Input label="Mensagem" icon="comments" type="textarea" />
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </Fade>
      </Container>
      <Container className="color-red p-5" fluid>
        <Fade buttom>
          <div className="row">
            <div className="col-md-6" />
            <div className="col-md-6" />
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default Contato;
