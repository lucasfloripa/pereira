import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Input, Button } from 'mdbreact';
// import axios from 'axios';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

class Form extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit = async e => {
    e.preventDefault();

    // const { name, email, phone, message } = this.state;

    // const form = await axios.post("/api/form", {
    //   name,
    //   email,
    //   phone,
    //   message
    // });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Card className="w-100">
        <CardBody>
          <form>
            <CardTitle>Entre em Contato!</CardTitle>
            <div className="d-flex align-items-center">
              <div>
                <Icon icon="user" size="2x" className="mr-3" />
              </div>
              <div style={{ width: '100%' }}>
                <Input
                  label="Nome"
                  name="name"
                  type="text"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <Icon icon="envelope" size="2x" className="mr-3" />
              </div>
              <div style={{ width: '100%' }}>
                <Input
                  label="Email"
                  name="Email"
                  type="text"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <Icon icon="phone" size="2x" className="mr-3" />
              </div>
              <div style={{ width: '100%' }}>
                <Input
                  label="Telefone"
                  name="phone"
                  type="text"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <Icon icon="comments" size="2x" className="mr-3" />
              </div>
              <div style={{ width: '100%' }}>
                <Input
                  label="Mensagem"
                  name="message"
                  type="textarea"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <Button color="red" onClick={this.onSubmit} block floating>
              Enviar
            </Button>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default Form;
