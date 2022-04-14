import React from 'react';
import { PropTypes } from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const {
    filmKey,
    title,
    release,
    image,
  } = props;

  const bgStyling = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="movie-card" key={filmKey} style={bgStyling}>
      <Link to={`/MovieDetails/${filmKey}`} key={filmKey}>
        <BsArrowRightCircle />
      </Link>
      <div className="movie-description">
        <h3>{title}</h3>
        <p>{release}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  filmKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Movie;
