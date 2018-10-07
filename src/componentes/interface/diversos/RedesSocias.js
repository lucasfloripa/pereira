import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RedesSociais = () => {
  return (
    <div>
      <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
      <span className="mr-4" />
      <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
    </div>
  );
};

export default RedesSociais;
