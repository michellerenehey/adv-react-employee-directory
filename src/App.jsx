import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Auth from './views/Auth/Auth';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              {/* make this a private route eventually */}
              <Profile />
            </Route>
            <Route exact path="/login">
              <Auth />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
