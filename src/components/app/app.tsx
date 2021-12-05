import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';

const App = (): JSX.Element => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/quest">
          <DetailedQuest />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
