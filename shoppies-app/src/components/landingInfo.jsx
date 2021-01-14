import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import logo from "../img/4x/logo.png";
import Paragraph from "../theme/paragraph";

const Styles = styled.div`
  /* background-color: ${(props) => props.theme.darkBlue}; */
  margin-top: 120px;
  padding-top: 80px;

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

class LandingInfo extends Component {
  state = {};

  render() {
    return (
      <Styles>
        <Container>
          <LogoDiv />
          <Paragraph className="text-center mt-5">
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

export default LandingInfo;
