import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import Item from '../../src/ui-components/item';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigation: {
      navigate: jest.fn()
    }
  })
}));

test('form submits two answers', async () => {
  const allQuestions = ['q1', 'q2'];
  const mockFn = jest.fn();

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
