import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect
} from 'react-router-dom';

import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

// Import pages
import Auth from './pages/Auth';
import UserData from './services/UserData';
import GenericNotFound from './pages/layout/GenericNotFound';
import Layout from './pages/layout/Layout';

function App() {

  const { token, setToken, setUserData } = UserData();

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Router>
        <Switch>
          {token ? (
            <Layout />
          ) : (
            <div>
              <Redirect exact to="/login" />
              <Route exact path="/login">
                <Auth setToken={setToken} setUserData={setUserData} />
              </Route>
            </div>
          )}
          <Route path="/404" component={GenericNotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
