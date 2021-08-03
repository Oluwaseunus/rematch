import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Auth from './Auth';

function Home() {
  return (
    <BrowserRouter>
      <Route path='/auth' component={Auth} />
      <Route path='/app' component={App} />
    </BrowserRouter>
  );
}

export default Home;
