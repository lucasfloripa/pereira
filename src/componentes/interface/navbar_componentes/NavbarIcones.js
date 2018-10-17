import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarIcones() {
  return (
    <React.Fragment>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "facebook"]} color="white" size="2x" />
      </a>
      <span className='mr-3'></span>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} color="white" size="2x" />
      </a>
    </React.Fragment>
  );
}

export default NavbarIcones;
