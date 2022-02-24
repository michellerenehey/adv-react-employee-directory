import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/profiles';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfile(response);
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
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
