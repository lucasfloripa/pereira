import React, { Component } from "react";
import { Container } from "mdbreact";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

import FooterInfos from "../footer_componentes/FooterInfos";

class Footer extends Component {
  componentDidMount() {
    // Get the current year for the copyright
    $("#year").text(new Date().getFullYear());
  }

  render() {
    return (
      <footer id="footer">
        <Container
          fluid
          className="color-black text-white text-center pt-5 px-5"
        >
          <Fade buttom>
            <div className="row">
              <div className="col-md-4 mx-auto">
                <FooterInfos />
              </div>
              <div className="col-md-4 mx-auto">
                Logo
              </div>
            </div>
            <div className="row pt-5">
              <p>
                Copyright &copy;
                <span id="year" /> Pereira <span className="mr-3"></span>| Lucas Gonçalves |
              </p>
            </div>
          </Fade>
        </Container>
      </footer>
    );
  }
}

export default Footer;
