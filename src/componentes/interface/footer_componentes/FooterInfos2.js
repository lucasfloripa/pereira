import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterInfos2() {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center p-2"
          style={{ width: "25%" }}
        >
          <FontAwesomeIcon icon="phone" color="red" size="2x" />
        </div>
        <div className="align-self-center p-2" style={{ width: "75%" }}>
          (48) 3246-9892
        </div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center  p-2"
          style={{ width: "25%" }}
        >
          <FontAwesomeIcon icon={['fab', 'whatsapp']} color="red" size="2x" />
        </div>
        <div className="align-self-center p-2" style={{ width: "75%" }}>
          (48) 99947-0129
        </div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center p-2"
          style={{ width: "25%" }}
        >
          <FontAwesomeIcon icon="envelope" color="red" size="2x" />
        </div>
        <div className="align-self-center p-2" style={{ width: "75%" }}>
          pereira@gmail.com
        </div>
      </div>
    </React.Fragment>
  )
}

export default FooterInfos2;
