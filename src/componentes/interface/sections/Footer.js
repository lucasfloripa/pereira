import React, { Component } from "react";
import { Container } from "mdbreact";
import $ from "jquery";
import Fade from "react-reveal/Fade";

import FooterInfos1 from "../footer_componentes/FooterInfos1";
import FooterInfos2 from "../footer_componentes/FooterInfos2";

class Footer extends Component {
  componentDidMount() {
    // Get the current year for the copyright
    $("#year").text(new Date().getFullYear());
  }

  render() {
    return (
      <footer id="footer" style={{ backgroundColor: "black" }}>
        <Container fluid className="text-white pt-5 px-5">
          <Fade buttom>
            <div className="row">
              <div className="col-md-4">
                <FooterInfos1 />
              </div>
              <div className="col-md-4">
                <FooterInfos2 />
              </div>
              <div className="col-md-4">PereiraLogo</div>
            </div>
            <div className="row pb-resp pt-5">
              <p className="p-0 d-block">
                Copyright &copy;
                <span id="year" /> PereiraSC
              </p>
              <span className="mr-3"></span>
              <p>| Design por Lucas Gonçalves |</p>
            </div>
          </Fade>
        </Container>
      </footer>
    );
  }
}

export default Footer;
