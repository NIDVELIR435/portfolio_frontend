import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sign up react page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign up/i);
  expect(linkElement).toBeInTheDocument();
});
