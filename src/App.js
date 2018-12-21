import React, { Component } from 'react';

//Interface Componentes
import NavBar from './components/navbar/View';
import Header from './components/header/View';
import Sobre from './components/sobre/View';
import Produtos from './components/produtos/View';
import Contato from './components/contato/View';
import Localizacao from './components/localizacao/View';
import Footer from './components/footer/View';

//CSS
import './App.css';

//JS
import 'jquery/dist/jquery.min.js';
import 'bootstrap/js/dist/collapse';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
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
  faBuilding,
  faBroom,
  faBath,
  faWineGlassAlt,
  faUserShield,
  faCogs,
  faUtensils,
  faPlus,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
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
  faBuilding,
  faBroom,
  faBath,
  faWineGlassAlt,
  faUserShield,
  faCogs,
  faUtensils,
  faPlus,
  faMapMarkerAlt
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Sobre />
        <Produtos />
        <Contato />
        <Localizacao />
        <Footer />
      </div>
    );
  }
}

export default App;
