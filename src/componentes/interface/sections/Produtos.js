import React from 'react';
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'mdbreact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Produtos = () => {
  return (
    <Container className="text-white p-5">
      <h3 className="font-weight-bold display-4">Nossos Produtos</h3>
      <p className="lead">
        dsad asdsa dsa asddasd adasd sadsadsa dd adsa dasd asdas
      </p>
      <div className="d-flex justify-content-around align-items-center my-5">
        <Card color="black" className="p-5">
          <FontAwesomeIcon
            icon={['fab', 'facebook']}
            size="4x"
            className="mx-auto"
          />
          <CardBody>
            <CardTitle>Item 1</CardTitle>
            <CardText style={{ fontSize: '20px', color: 'white' }}>
              asd adsad adsad sa dasdsa das
            </CardText>
            <a
              href="/"
              className="d-flex justify-content-end"
              style={{ fontSize: '20px', color: 'white' }}
            >
              Saiba Mais
            </a>
          </CardBody>
        </Card>
        <Card color="red" className="p-5">
          <FontAwesomeIcon
            icon={['fab', 'facebook']}
            size="4x"
            className="mx-auto"
          />
          <CardBody>
            <CardTitle>Item 2</CardTitle>
            <CardText style={{ fontSize: '20px', color: 'white' }}>
              asd adsad adsad sa dasdsa das
            </CardText>
            <a
              href="/"
              className="d-flex justify-content-end"
              style={{ fontSize: '20px', color: 'white' }}
            >
              Saiba Mais
            </a>
          </CardBody>
        </Card>
        <Card color="black" className="p-5">
          <FontAwesomeIcon
            icon={['fab', 'facebook']}
            size="4x"
            className="mx-auto"
          />
          <CardBody>
            <CardTitle>Item 3</CardTitle>
            <CardText style={{ fontSize: '20px', color: 'white' }}>
              asd adsad adsad sa dasdsa das
            </CardText>
            <a
              href="/"
              className="d-flex justify-content-end"
              style={{ fontSize: '20px', color: 'white' }}
            >
              Saiba Mais
            </a>
          </CardBody>
        </Card>
      </div>
      <div className="mx-auto">
        <Button color="red" size="lg" floating>
          Conheça Todos Produtos :)
        </Button>
      </div>
    </Container>
  );
};

export default Produtos;
