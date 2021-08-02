import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Home() {
  return (
    <BrowserRouter>
      <Sidebar />
      <main>
        <Header />
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Home;
