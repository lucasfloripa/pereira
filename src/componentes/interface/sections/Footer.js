import React, { Component } from "react";
import { Container } from "mdbreact";
import $ from "jquery";

class Footer extends Component {
  componentDidMount() {
    // Get the current year for the copyright
    $("#year").text(new Date().getFullYear());
  }

  render() {
    return (
      <Container fluid className="color-black p-3 text-white text-center">
        <p>
          Copyright &copy;
          <span id="year" /> PereiraSC
        </p>
      </Container>
    );
  }
}

export default Footer;
