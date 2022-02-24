import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from './UserContext';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const { user } = useUser();
  const [profile, setProfile] = useState({});

  //   const currentProfile = getProfile();
  // currentProfile
  //   ? {
  //       name: currentProfile.name,
  //       email: user.email,
  //       bio: currentProfile.bio,
  //       birthday: currentProfile.birthday,
  //     }
  //   : {}

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfile(response);
      } catch (error) {
        setProfile({});
      }
    };
    fetchProfile();
  }, []);

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
