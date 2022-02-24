import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to the Acme Inc. Employee Directory!</h1>
      <Link to="/register">Create Account</Link>
      <Link to="/login">Sign In</Link>
    </div>
  );
}
