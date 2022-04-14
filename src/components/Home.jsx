import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Movie from './Movie';
import './Home.css';

function Home() {
  const [searchText, setSearchText] = useState('');
  const movies = useSelector((state) => state.movieReducer);
  const arrangedList = movies.filter((item) => Object.keys(item).some((key) => item[key]
    .toString()
    .toLowerCase()
    .includes(searchText.toLocaleLowerCase())));

  return (
    <section className="home">
      <div className="input-container">
        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search here" className="search-input" />
      </div>
      <div className="cards-container">
        {
          arrangedList.map((movie) => (
            <Movie
              key={movie.filmKey}
              filmKey={movie.filmKey}
              title={movie.title}
              release={movie.release}
              image={movie.image}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Home;
