import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Sidebar from '../components/Sidebar';
import GlobalStyles from '../styles/GlobalStyles';
import Header from '../components/Header';

const StyledMain = styled.main`
  width: 80%;
  /* position: relative; */
`;

function Home() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Sidebar />
      <StyledMain>
        <Header />
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </StyledMain>
    </BrowserRouter>
  );
}

export default Home;
