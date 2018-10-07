import React, { Component } from 'react';

//Interface Componentes
import BarraTopInfo from './componentes/interface/sections/BarraTopInfo';
import BarraNav from './componentes/interface/sections/BarraNav';
import Carrosel from './componentes/interface/sections/Carrosel';
import Produtos from './componentes/interface/sections/Produtos';
import Sobre from './componentes/interface/sections/Sobre';
import Contato from './componentes/interface/sections/Contato';
import Footer from './componentes/interface/sections/Footer';

//CSS
import './App.css';

//JS
import 'jquery/dist/jquery.min.js';
import 'bootstrap/js/dist/collapse';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
library.add(faPhone, faEnvelope, faInstagram, faFacebook);

class App extends Component {
  render() {
    return (
      <div className="App bg-dark">
        <div style={{ height: '100vh' }}>
          <BarraTopInfo />
          <BarraNav />
          <Carrosel />
        </div>
        <Produtos />
        <Sobre />
        <Contato />
        <Footer />
      </div>
    );
  }
}

export default App;
