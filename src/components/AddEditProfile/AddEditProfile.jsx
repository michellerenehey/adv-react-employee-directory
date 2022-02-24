import './AddEditProfile.css';
import { useUser } from '../../context/UserContext';
import { createProfile } from '../../services/profiles';
import { useState } from 'react';

export default function AddEditProfile() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');
  const { user } = useUser();

  const handleProfile = async (e) => {
    e.preventDefault();
    await createProfile({ name, email: user.email, bio, birthday });
    console.log('clicking');
  };

  return (
    <div>
      <form onSubmit={handleProfile}>
        <label>Enter name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Enter Birthday:</label>
        <input
          type="date"
          name="birthday"
          onChange={(e) => setBirthday(e.target.value)}
        />
        <label>Your Email</label>
        <p>{user.email}</p>
        <label>Enter bio:</label>
        <input
          type="textarea"
          name="bio"
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
