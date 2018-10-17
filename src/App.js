import React, { Component } from "react";

//Interface Componentes
import NavBar from "./componentes/interface/sections/NavBar";
import Header from "./componentes/interface/sections/Header";
import Produtos from "./componentes/interface/sections/Produtos";
import Sobre from "./componentes/interface/sections/Sobre";
import Contato from "./componentes/interface/sections/Contato";
import Localizacao from "./componentes/interface/sections/Localizacao";
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
  faComments,
  faClock,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
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
  faComments,
  faWhatsapp,
  faClock,
  faBuilding
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Produtos />
        <Sobre />
        <Contato />
        <Localizacao />
        <Footer />
      </div>
    );
  }
}

export default App;
