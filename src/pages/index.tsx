import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './Home';
import Auth from './Auth';
import { store } from '../store';
import Onboarding from './Onboarding';
import UserService from '../api/UserService';
import UserActionsCreator from '../store/actions/user';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Route path='/app' component={Home} />
          <Route path='/auth' component={Auth} />
          <Route path='/onboarding' component={Onboarding} />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
