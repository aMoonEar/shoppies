import React, { Component } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const SVG = styled.svg`
  width: 150px;
  height: 150px;
  margin: 300px auto 600px auto;
  display: block;

  ${({ loading }) =>
    !loading &&
    `
    display: none;
  `}
`;

class Loader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    Aos.init({
      once: true,
    });
  }

  render() {
    return (
      <SVG
        version="1.1"
        id="L4"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 0 0"
        loading={this.props.loading}
      >
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </SVG>
    );
  }
}

export default Loader;
