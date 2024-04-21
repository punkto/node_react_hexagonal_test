import { render, screen } from '@testing-library/react';
import App from './App';

test("renders Studying Group text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Studying Group/);
  expect(linkElement).toBeInTheDocument();
});
