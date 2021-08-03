import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Auth from './Auth';
import Onboarding from './Onboarding';

function Home() {
  return (
    <BrowserRouter>
      <Route path='/app' component={App} />
      <Route path='/auth' component={Auth} />
      <Route path='/onboarding' component={Onboarding} />
    </BrowserRouter>
  );
}

export default Home;
