import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { apiCall } from '../redux/movies';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movies = useSelector((state) => state.movieReducer);
  useEffect(() => {
    dispatch(apiCall());
  }, []);

  const displayedMovie = movies.filter((movie) => movie.filmKey === id);
  const currentMovie = displayedMovie[0];

  return (
    <section className="details">
      <div className="details-image">
        <img src={currentMovie.banner} alt={currentMovie.name} className="banner" />
      </div>
      <div className="info-container">
        <ul className="detail-ul">
          <li className="movie-info">
            <p>Title:</p>
            <p>{currentMovie.title}</p>
          </li>
          <li className="movie-info">
            <p>Japanese Title:</p>
            <p>{currentMovie.originalTitle}</p>
          </li>
          <li className="movie-info">
            <p>Romanised:</p>
            <p>{currentMovie.romanisedTitle}</p>
          </li>
          <li className="movie-info">
            <p>Release Year:</p>
            <p>{currentMovie.release}</p>
          </li>
          <li className="movie-info">
            <p>Run Time:</p>
            <p>{currentMovie.runningTime}</p>
          </li>
          <li className="movie-info">
            <p>Rotten Tomatoes Score :</p>
            <p>{currentMovie.rtScore}</p>
          </li>
          <li className="movie-info">
            <p>Director:</p>
            <p>{currentMovie.director}</p>
          </li>
          <li className="movie-info">
            <p>Producer:</p>
            <p>{currentMovie.producer}</p>
          </li>
          <li className="movie-info">
            <p>Synpsis:</p>
            <p>{currentMovie.description}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MovieDetails;
