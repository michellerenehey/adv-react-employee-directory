import './AddEditProfile.css';
import { useUser } from '../../context/UserContext';
import { createProfile, updateProfile } from '../../services/profiles';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

export default function AddEditProfile({ isCreating = false }) {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');
  const { user } = useUser();
  const { profile, setProfile } = useProfile();
  const history = useHistory();

  useEffect(() => {
    setName(profile.name);
    setBirthday(profile.birthday);
    setBio(profile.bio);
  }, [profile]);

  const handleProfile = async (e) => {
    e.preventDefault();

    if (isCreating) {
      await createProfile({ name, email: user.email, bio, birthday });
      setProfile({ name, email: user.email, bio, birthday });
      history.push('/profile');
    } else {
      await updateProfile({ name, email: user.email, bio, birthday });
      setProfile({ name, email: user.email, bio, birthday });
      history.replace('/profile');
    }
  };

  return (
    <div>
      <h2>
        {isCreating
          ? 'Welcome! Create a profile!'
          : 'Edit Your Employee Profile'}
      </h2>
      <form onSubmit={handleProfile}>
        <label>Enter name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Enter Birthday:</label>
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <label>Your Email</label>
        <p>{user.email}</p>
        <label>Enter bio:</label>
        <input
          type="textarea"
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

// connect to css

// if no profile exists
// 'you must create a profile'

// name: string
// email: string (disabled; not editable, but still visible in the form)
// birthday: date (you can use <input type="date">)
// bio: text (you can use <textarea>)

// if profile exists
// profile page
// edit button
// edit button populates 'create profile'

// MAKE THIS ALSO THE EDIT COMPONENT!
// make private route to edit
// isCreatingProfile?

// need profile context?
