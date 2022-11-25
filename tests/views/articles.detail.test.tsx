import { screen, render } from '@testing-library/react-native';
import { waitFor } from '@testing-library/dom';

import ArticleDetail from '../../src/views/article.detail';

describe('[Article detail]', () => {
  test('no renders article detail correctly', () => {
    render(<ArticleDetail />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
