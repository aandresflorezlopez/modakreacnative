import { render, screen } from '@testing-library/react-native';

import List from '../../src/containers/list';

const item = {
  id: 'id',
  title: 'title',
  image_id: 'image-id',
  api_link: 'api.link',
  publication_history: 'public history',
  credit_line: 'credit'
};

const ITEMS = [item];

test('renders List component correctly', () => {
  render(<List items={ITEMS} />);

  expect(screen.toJSON()).toMatchSnapshot();
});
