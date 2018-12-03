import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "mdbreact";
import PropTypes from "prop-types";
import classnames from "classnames";

class ProdutosItem extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { listItem } = this.props;

    return (
      <div
        style={{
          color: "black",
          height: "250px"
        }}
        className={classnames("d-flex flex-column justify-content-center", {
          "rounded-circle produtos-background": window.innerWidth >= 768
        })}
      >
        <div className="d-flex justify-content-center">
          <div className="p-2">
            <FontAwesomeIcon icon={this.props.icon} color="red" size="4x" />
          </div>
          <div className="align-self-center p-2">
            <h2 className="productH2 font-weight-bold">{this.props.nome}</h2>
          </div>
        </div>
        <Button
          outline
          className="mx-auto rounded-circle"
          color="warning"
          style={{ width: "50%" }}
          onClick={this.toggle}
        >
          <span className="d-lg-block d-none text-warning font-weight-bold lead">
            Saiba Mais
          </span>
          <span className="d-lg-none d-block">Saiba Mais</span>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.nome}</ModalHeader>
          <ModalBody className="d-flex flex-column">
            <p className="lead font-weight-bold">{this.props.descricao}</p>
            <ul className="list-group list-group-flush mb-3">
              {listItem.map(item => (
                <li className="list-group-item text-center border-0 p-1">
                  {item}
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-around w-100 mb-3">
              <img
                src={this.props.foto1}
                className="img-fluid img-thumbnail border-0"
                alt="Imagem 1"
              />
              <img
                src={this.props.foto2}
                className="img-fluid img-thumbnail border-0"
                alt="Imagem 2"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>
              Sair
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

ProdutosItem.propTypes = {
  icon: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  foto1: PropTypes.string.isRequired,
  foto2: PropTypes.string.isRequired,
  listItem: PropTypes.array.isRequired
};

export default ProdutosItem;
