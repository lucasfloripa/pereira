import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icones() {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="align-self-end d-none d-lg-block">
          <FontAwesomeIcon icon="phone" color="white" size="1x" />
          <span className="mr-1" />
          (48) 3246-9892
        </div>
        <span className="mr-3" />
        <a
          href="https://www.facebook.com/pereirasc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'facebook']} color="white" size="2x" />
        </a>
        <span className="mr-3" />
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            color="white"
            size="2x"
          />
        </a>
      </div>
    </React.Fragment>
  );
}

export default Icones;
