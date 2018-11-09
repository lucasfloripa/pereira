import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Informations = () => {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center"
          style={{ width: '10%' }}
        >
          <FontAwesomeIcon icon="building" color="red" />
        </div>
        <span className="mr-2" />
        <div className="align-self-center">
          Pereira Higiene, Limpeza e Descartáveis
        </div>
      </div>
      <div className="d-flex">
        <div className="d-flex justify-content-center" style={{ width: '10%' }}>
          <FontAwesomeIcon icon="clock" color="red" />
        </div>
        <span className="mr-2" />
        <div className="align-self-center">
          Segunda a Sexta: 08:00 - 12:00 / 13:30 - 18:18
        </div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center"
          style={{ width: '10%' }}
        >
          <FontAwesomeIcon icon="map-pin" color="red" />
        </div>
        <span className="mr-2" />
        <div className="align-self-center">
          R. Eliane Mota, 2505 - Ipiranga, São José - SC 88110-840.
        </div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center"
          style={{ width: '10%' }}
        >
          <FontAwesomeIcon icon="phone" color="red" />
        </div>
        <span className="mr-2" />
        <div className="align-self-center">(48) 3246-9892</div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center"
          style={{ width: '10%' }}
        >
          <FontAwesomeIcon icon={['fab', 'whatsapp']} color="red" />
        </div>
        <span className="mr-2" />
        <div className="align-self-center">(48) 99947-0129</div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center"
          style={{ width: '10%' }}
        >
          <FontAwesomeIcon icon="envelope" color="red" />
        </div>
        <span className="mr-2" />
        <div className="align-self-center ">pereira@gmail.com</div>
      </div>
    </React.Fragment>
  );
};

export default Informations;
