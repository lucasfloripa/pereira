import React, { Component } from "react";

//Interface Componentes
import BarraNav from "./componentes/interface/sections/BarraNav";
import Header from "./componentes/interface/sections/Header";
import Produtos from "./componentes/interface/sections/Produtos";
import Sobre from "./componentes/interface/sections/Sobre";
// import SobreTitulo from "./componentes/interface/sections/SobreTitulo";
import Contato from "./componentes/interface/sections/Contato";
import Footer from "./componentes/interface/sections/Footer";

//CSS
import "./App.css";

//JS
import "jquery/dist/jquery.min.js";
import "bootstrap/js/dist/collapse";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faCar,
  faBullseye,
  faEye,
  faDollarSign,
  faMapPin,
  faUser,
  faComments
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
library.add(
  faPhone,
  faEnvelope,
  faInstagram,
  faFacebook,
  faCar,
  faBullseye,
  faEye,
  faDollarSign,
  faMapPin,
  faUser,
  faComments
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarraNav />
        <Header />
        <Produtos />
        {/* <SobreTitulo /> */}
        <Sobre />
        <Contato />
        <Footer />
      </div>
    );
  }
}

export default App;
