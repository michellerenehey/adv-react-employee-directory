import './Header.css';
import { useUser } from '../../../context/UserContext';
import { signOutUser } from '../../../services/users';
import { useHistory, Link } from 'react-router-dom';

export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();

  return (
    <div className="Header">
      <h3>Welcome to Acme Inc Directory</h3>
      {user.email ? (
        <>
          <span>signed in as {user.email}</span>
          <button
            onClick={async () => {
              await signOutUser();
              setUser({});
              history.push('/');
            }}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <span>Not signed in.</span>
          <Link to="/login" aria-label="sign-in header">
            <button>Sign In</button>
          </Link>
        </>
      )}
    </div>
  );
}
