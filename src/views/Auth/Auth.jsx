import './Auth.css';
import { Link } from 'react-router-dom';

export default function Auth({ isSigningUp = false }) {
  return (
    <div>
      <h2>
        {isSigningUp
          ? 'Welcome! Create an account below.'
          : 'Welcome back! Sign in.'}
      </h2>
      <form>
        <label>Email: </label>
        <input type="email" />
        <label>Password: </label>
        <input type="password" />
        {isSigningUp ? <button>Sign Up</button> : <button>Sign In</button>}
      </form>
    </div>
  );
}
