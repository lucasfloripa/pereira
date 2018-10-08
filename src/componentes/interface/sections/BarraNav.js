import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class BarraNav1 extends Component {
  state = {
    collapse: false,
    isWideEnoght: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
    return (
      <Router>
        <Navbar color="black" expand="md" dark scrolling>
          <Container>
            <NavbarBrand href="/">
              Pereira
              <span className="text-danger">SC</span>
            </NavbarBrand>
            {!this.state.isWideEnough && (
              <NavbarToggler onClick={this.onClick} />
            )}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav right>
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
          </Container>
        </Navbar>
      </Router>
    );
  }
}

export default BarraNav1;
