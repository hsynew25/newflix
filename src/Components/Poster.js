import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import styled from "styled-components";
import notFoundImg from "../assets/notFoundImg.png";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  background-position: center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 30px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;

  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: #636363;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : notFoundImg
          }
        ></Image>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {rating}/10
        </Rating>
        <Title>
          {title.length > 13 ? `${title.substring(0, 13)}...` : title}
        </Title>
        <Year>{year}</Year>
      </ImageContainer>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: propTypes.number.isRequired,
  imageUrl: propTypes.string,
  title: propTypes.string.isRequired,
  rating: propTypes.number,
  year: propTypes.string,
  isMovie: propTypes.bool,
};

export default Poster;
