import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Mockup from '../mockup';

describe('Render the categories list', () => {
  it('Renders the selected category correctly as mockup', () => {
    const categories = TestRenderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Mockup />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(categories).toMatchSnapshot();
  });
});
