import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarSuperior() {
  return (
    <div className="d-flex flex-row-reverse w-100 px-5">
      <div className="d-flex">
        <div className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon="phone" color="blue" />
        </div>
        <span className="mr-1" />
        <div className="align-self-center">(48)3246-9892</div>
      </div>
      <span className="mr-3" />
      <div className="d-flex">
        <div className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={["fab", "whatsapp"]} color="green" />
        </div>
        <span className="mr-1" />
        <div className="align-self-center">(48)99947-0129</div>
      </div>
      <span className="mr-3" />
      <div className="d-flex">
        <div className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon="envelope" color="yellow" />
        </div>
        <span className="mr-1" />
        <div className="align-self-center">pereira@gmail.com</div>
      </div>
      <span className="mr-3" />
      <div className="d-flex">
        <div className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon="clock" color="red" />
        </div>
        <span className="mr-1" />
        <div className="align-self-center">Segunda a Sexta: 08:00-18:00</div>
      </div>
    </div>
  );
}

export default NavbarSuperior;
