import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import About from '../About';

describe('Display the about page', () => {
  it('Renders correctly the page About', () => {
    const about = TestRenderer.create(
      <About />,
    ).toJSON();
    expect(about).toMatchSnapshot();
  });
});
