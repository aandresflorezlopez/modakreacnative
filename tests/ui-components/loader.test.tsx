import { render, screen } from '@testing-library/react-native';
import Loader from '../../src/ui-components/loader';

test('renders loader component correctly', async () => {
  render(<Loader />);

  expect(screen.toJSON()).toMatchSnapshot();
});
