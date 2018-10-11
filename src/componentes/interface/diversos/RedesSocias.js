import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RedesSociais = () => {
  return (
    <div>
      <a href="">
        <FontAwesomeIcon color="white" icon={["fab", "facebook"]} size="2x" />
      </a>
      <span className="mr-4" />
      <a href="">
        <FontAwesomeIcon color="white" icon={["fab", "instagram"]} size="2x" />
      </a>
    </div>
  );
};

export default RedesSociais;
