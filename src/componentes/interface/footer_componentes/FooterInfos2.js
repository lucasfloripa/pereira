import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterInfos2() {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center"
          style={{ width: "10%" }}
        >
          <FontAwesomeIcon icon="phone" color="red" />
        </div>
        <span className="mr-2" />
        <div className="align-self-center">(48) 3246-9892</div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center"
          style={{ width: "10%" }}
        >
          <FontAwesomeIcon icon={["fab", "whatsapp"]} color="red" />
        </div>
        <span className="mr-2" />
        <div className="align-self-center">(48) 99947-0129</div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center"
          style={{ width: "10%" }}
        >
          <FontAwesomeIcon icon="envelope" color="red" />
        </div>
        <span className="mr-2" />
        <div className="align-self-center ">pereira@gmail.com</div>
      </div>
    </React.Fragment>
  );
}

export default FooterInfos2;
