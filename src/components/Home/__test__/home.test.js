import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Home from '../Home';

describe('Display the categories list', () => {
  it('Renders correctly every categories from the API', () => {
    const category = {
      category_id: 2,
      category_name: 'one',
      description: 'a category',
      joined: true,
    };
    const categories = TestRenderer.create(
      <Provider store={store}>
        <Home key={category.category_id} categories={category} />
      </Provider>,
    ).toJSON();
    expect(categories).toMatchSnapshot();
  });
});
