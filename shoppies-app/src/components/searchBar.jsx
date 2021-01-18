import React, { Component } from "react";
import styled from "styled-components";
import { Container, Col, Row, Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import MovieResult from "../components/movieResult";
import Pagination from "../components/pagination";
import Loader from "../components/loader";
import Paragraph from "../theme/paragraph";
import { SearchIcon } from "@primer/octicons-react";

const SearchInput = styled.input`
  width: 85%;
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
    font-weight: 200;
    opacity: 0.66;
    font-size: 60px;

    @media (max-width: 1000px) {
      font-size: 4vw;
      font-weight: 400;
    }
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

const SearchButton = styled(Button)`
  background-color: ${(props) => props.theme.midBlue};
  padding: 15px;
  margin-left: 10px;
  margin-bottom: 10px;
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

const Styles = styled.div`
  .message {
    margin-top: 20px;
    font-weight: 400;
  }

  .styledContentLoader {
    width: 500px;
    height: 500px;
  }

  .hide {
    opacity: 0;
    pointer-events: none;
  }

  .show {
    display: initial;
  }

  .currentPage {
    margin: 0 30px;
  }
`;

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      pageNumber: 1,
      totalPages: 1,
    };

    this.searchInput = React.createRef();

    // Cancel token
    this.cancel = "";
  }

  componentDidMount() {
    Aos.init({
      once: true,
    });
  }

  fetchSearchResults = (updatedPageNo, query) => {
    console.log(updatedPageNo);
    const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : "";
    const searchUrl = `http://www.omdbapi.com/?apikey=a5eb5dea&type=movie&s=${query}${pageNumber}`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    // this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        console.log(res.data);
        let resultNotFoundMsg =
          res.data.Response === "False" && res.data.totalResults && query != ""
            ? res.data.Error
            : `Found ${res.data.totalResults} Results`;
        this.setState({
          results: res.data,
          message: resultNotFoundMsg,
          loading: false,
          totalPages: Math.ceil(res.data.totalResults / 10),
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

  handleOnInputChange = (event, buttonClick) => {
    if (event.keyCode === 13 || buttonClick == true) {
      this.setState({
        results: {},
        pageNumber: 1,
      });

      const query = this.searchInput.current.value;
      if (!query) {
        this.setState({ query, results: {}, message: "" });
      } else {
        this.setState({ query, loading: true, message: "" }, () => {
          this.fetchSearchResults(this.state.pageNumber, query);
        });
      }
    }
  };

  handleNextPage = () => {
    let updatePage = this.state.pageNumber + 1;
    this.setState({ results: {}, pageNumber: updatePage });
    this.fetchSearchResults(updatePage, this.state.query);
  };

  handlePrevPage = () => {
    let updatePage = this.state.pageNumber - 1;
    this.setState({ results: {}, pageNumber: updatePage });
    this.fetchSearchResults(updatePage, this.state.query);
  };

  renderSearchResults = () => {
    const { results } = this.state;
    if (results.Search) {
      return (
        <div>
          <Row className="justify-content-md-center">
            {results.Search.map((result) => {
              return (
                <Col md={3} sm={6}>
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
    const {
      loading,
      results,
      message,
      totalPages,
      pageNumber,
      query,
    } = this.state;
    return (
      <Styles>
        <Container className="text-center pt-4">
          <SearchInput
            className="text-center"
            type="text"
            name="query"
            autocomplete="chrome-off"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
            placeholder="What's one of your favorite movies?"
            ref={this.searchInput}
            onKeyDown={(e) => this.handleOnInputChange(e, false)}
          ></SearchInput>

          <SearchButton
            type="submit"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="900"
            onClick={(e) => this.handleOnInputChange(e, true)}
          >
            <SearchIcon size={24} />
          </SearchButton>

          <Loader loading={loading} />
          {console.log(loading)}

          {/* Error Message */}
          {message && <Paragraph className="message">{message}</Paragraph>}

          {/* Pagination */}
          <Pagination
            handlePrevPage={this.handlePrevPage}
            handleNextPage={this.handleNextPage}
            results={results}
            pageNumber={pageNumber}
            query={query}
            totalPages={totalPages}
          ></Pagination>

          {/* Search results */}
          {this.renderSearchResults()}

          <Pagination
            className="mt-5"
            handlePrevPage={this.handlePrevPage}
            handleNextPage={this.handleNextPage}
            results={results}
            pageNumber={pageNumber}
            query={query}
            totalPages={totalPages}
          ></Pagination>
        </Container>
      </Styles>
    );
  }
}

export default NavigationBar;
