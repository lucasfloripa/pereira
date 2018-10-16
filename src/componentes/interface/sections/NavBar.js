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

import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        iconFloat.style.boxShadow = "2px 2px 3px #999"

      } else {
        nav.style.background = "transparent";

        iconFloat.style.background = "transparent";
        iconFloat.style.boxShadow = "none"
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
          className="text-white"
          expand="md"
          fixed="top"
          dark
          scrolling
        >
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
              </NavbarNav>
            </Collapse>
            <div className="d-none d-md-block">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  color="white"
                  size="2x"
                />
              </a>
              <span className="mr-3" />
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  color="white"
                  size="2x"
                />
              </a>
            </div>
          </Container>
        </Navbar>
      </Router>
    );
  }
}

export default BarraNav;
