import { useState, useEffect } from 'react';
import { getProfile } from '../services/profiles';

const useProfile = () => {
  const [loading, setLoading] = useState(true);
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
  }, []);

  return { profile, setProfile, loading, setLoading };
};

export { useProfile };
