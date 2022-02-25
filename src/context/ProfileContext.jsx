import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from '../context/UserContext';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
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
        setLoading(false);
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  const value = { profile, setProfile, loading, setLoading };

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
