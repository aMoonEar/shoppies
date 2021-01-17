import React, { Component } from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import MovieResult from "../components/movieResult";
import Paragraph from "../theme/paragraph";

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
  .message {
    margin-top: 20px;
    font-weight: 400;
  }
`;

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
    };

    // Cancel token
    this.cancel = "";
  }

  componentDidMount() {
    Aos.init({
      once: true,
    });
  }

  fetchSearchResults = (updatedPageNo, query) => {
    const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : "";
    const searchUrl = `http://www.omdbapi.com/?apikey=a5eb5dea&type=movie&s=${query}${pageNumber}`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        console.log(res.data);
        let resultNotFoundMsg =
          res.data.Response === "False" && query != ""
            ? res.data.Error
            : `Found ${res.data.totalResults} Results`;
        this.setState({
          results: res.data,
          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log(error);
          this.setState({
            loading: false,
            message: "Failed to fetch data",
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query, loading: true }, () => {
      this.fetchSearchResults(1, query);
    });
  };

  renderSearchResults = () => {
    const { results, loading } = this.state;
    if (results.Search) {
      return (
        <div>
          <Row className="justify-content-md-center ">
            {results.Search.map((result) => {
              return (
                <Col xs={3}>
                  <MovieResult
                    title={result.Title}
                    poster={result.Poster}
                    year={result.Year}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      );
    }
  };

  render() {
    const { message } = this.state;
    return (
      <Styles>
        <Container className="text-center pt-4">
          <Input
            className="text-center"
            type="text"
            name="query"
            autocomplete="chrome-off"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
            placeholder="What's one of your favorite movies?"
            onChange={this.handleOnInputChange}
          />

          {/* Error Message */}
          {message && <Paragraph className="message">{message}</Paragraph>}

          {/* Search results */}
          {this.renderSearchResults()}
        </Container>
      </Styles>
    );
  }
}

export default NavigationBar;
