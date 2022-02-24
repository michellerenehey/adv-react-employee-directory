import { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from './UserContext';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const { user } = useUser();
  const currentProfile = getProfile();
  const [profile, setProfile] = useState(
    currentProfile
      ? {
          name: currentProfile.name,
          email: user.email,
          bio: currentProfile.bio,
          birthday: currentProfile.birthday,
        }
      : {}
  );

  const value = { profile, setProfile };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error(
      'To use useProfile you must wrap component in ProfileProvider'
    );
  }

  return context;
};

export { ProfileProvider, useProfile };
