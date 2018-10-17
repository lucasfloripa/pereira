import React from "react";
import { Container } from "mdbreact";
import Fade from "react-reveal/Fade";
import LocalizacaoGoogleMap from "../localizacao_componentes/LocalizacaoGoogleMap";

export default function Localizacao() {
  return (
    <Container id="localizacao" className="color-red text-white text-center p-5" fluid>
      <h3
        className="hr-text-sobre mb-resp-sobre font-weight-bold display-4"
        data-content="Localização"
      />
      <p className="lead">R. Eliane Mota, 2505 - Ipiranga, São José - SC</p>
      <p className="lead">CEP: 88110-840.</p>
      <Fade buttom>
        <div className="row">
          <div className="col">
            <LocalizacaoGoogleMap />
          </div>
        </div>
      </Fade>
    </Container>
  );
}
