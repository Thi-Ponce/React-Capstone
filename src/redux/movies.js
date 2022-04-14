const GET_MOVIES = 'React-Capstone/movies/GET_MOVIES';

const apiURL = 'https://ghibliapi.herokuapp.com/films';

const startingState = [];

const movies = (payload) => ({
  type: GET_MOVIES,
  payload,
});

const movieReducer = (state = startingState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default movieReducer;

export const apiCall = () => async (dispatch) => {
  const response = await fetch(apiURL);
  const movieList = await response.json();
  const arrangeList = movieList.map((e) => {
    const obj = {
      filmKey: e.id,
      title: e.title,
      originalTitle: e.original_title,
      romanisedTitle: e.original_title_romanised,
      image: e.image,
      banner: e.movie_banner,
      description: e.description,
      director: e.director,
      producer: e.producer,
      release: e.release_date,
      runningTime: e.running_time,
      rtScore: e.rt_score,
    };
    return obj;
  });
  dispatch(movies(arrangeList));
};
