import { Route, Switch } from 'react-router-dom';

import Community from './Community';
import Dashboard from './Dashboard';
import Onboarding from './Onboarding';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Route>
        <Route path='/onboarding' component={Onboarding} />
        <Sidebar />
        <main>
          <Header />
          <Switch>
            <Route exact path='/app' component={Dashboard} />
            <Route path='/app/community' component={Community} />
            <Route path='/app/dashboard' component={Dashboard} />
          </Switch>
        </main>
      </Route>
    </>
  );
}
