import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';
import { MemoryRouter } from 'react-router-dom';

test('testing sign in ability with existing account', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const header = screen.getByRole('heading', {
    name: /welcome to acme inc directory/i,
  });
  expect(header).toBeInTheDocument();

  const headingAuthText = screen.getByText(/not signed in\./i);
  expect(headingAuthText).toBeInTheDocument();

  const headingAuthButton = screen.getByRole('button', { name: /sign in/i });
  expect(headingAuthButton).toBeInTheDocument();

  const welcome = screen.getByRole('heading', {
    name: /welcome to the acme inc\. employee directory!/i,
  });
  expect(welcome).toBeInTheDocument();

  const createAccount = screen.getByRole('link', { name: /create account/i });
  expect(createAccount).toBeInTheDocument();

  const signIn = screen.getByLabelText(/sign-in body/i);
  expect(signIn).toBeInTheDocument();

  userEvent.click(signIn);
  const welcomeBack = screen.getByRole('heading', {
    name: /welcome back! sign in\./i,
  });
  expect(welcomeBack).toBeInTheDocument();

  const emailField = screen.getByPlaceholderText(/email/i);
  userEvent.type(emailField, 'michelle.r.nygren@gmail.com');

  const passwordField = screen.getByPlaceholderText(/password/i);
  userEvent.type(passwordField, '123456789');

  const submitButton = screen.getByLabelText(/sign-in welcome back/i);
  userEvent.click(submitButton);

  const signedInAs = await screen.findByText(
    /signed in as michelle\.r\.nygren@gmail\.com/i
  );
  expect(signedInAs).toBeInTheDocument();
});
