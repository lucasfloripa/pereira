import React from "react";
import { Card, CardTitle} from 'mdbreact';

function ProdutosFoto() {
  return (
    <Card
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
      }}
    >
      <div className="text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4">
        <h5>Título com Icone</h5>
        <CardTitle tag="h3" className="pt-2">
          <strong>Título</strong>
        </CardTitle>
        <p>Descrição</p>
      </div>
    </Card>
  );
}

export default ProdutosFoto;
