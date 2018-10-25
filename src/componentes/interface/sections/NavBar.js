import React, { Component } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Container
} from "mdbreact";

import Scrollchor from "react-scrollchor";
import NavbarIcones from "../navbar_componentes/NavbarIcones";

import { BrowserRouter as Router } from "react-router-dom";

class BarraNav extends Component {
  state = {
    collapse: false,
    isWideEnoght: false
  };

  componentDidMount() {
    const nav = document.querySelector(".navbar");
    const iconFloat = document.querySelector(".icon-float");

    if (window.innerWidth < 768) {
      nav.style.background = "#272F38";
      return;
    }

    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        nav.style.background = "#272F38";
        iconFloat.style.background = "#25d366";
        iconFloat.style.boxShadow = "2px 2px 3px #999";
      } else {
        nav.style.background = "transparent";
        iconFloat.style.background = "transparent";
        iconFloat.style.boxShadow = "none";
      }
    };
  }

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
    return (
      <Router>
        <Navbar
          id="nav"
          className="text-white d-flex flex-column px-0 pt-0"
          expand="md"
          fixed="top"
          dark
          scrolling
        >
          <Container className="p-2">
            <NavbarBrand href="https://lucasfloripa.github.io/pereira/">
              PereiraLogo
            </NavbarBrand>
            {!this.state.isWideEnough && (
              <NavbarToggler onClick={this.onClick} />
            )}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem>
                  <Scrollchor
                    to="#home"
                    animate={{ offset: 20, duration: 600 }}
                    className="nav-link"
                  >
                    Home
                  </Scrollchor>
                </NavItem>
                <NavItem>
                  <Scrollchor
                    to="#sobre"
                    animate={{ offset: 20, duration: 600 }}
                    className="nav-link"
                  >
                    Sobre
                  </Scrollchor>
                </NavItem>
                <NavItem>
                  <Scrollchor
                    to="#produtos"
                    animate={{ offset: 20, duration: 600 }}
                    className="nav-link"
                  >
                    Produtos
                  </Scrollchor>
                </NavItem>

                <NavItem>
                  <Scrollchor
                    to="#contato"
                    animate={{ offset: 20, duration: 600 }}
                    className="nav-link"
                  >
                    Contato
                  </Scrollchor>
                </NavItem>
                <NavItem>
                  <Scrollchor
                    to="#localizacao"
                    animate={{ offset: 20, duration: 600 }}
                    className="nav-link"
                  >
                    Localização
                  </Scrollchor>
                </NavItem>
                <NavItem>
                  <Scrollchor
                    to="#footer"
                    animate={{ offset: 20, duration: 600 }}
                    className="nav-link"
                  >
                    Informações
                  </Scrollchor>
                </NavItem>
              </NavbarNav>
            </Collapse>
            <div className="d-none d-md-block">
              <NavbarIcones />
            </div>
          </Container>
        </Navbar>
      </Router>
    );
  }
}

export default BarraNav;
