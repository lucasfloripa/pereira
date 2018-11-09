import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import PropTypes from 'prop-types';

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
    return (
      <div
        style={{
          color: 'black',
          height: '250px'
        }}
        className="d-flex flex-column justify-content-center rounded-circle produtos-background"
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
          style={{ width: '40%' }}
          onClick={this.toggle}
        >
          <span className="d-lg-block d-none text-warning font-weight-bold lead">
            Saiba Mais
          </span>
          <span className="d-lg-none d-block">
            <FontAwesomeIcon icon="plus" />
          </span>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.nome}</ModalHeader>
          <ModalBody className="d-flex flex-column">
            <p>{this.props.descricao}</p>
            <div className="d-flex justify-content-between w-100 mb-3">
              <img
                src={this.props.foto1}
                className="img-fluid img-thumbnail"
                alt="Imagem 1"
              />
              <img
                src={this.props.foto2}
                className="img-fluid img-thumbnail"
                alt="Imagem 2"
              />
              <img
                src={this.props.foto3}
                className="img-fluid img-thumbnail"
                alt="Imagem 3"
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
  descricao: PropTypes.string.isRequired
  // foto1: PropTypes.string.isRequired,
  // foto2: PropTypes.string.isRequired,
  // foto3: PropTypes.string.isRequired
};

export default ProdutosItem;
