import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

//Componetes
import RedesSocias from "../diversos/RedesSocias";

class BarraNav extends Component {
  state = {
    collapse: false,
    isWideEnoght: false
  };

  componentDidMount() {
    const nav = document.querySelector(".navbar");
    window.onscroll = () => {
      if (window.pageYOffset > 100) {
        nav.style.background = "#272F38";
      } else {
        nav.style.background = "transparent";
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
        <Navbar className="text-white" expand="md" fixed="top" dark scrolling>
          <Container>
            <NavbarBrand href="/">Pereira</NavbarBrand>
            {!this.state.isWideEnough && (
              <NavbarToggler onClick={this.onClick} />
            )}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Produtos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Sobre</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Contato</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
            <RedesSocias />
          </Container>
        </Navbar>
      </Router>
    );
  }
}

export default BarraNav;
