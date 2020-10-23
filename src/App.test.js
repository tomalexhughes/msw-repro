import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('makes a network request', async () => {
  render(<App />);
  userEvent.click(screen.getByText('Make Network Request'));
  expect(await screen.findByText('Response: true')).toBeInTheDocument()
});
