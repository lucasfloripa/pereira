import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Infos = () => {
  return (
    <div>
      <FontAwesomeIcon icon="phone" color="white" className="mr-1" />
      (48) 99999-9999 / (48) 3333-3333
      <span className="mr-4" />
      <FontAwesomeIcon icon="envelope" color="white" className="mr-1" />
      pereirasc@gmail.com
    </div>
  );
};

export default Infos;
