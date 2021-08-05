import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Auth from './Auth';
import { store } from '../store';
import Onboarding from './Onboarding';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/app' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path='/onboarding' component={Onboarding} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
