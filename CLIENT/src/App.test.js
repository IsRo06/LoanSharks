import { render, screen } from '@testing-library/react';
import HomeScreen from './App';

test('renders learn react link', () => {
  render(<HomeScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
