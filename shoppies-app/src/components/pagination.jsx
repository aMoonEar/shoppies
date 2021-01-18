import React, { Component } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "react-bootstrap";
import { ChevronRightIcon, ChevronLeftIcon } from "@primer/octicons-react";
import Paragraph from "../theme/paragraph";

const Styles = styled.div`
  margin-top: 40px;
  display: inline-block !important;

  .hide {
    opacity: 0;
    pointer-events: none;
  }

  .show {
    display: initial;
  }
`;

const PaginationButton = styled(Button)`
  border-radius: 96px;
  background-color: ${(props) => props.theme.midBlue};
  cursor: pointer;
  margin: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
  border: 0px !important;

  :hover,
  :active,
  :focus {
    background-color: ${(props) => props.theme.darkBlue} !important;
    outline: 0 !important;
    box-shadow: none !important;
  }
`;

class Pagination extends Component {
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
      <Styles
        className={`text-center ${this.props.loading ? "hide" : "show"} `}
      >
        <PaginationButton
          className={` ${
            this.props.pageNumber !== 1 && this.props.response == "True"
              ? "show"
              : "hide"
          } `}
          onClick={this.props.handlePrevPage}
        >
          <ChevronLeftIcon size={16} />
        </PaginationButton>

        <Paragraph
          className={`currentPage ${
            this.props.query && this.props.response == "True" ? "show" : "hide"
          } `}
        >
          Page {this.props.pageNumber}
        </Paragraph>

        <PaginationButton
          className={`shadow-none currentPage ${
            this.props.pageNumber - this.props.totalPages !== 0 &&
            this.props.response == "True"
              ? "show"
              : "hide"
          } `}
          onClick={this.props.handleNextPage}
        >
          <ChevronRightIcon size={16} />
        </PaginationButton>
      </Styles>
    );
  }
}

export default Pagination;
