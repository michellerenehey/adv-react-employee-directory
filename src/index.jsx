import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import { ProfileProvider } from './context/ProfileContext';

render(
  <React.StrictMode>
    <UserProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
