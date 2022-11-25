import { screen, render } from '@testing-library/react-native';
import { waitFor } from '@testing-library/dom';

import ArticleList from '../../src/views/article.list';

describe('[Article list]', () => {
  test('renders list correctly', () => {
    render(<ArticleList />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
