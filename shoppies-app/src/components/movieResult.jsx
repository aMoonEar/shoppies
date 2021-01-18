import React, { Component } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import Paragraph from "../theme/paragraph";
import {
  HeartFillIcon,
  ThumbsdownIcon,
  XCircleFillIcon,
} from "@primer/octicons-react";

const MoviePoster = styled.div`
  width: 200px;
  height: 300px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  transition: 0.2s !important;
`;

const Styles = styled.div`
  /* max-width: 400px; */
  max-width: 90%;
  padding-top: 70px;

  .overlay {
    opacity: 0.2;
    transition: 0.2s;
  }

  .title {
    float: left;
    text-align: left;
    font-weight: 600;
    margin-top: 10px;
    display: block;
  }

  .nominate {
    opacity: 0;
    transition: 0.2s !important;
  }

  .year {
    font-size: 18px;
    font-weight: 400;
    display: block;
  }

  .disableLink {
    pointer-events: none;
  }

  .selectPoster :hover {
    cursor: pointer;
    background: rgba(26, 51, 65, 0.73) !important;

    .nominate {
      opacity: 1;
    }
  }
`;

class MovieResult extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Aos.init({
      once: true,
    });
  }

  renderMoviePoster() {
    return (
      <MoviePoster
        style={{
          background: `url(${this.props.poster})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        data-aos="fade"
        data-aos-duration="1200"
      >
        <div
          className="nominate"
          style={{ color: "#91AA9D", paddingTop: "50%" }}
        >
          {this.props.searched && (
            <React.Fragment>
              <HeartFillIcon size={55} />
              <Paragraph className="text-center">Nominate</Paragraph>
            </React.Fragment>
          )}
          {this.props.nominated && (
            <React.Fragment>
              <XCircleFillIcon size={55} />
              <Paragraph className="text-center">Remove Nomination</Paragraph>
            </React.Fragment>
          )}
        </div>
      </MoviePoster>
    );
  }

  renderBlankMoviePoster() {
    return (
      <MoviePoster
        style={{
          "background-color": "#1A3341",
        }}
        data-aos="fade"
        data-aos-duration="1200"
      ></MoviePoster>
    );
  }

  renderSelectedMoviePoster() {
    return (
      <MoviePoster
        style={{
          "background-color": "#1A3341",
        }}
        data-aos="fade"
        data-aos-duration="1200"
      ></MoviePoster>
    );
  }

  handleClick = (event) => {
    if (!this.props.nominations) {
      return null;
    }

    if (this.props.searched) {
      this.props.addNomination(
        this.props.title,
        this.props.poster,
        this.props.year,
        this.props.imdbID
      );
    } else if (this.props.nominated) {
      this.props.removeNomination(this.props.imdbID);
    }
  };

  grayedOut() {
    if (this.props.nominated) {
      return true;
    }

    if (!this.props.nominations) {
      return null;
    }

    if (this.props.full) {
      return;
    }

    if (this.props.nominations) {
      if (
        this.props.nominations.some((item) => item.imdbID === this.props.imdbID)
      ) {
        return false;
      }
    }

    return true;
  }

  render() {
    if (!this.props.nominations) {
      return null;
    }

    return (
      <Styles>
        {console.log("GRAYED OUT", this.grayedOut())}
        <div className={` ${this.grayedOut() ? "" : "overlay"} `}>
          {this.props.poster !== "N/A" && (
            <a
              className={` ${
                this.grayedOut() ? "selectPoster" : "disableLink"
              } `}
              onClick={this.handleClick}
            >
              {this.renderMoviePoster()}
            </a>
          )}

          {this.props.poster == "N/A" && (
            <a
              className="selectPoster"
              onClick={() =>
                this.props.click(
                  this.props.title,
                  this.props.poster,
                  this.props.year
                )
              }
            >
              {this.renderBlankMoviePoster()}
            </a>
          )}

          <Paragraph
            className="title"
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            {this.props.title}

            <span
              className="year"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              {this.props.year}
            </span>
          </Paragraph>
        </div>
      </Styles>
    );
  }
}

export default MovieResult;
