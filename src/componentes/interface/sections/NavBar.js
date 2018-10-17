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

import NavbarIcones from "../navbar_componentes/NavbarIcones";
import NavbarSuperior from "../navbar_componentes/NavbarSuperior";

import { BrowserRouter as Router } from "react-router-dom";

class BarraNav extends Component {
  state = {
    collapse: false,
    isWideEnoght: false
  };

  componentDidMount() {
    const nav = document.querySelector(".navbar");
    // const navSuperior = document.querySelector("#navbar-superior");
    const iconFloat = document.querySelector(".icon-float");

    if (window.innerWidth < 768) {
      nav.style.background = "#272F38";
      return;
    }

    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        nav.style.background = "#272F38";
        // navSuperior.style.display = "none";
        iconFloat.style.background = "#25d366";
        iconFloat.style.boxShadow = "2px 2px 3px #999";
      } else {
        nav.style.background = "transparent";
        // navSuperior.style.display = "block";
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
          {/* <Container id="navbar-superior" fluid>
            <NavbarSuperior />
          </Container> */}
          <Container className="p-1">
            <NavbarBrand href="/">PereiraLogo</NavbarBrand>
            {!this.state.isWideEnough && (
              <NavbarToggler onClick={this.onClick} />
            )}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem>
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </NavItem>
                <NavItem>
                  <a href="#produtos" className="nav-link">
                    Produtos
                  </a>
                </NavItem>
                <NavItem>
                  <a href="#sobre" className="nav-link">
                    Sobre
                  </a>
                </NavItem>
                <NavItem>
                  <a href="#contato" className="nav-link">
                    Contato
                  </a>
                </NavItem>
                <NavItem>
                  <a href="#localizacao" className="nav-link">
                    Localização
                  </a>
                </NavItem>
                <NavItem>
                  <a href="#footer" className="nav-link">
                    Informações
                  </a>
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
