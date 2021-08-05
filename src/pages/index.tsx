import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Auth from './Auth';
import { store } from '../store';
import UserService from '../api/UserService';
import UserActionsCreator from '../store/actions/user';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const userWithToken = await UserService.fetchUserWithToken();

      if (userWithToken) {
        UserActionsCreator.authenticate(userWithToken);
      }

      setLoading(false);
    }
    fetchUser();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/app' component={Home} />
        <Route path='/auth' component={Auth} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
