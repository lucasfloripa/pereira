import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Input, Button } from 'mdbreact';
import axios from 'axios';

class FormEnviarEmail extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit = async e => {
    e.preventDefault();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Card className="w-100">
        <CardBody>
          <form>
            <CardTitle>Entre em Contato!</CardTitle>
            <Input
              label="Nome"
              name="name"
              icon="user"
              type="text"
              onChange={this.onChange}
            />
            <Input
              label="Email"
              name="email"
              icon="envelope"
              type="text"
              onChange={this.onChange}
            />
            <Input
              label="Telefone"
              name="phone"
              icon="phone"
              type="text"
              onChange={this.onChange}
            />
            <Input
              label="Mensagem"
              name="message"
              icon="comments"
              type="textarea"
              onChange={this.onChange}
            />
            <Button color="red" onClick={this.onSubmit} block floating>
              Enviar
            </Button>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default FormEnviarEmail;
