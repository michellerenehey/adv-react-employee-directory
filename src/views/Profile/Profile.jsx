import './Profile.css';
import { useProfile } from '../../hooks/useProfile';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default function Profile() {
  const { profile, loading } = useProfile();

  if (loading) return <p>...Loading</p>;
  if (!loading && !profile.name) return <Redirect to="/profile/create" />;

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
