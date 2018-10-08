import React from 'react';
import { Container, Card, CardBody, CardTitle, CardText } from 'mdbreact';

const Sobre = () => {
  return (
    <Container className="red darken-3 p-5" fluid>
      <h3 className="font-weight-bold display-4">Quem Somos</h3>
      <p className="lead">
        dsad asdsa dsa asddasd adasd sadsadsa dd adsa dasd asdas
      </p>
      <div className="d-flex">
        <div className="col-md-3 py-3">
          <img
            src="/img/img3.jpg"
            alt="img"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-3 py-3">
          <Card className="bg-dark" style={{ height: '100%' }}>
            <CardBody>
              <CardTitle>asd</CardTitle>
              <CardText>asd</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="d-flex flex-column col-md-6 py-3">
          <div
            className="d-flex flex-row justify-content-around col-md-6"
            style={{ maxWidth: '100%' }}
          >
            <Card
              className="px-5 bg-dark"
              style={{ height: '100%', width: '45%' }}
            >
              <CardBody>
                <CardTitle>asd</CardTitle>
                <CardText>asd</CardText>
              </CardBody>
            </Card>
            <Card
              className="px-5 bg-dark"
              style={{ height: '100%', width: '45%' }}
            >
              <CardBody>
                <CardTitle>asd</CardTitle>
                <CardText>asd</CardText>
              </CardBody>
            </Card>
          </div>
          <div
            className="d-flex justify-content-center align-items-center col-md-6"
            style={{ maxWidth: '100%' }}
          >
            <p className="text-white" style={{ fontSize: '20px' }}>
              asdadas dad asdsadsad adsa dsa asda das dsadsa dsa dasd sa dasd
              adasdsa das dsa sddasdsa adsadasd dsaddsadsada dsad asdsdadsa
              dasda dasdasda sadsa dsdadas dsadadasds ad sadsad adas dasd adsas
              asads
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Sobre;
