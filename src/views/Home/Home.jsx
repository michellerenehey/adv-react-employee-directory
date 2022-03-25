import './Home.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  if (loading) return <p>...Loading</p>;

  return (
    <div className="Home">
      <h1>Welcome to the Acme Inc. Employee Directory!</h1>
      <Link to="/register">Create Account</Link>
      <Link to="/login" aria-label="sign-in body">
        Sign In
      </Link>
    </div>
  );
}
