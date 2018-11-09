import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterResp = () => {
  return (
    <div className="row justify-content-around align-items-center text-white">
      <a href="https://www.facebook.com">
        <FontAwesomeIcon icon={['fab', 'facebook']} color="white" size="2x" />
      </a>
      <a href="https://www.instagram.com">
        <FontAwesomeIcon icon={['fab', 'instagram']} color="white" size="2x" />
      </a>
      <a href="https://wa.me/5548999470129">
        <FontAwesomeIcon icon={['fab', 'whatsapp']} color="white" size="2x" />
      </a>
      <a href="tel: +55 48 30345530">
        <FontAwesomeIcon icon="phone" color="white" size="2x" />
      </a>
    </div>
  );
};

export default FooterResp;
