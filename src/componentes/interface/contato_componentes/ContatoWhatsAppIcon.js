import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContatoWhatsAppIcon extends Component {
  componentDidMount() {
    // const iconFloat = document.querySelector(".icon-float");
    // window.onscroll = () => {
    //   if (window.pageYOffset > 100) {
    //     iconFloat.style.background = "#25d366";
    //     iconFloat.style.boxShadow = "2px 2px 3px #999"
    //   } else {
    //     iconFloat.style.background = "transparent";
    //     iconFloat.style.boxShadow = "none"
    //   }
    // };
  }

  render() {
    return (
      <a
        href="https://wa.me/5548999470129"
        className="icon-float"
        target="_blank"
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

export default ContatoWhatsAppIcon;
