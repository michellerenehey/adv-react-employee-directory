import './Profile.css';
import { useProfile } from '../../context/ProfileContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProfile } from '../../services/profiles';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const { profile, setProfile, loading, setLoading } = useProfile();
  const history = useHistory();

  useEffect(async () => {
    try {
      const res = await getProfile();
      setProfile(res);
      setLoading(false);
    } catch (err) {
      history.push('/profile/create');
    }
  });

  return (
    <div className="Profile">
      <h1>{profile.name}</h1>
      <p>{profile.email}</p>
      <p>{profile.birthday}</p>
      <p>{profile.bio}</p>
      <Link to="/profile/edit">
        <button>Edit Profile</button>
      </Link>
    </div>
  );
}
