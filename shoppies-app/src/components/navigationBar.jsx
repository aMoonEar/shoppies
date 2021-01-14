import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Styles = styled.div`
  .navbar {
    padding: 30px 0px;
    background-color: ${(props) => props.theme.midBlue};
  }

  .nominations {
    color: white;
    font-size: 1.2em;
    font-weight: 600;
  }
`;

class NavigationBar extends Component {
  state = {};

  render() {
    return (
      <Styles>
        <Navbar fixed="top">
          <Container>
            <Navbar.Brand href="#home">Shoppies</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="nominations">
                <a href="/">Nominations</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;
