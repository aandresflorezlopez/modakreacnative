import { render, screen } from '@testing-library/react-native';
import Item from '../../src/ui-components/item';

test('renders Item commponent correctly', async () => {
  const mockedItem = {
    id: 'item-id',
    title: 'Title',
    image_id: 'image_id',
    api_link: 'api-link.com',
    publication_history: 'Text and text',
    credit_line: 'credit line'
  };

  render(<Item data={mockedItem} />);

  expect(screen.toJSON()).toMatchSnapshot();
});
