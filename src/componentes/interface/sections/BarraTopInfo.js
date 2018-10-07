import React from 'react';
import { Container } from 'mdbreact';

//Componetes
import Infos from '../diversos/Infos';
import RedesSocias from '../diversos/RedesSocias';

const BarraTopInfo = () => {
  return (
    <div className="navbar d-flex flex-row justify-content-start bg-danger text-white py-2">
      <Container>
        <Infos />
        <RedesSocias />
      </Container>
    </div>
  );
};

export default BarraTopInfo;
