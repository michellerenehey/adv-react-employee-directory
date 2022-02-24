import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Auth from './views/Auth/Auth';
import AddEditProfile from './components/AddEditProfile/AddEditProfile';
import Confirm from './views/Auth/Confirm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Auth />
            </Route>
            <Route exact path="/register">
              <Auth isSigningUp />
            </Route>
            <Route exact path="/confirm">
              <Confirm />
            </Route>
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/profile/edit">
              <AddEditProfile />
            </PrivateRoute>
            <PrivateRoute exact path="/profile/create">
              <AddEditProfile isCreating />
            </PrivateRoute>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
