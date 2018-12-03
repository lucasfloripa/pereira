import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "mdbreact";

import Item from "./Item";

//Fotos
import Varredeira from "../../imgs/varredeira.png";
import Lavaeseca from "../../imgs/lavaeseca.png";
import Automotivo1 from "../../imgs/automotivo1.png";
import Automotivo2 from "../../imgs/automotivo2.png";
import Copaecoz1 from "../../imgs/copaecoz1.png";
import Copaecoz2 from "../../imgs/copaecoz2.png";
import Descartaveis1 from "../../imgs/desc1.png";
import Descartaveis2 from "../../imgs/desc2.png";
import Limpeza1 from "../../imgs/limp1.png";
import Limpeza2 from "../../imgs/limp2.png";
import Epi1 from "../../imgs/epi1.png";
import Epi2 from "../../imgs/epi2.png";

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
            <h1 className="display-4 font-weight-bold mb-5 text-white">
              Produtos
            </h1>
          </Fade>
          <Fade buttom>
            <div className="row">
              <div className="col-md-6 mb-resp zoomCol">
                <Item
                  icon="utensils"
                  nome="Descartáveis"
                  descricao="A Pereira possui uma grande variedade de descartáveis de alta qualidade para toda sua necessidade. Veja aqui um dos nossos produtos:"
                  foto1={Descartaveis1}
                  foto2={Descartaveis2}
                  listItem={[
                    "P. Toalha",
                    "P.higenico",
                    "Copo p/ água",
                    "Copo cafezinho"
                  ]}
                />
              </div>
              <div className="col-md-6 mb-resp zoomCol">
                <Item
                  icon="wine-glass-alt"
                  nome="Copa e Cozinha"
                  descricao="A pereira tem produtos das melhores marcas do mercado para você ter a melhore qualidade na hora do cafezinho. Veja aqui alguns dos nossos produtos:"
                  foto1={Copaecoz1}
                  foto2={Copaecoz2}
                  listItem={["Açúcar", "Adoçante ", "Café", "Filtro P/ café"]}
                />
              </div>
              <div className="col-md-8 mb-resp zoomCol">
                <Item
                  icon="broom"
                  nome="Higiene e Limpeza"
                  descricao="Não importa qual seu ramo de atuação a Pereira tem o melhores produtos de higiene e limpeza do mercado. Veja alguns dos nossos produtos:"
                  foto1={Limpeza1}
                  foto2={Limpeza2}
                  listItem={[
                    "Desinfetante ",
                    "Água sanitária",
                    "Rodos",
                    "Vassouras",
                    "Odorizador de ambientes"
                  ]}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-resp zoomCol">
                <Item
                  icon="user-shield"
                  nome="EPI"
                  descricao="A Pereira possui equipamento para que você trabalhe tranquilo e seguro. Veja aqui alguns dos nossos produtos:"
                  foto1={Epi1}
                  foto2={Epi2}
                  listItem={[
                    "Sapatos",
                    "Capacetes",
                    "Óculos para proteção",
                    "Protetor ouricular"
                  ]}
                />
              </div>
              <div className="col-md-6 mb-resp zoomCol">
                <Item
                  icon="car"
                  nome="Automotivo"
                  descricao="A Pereira tem na sua linha automotiva produtos de exelente qualidade e otimo rendimento. Veja alguns de nossos produtos:"
                  foto1={Automotivo1}
                  foto2={Automotivo2}
                  listItem={[
                    "Gás para ar condicionado",
                    "Filtro para cabine de pintura",
                    "Shampoo para carro",
                    "Cera",
                    "Boina para Polimento"
                  ]}
                />
              </div>
              <div className="col-md-8 mb-resp zoomCol">
                <Item
                  icon="cogs"
                  nome="Aluguel de Equipamentos"
                  descricao=""
                  foto1={Varredeira}
                  foto2={Lavaeseca}
                  listItem={["Varredeira", "Lavaeseca"]}
                />
              </div>
            </div>
          </Fade>
        </Container>
      </section>
    );
  }
}

export default Produtos;
