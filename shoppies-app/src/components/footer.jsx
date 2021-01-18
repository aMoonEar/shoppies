import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import Paragraph from "../theme/paragraph";
import MovieResult from "../components/movieResult";

const Styles = styled.div`
  padding-top: 15%;
  padding-bottom: 20%;

  h1 {
    color: blue;
  }
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
        <Container className="text-center">
          <Paragraph>Your Nominations</Paragraph>
          <div>
            <Row className="justify-content-md-center">
              {this.props.nominations.map((nomination) => {
                return (
                  <Col key={nomination.imdbID} md={3} sm={6}>
                    <MovieResult
                      imdbID={nomination.imdbID}
                      title={nomination.title}
                      nominations={this.props.nominations}
                      poster={nomination.poster}
                      year={nomination.year}
                      nominated={true}
                      removeNomination={this.props.removeNomination}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </Styles>
    );
  }
}

export default Footer;
