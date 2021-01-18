import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import logo from "../img/4x/logo.png";
import Paragraph from "../theme/paragraph";
import Aos from "aos";
import "aos/dist/aos.css";

const Styles = styled.div`
  /* background-color: ${(props) => props.theme.darkBlue}; */
  padding-top: 15%;

  h1 {
    color: blue;
  }
`;

const LogoDiv = styled.div`
  height: 200px;
  background: url(${logo}) no-repeat;
  background-size: contain;
  background-position: center;
`;

class Footer extends Component {
  componentDidMount() {
    Aos.init({
      once: true,
    });
  }

  state = {};

  render() {
    return (
      <Styles>
        <Container>
          <LogoDiv data-aos="fade" data-aos-duration="1200" />
          <Paragraph
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="400"
            className="text-center mt-5"
          >
            <em>
              Select your top five favorite movies for our upcoming Shoppies
              award show!
            </em>
          </Paragraph>
        </Container>
      </Styles>
    );
  }
}

export default Footer;
