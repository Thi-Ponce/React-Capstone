import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../src/redux/configureStore';
import App from '../src/App';

it('App Renders Correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
