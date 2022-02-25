import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';
import { ProfileProvider } from './context/ProfileContext';

test('renders welcome/intro message and links to sign up or sign in', () => {
  render(
    <UserProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </UserProvider>
  );

  const header = screen.getByRole('heading', {
    name: /welcome to acme inc directory/i,
  });
  expect(header).toBeInTheDocument();
});
