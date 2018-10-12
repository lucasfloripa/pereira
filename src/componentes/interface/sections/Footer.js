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
      <footer id="footer">
        <Container fluid className="color-black text-white text-center p-1">
          <p>
            Copyright &copy;
            <span id="year" /> Pereira
          </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
