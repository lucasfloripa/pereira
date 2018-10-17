import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProdutosItem(props) {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="p-2">
          <FontAwesomeIcon icon={props.icon} color="red" size="4x" />
        </div>
        <div className="align-self-center p-2">
          <h3 className="productH3">{props.nome}</h3>
        </div>
      </div>
      <p className="lead">{props.descricao}</p>
    </React.Fragment>
  );
}

export default ProdutosItem;
