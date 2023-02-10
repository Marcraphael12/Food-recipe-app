import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../../redux/configureStore';
import Header from '../Header';

describe('Testing the Header component', () => {
  test('Check rendering of the About component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    expect(getByText('More About This App')).toBeInTheDocument();
  });
  test('Check rendering of the Home component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    expect(getByText('Back to Home')).toBeInTheDocument();
  });
});
