import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Sidebar from '../components/Sidebar';
import GlobalStyles from '../styles/GlobalStyles';

function Home() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Sidebar />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Home;
