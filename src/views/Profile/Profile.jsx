import './Profile.css';
import { useProfile } from '../../context/ProfileContext';

export default function Profile() {
  const { profile } = useProfile();
  console.log(profile);
  return (
    <div className="Profile">
      <h1>{profile.name}</h1>
      <p>{profile.email}</p>
      <p>{profile.birthday}</p>
      <p>{profile.bio}</p>
    </div>
  );
}
