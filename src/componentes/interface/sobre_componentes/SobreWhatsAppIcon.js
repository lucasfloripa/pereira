import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SobreWhatsAppIcon extends Component {
  render() {
    return (
      <a
        href="https://wa.me/5548999470129"
        className="icon-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={["fab", "whatsapp"]}
          color="white"
          className="my-icon-float"
        />
      </a>
    );
  }
}

export default SobreWhatsAppIcon;
