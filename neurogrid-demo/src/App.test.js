import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the NeuroGrid API Demo header', () => {
  render(<App />);
  const headerElement = screen.getByText(/NeuroGrid API Demo/i);
  expect(headerElement).toBeInTheDocument();
});
