import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';

const TestRenderer = require('react-test-renderer');

it('Renders homepage correctly', () => {
  const tree = TestRenderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
