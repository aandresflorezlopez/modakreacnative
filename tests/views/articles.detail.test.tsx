import { screen, render } from '@testing-library/react-native';

import ArticleDetail from '../../src/views/article.detail';

describe('[Article detail]', () => {
  test('renders article detail correctly', () => {
    render(<ArticleDetail />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
