import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Auth from './views/Auth/Auth';
import AddEditProfile from './components/AddEditProfile/AddEditProfile';
import Confirm from './views/Auth/Confirm';

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
            <Route exact path="/profile/:id">
              {/* make this a private route eventually */}
              <Profile />
            </Route>
            <Route exact path="/profile/:id/edit">
              <AddEditProfile isEditing />
            </Route>
            <Route exact path="/profile/add">
              <AddEditProfile />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
