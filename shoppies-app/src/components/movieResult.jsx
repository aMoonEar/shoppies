import React, { Component } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import Paragraph from "../theme/paragraph";

const MoviePoster = styled.div`
  width: 200px;
  height: 300px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
`;

const Styles = styled.div`
  /* max-width: 400px; */
  max-width: 90%;
  padding-top: 70px;

  .title {
    float: left;
    text-align: left;
    font-weight: 600;
    margin-top: 10px;
    display: block;
  }

  .year {
    font-size: 18px;
    font-weight: 400;
    display: block;
  }
`;

class MovieResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      poster: this.props.poster,
      year: this.props.year,
    };
  }

  componentDidMount() {
    Aos.init({
      once: true,
    });
  }

  render() {
    const { title, poster, year } = this.state;
    return (
      <Styles>
        <MoviePoster
          style={{
            background: `url(${poster})`,
            "background-size": "cover",
            "background-repeat": "no-repeat",
          }}
          data-aos="fade"
          data-aos-duration="1200"
        ></MoviePoster>
        <Paragraph
          className="title"
          data-aos="fade"
          data-aos-duration="1200"
          data-aos-delay="150"
        >
          {title}
          <span
            className="year"
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            {year}
          </span>
        </Paragraph>
      </Styles>
    );
  }
}

export default MovieResult;
