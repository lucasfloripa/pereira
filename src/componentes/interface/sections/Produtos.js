import React, { Component } from 'react';
import { Container } from 'mdbreact';
import Fade from 'react-reveal/Fade';

import ProdutosItem from '../produtos_componentes/ProdutosItem';

class Produtos extends Component {
  componentDidMount() {
    if (window.innerWidth > 768) {
      Array.from(document.querySelectorAll('.zoomCol')).forEach(element => {
        element.classList.add('zoom');
      });
    }
    if (window.innerWidth < 364) {
      Array.from(document.querySelectorAll('.productH2')).forEach(h2 => {
        h2.style.fontSize = '1.8rem';
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
                <ProdutosItem
                  icon="utensils"
                  nome="Descartáveis"
                  descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates magnam perferendis? Perspiciatis eius provident recusandae assumenda harum minima ipsa veritatis eaque quisquam. Totam iure officiis, et quas commodi a."
                  foto1="asd"
                  foto2="asd"
                  foto3="asd"
                />
              </div>
              <div className="col-md-6 mb-resp zoomCol">
                <ProdutosItem
                  icon="wine-glass-alt"
                  nome="Copa e Cozinha"
                  descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates magnam perferendis? Perspiciatis eius provident recusandae assumenda harum minima ipsa veritatis eaque quisquam. Totam iure officiis, et quas commodi a."
                  foto1="asd"
                  foto2="asd"
                  foto3="asd"
                />
              </div>
              <div className="col-md-8 mb-resp zoomCol">
                <ProdutosItem
                  icon="broom"
                  nome="Higiene e Limpeza"
                  descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates magnam perferendis? Perspiciatis eius provident recusandae assumenda harum minima ipsa veritatis eaque quisquam. Totam iure officiis, et quas commodi a."
                  foto1="asd"
                  foto2="asd"
                  foto3="asd"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-resp zoomCol">
                <ProdutosItem
                  icon="user-shield"
                  nome="EPI"
                  descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates magnam perferendis? Perspiciatis eius provident recusandae assumenda harum minima ipsa veritatis eaque quisquam. Totam iure officiis, et quas commodi a."
                  foto1="asd"
                  foto2="asd"
                  foto3="asd"
                />
              </div>
              <div className="col-md-6 mb-resp zoomCol">
                <ProdutosItem
                  icon="car"
                  nome="Automotivo"
                  descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates magnam perferendis? Perspiciatis eius provident recusandae assumenda harum minima ipsa veritatis eaque quisquam. Totam iure officiis, et quas commodi a."
                  foto1="asd"
                  foto2="asd"
                  foto3="asd"
                />
              </div>
              <div className="col-md-8 mb-resp zoomCol">
                <ProdutosItem
                  icon="cogs"
                  nome="Aluguel de Equipamentos"
                  descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates magnam perferendis? Perspiciatis eius provident recusandae assumenda harum minima ipsa veritatis eaque quisquam. Totam iure officiis, et quas commodi a."
                  foto1="asd"
                  foto2="asd"
                  foto3="asd"
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
