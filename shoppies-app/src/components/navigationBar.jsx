import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const Styles = styled.div`
  .navbar {
    padding: 30px 0px;
    background-color: rgba(63, 96, 111, 0.5);
  }

  .nominations {
    color: white;
    font-size: 1.2em;
    font-weight: 600;
  }
`;

class NavigationBar extends Component {
  componentDidMount() {
    Aos.init({
      once: true,
    });
  }

  state = {};

  render() {
    return (
      <Styles>
        <Navbar
          fixed="top"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="1000"
        >
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
