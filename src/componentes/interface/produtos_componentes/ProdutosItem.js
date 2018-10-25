import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "mdbreact";

function ProdutosItem(props) {
  return (
    <div
      style={{
        color: "black",
        height: "250px",
        background: "rgba(255,255,255, 0.05)"
      }}
      className="d-flex flex-column justify-content-center rounded-circle"
    >
      <div className="d-flex justify-content-center">
        <div className="p-2">
          <FontAwesomeIcon icon={props.icon} color="red" size="4x" />
        </div>
        <div className="align-self-center p-2">
          <h2 className="productH2 font-weight-bold">{props.nome}</h2>
        </div>
      </div>
      <p className="lead font-weight-bold">{props.descricao}</p>
    </div>
  );
}

export default ProdutosItem;
