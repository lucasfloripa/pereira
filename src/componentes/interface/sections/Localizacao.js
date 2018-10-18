import React from "react";
import { Container } from "mdbreact";
import Fade from "react-reveal/Fade";
import LocalizacaoGoogleMap from "../localizacao_componentes/LocalizacaoGoogleMap";

export default function Localizacao() {
  return (
    <section id="localizacao" className="pt-5">
      <Container className="color-red text-white text-center p-5" fluid>
        <Fade buttom>
          <h1
            className="hr-text-sobre font-weight-bold display-4"
            data-content="Endereço"
          />
          <p className="lead">R. Eliane Mota, 2505 - Ipiranga, São José - SC</p>
          <p className="lead">CEP: 88110-840.</p>
        </Fade>
        <Fade buttom>
          <div className="row">
            <div className="col">
              <LocalizacaoGoogleMap />
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
}
