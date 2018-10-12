import React from "react";

import { Container, Card, CardBody, CardTitle, Input, Button } from "mdbreact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

import Map from "../diversos/GoogleMap";

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
              <div className="d-md-none d-flex">
                <div
                  className="d-flex justify-content-center p-4"
                  style={{ width: "25%" }}
                >
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    color="red"
                    size="4x"
                  />
                </div>
                <div className="align-self-center p-4" style={{ width: "75%" }}>
                  facebook.com
                </div>
              </div>
              <div className="d-md-none d-flex">
                <div
                  className="d-flex justify-content-center p-4"
                  style={{ width: "25%" }}
                >
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    color="red"
                    size="4x"
                  />
                </div>
                <div className="align-self-center p-4" style={{ width: "75%" }}>
                  instagram.com
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Card>
                <CardBody>
                  <CardTitle>Entre em Contato!</CardTitle>
                  <Input label="Nome" icon="user" />
                  <Input label="Email" icon="envelope" />
                  <Input label="Telefone" icon="phone" />
                  <Input label="Mensagem" icon="comments" type="textarea" />
                  <Button color="red" block floating>
                    Enviar
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </Fade>
      </Container>
      <Container className="color-red p-5" fluid>
        <Fade buttom>
          <div className="row">
            <div className="col">
              <Map />
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contato;
