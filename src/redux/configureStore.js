import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import movieReducer, { apiCall } from './movies';

const reducer = combineReducers({
  movieReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(apiCall());

export default store;
