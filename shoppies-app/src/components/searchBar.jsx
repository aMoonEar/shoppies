import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Input = styled.input`
  width: 90%;
  height: 100px;
  padding: 10px 0 0 0;
  border-width: 0 0 2px 0;
  border-color: rgba(209, 220, 189, 0.4);
  background: transparent;
  color: ${(props) => props.theme.white};
  font-size: 60px;
  font-weight: 300;
  transition: 0.2s;

  ::placeholder {
    color: ${(props) => props.theme.green};
    text-align: center;
    bottom: 1px;
    font-size: 60px;
    font-weight: 200;
    opacity: 0.66;
  }

  /* Remove default outline when click on text box */
  :focus {
    outline: none;
    border-color: rgba(209, 220, 189, 1);

    /* Make placeholder transparent when you click on input */
    ::placeholder {
      color: transparent;
    }
  }
`;

const Styles = styled.div`
  /* background-color: ${(props) => props.theme.darkBlue}; */
`;

class NavigationBar extends Component {
  state = {};

  render() {
    return (
      <Styles>
        <Container className="text-center pt-4">
          <Input
            className="text-center"
            type="text"
            name="name"
            autocomplete="chrome-off"
            placeholder="What's one of your favorite movies?"
          />
        </Container>
      </Styles>
    );
  }
}

export default NavigationBar;
