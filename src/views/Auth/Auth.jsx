import './Auth.css';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ isSigningUp = false }) {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleAuth = async (e) => {
    e.preventDefault();
    if (isSigningUp) {
      await signUpUser(email, password);
      history.push('/');
      console.log('clicking', email);
    } else {
      const response = await signInUser(email, password);
      console.log(response);
    }
  };
  return (
    <div>
      <h2>
        {isSigningUp
          ? 'Welcome! Create an account below.'
          : 'Welcome back! Sign in.'}
      </h2>
      <form onSubmit={handleAuth}>
        <h4>{isSigningUp ? 'Sign Up' : 'Sign In'}</h4>
        <label>Email: </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password: </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        {isSigningUp ? <button>Sign Up</button> : <button>Sign In</button>}
      </form>
    </div>
  );
}
