import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
