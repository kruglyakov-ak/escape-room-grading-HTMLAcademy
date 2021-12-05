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
import Page404 from '../page-404/page-404';
import { AppRoute } from '../../const';

const App = (): JSX.Element => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.Quest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Main}>
          <Home />
        </Route>
        <Route
        render={() => (
          <Page404 />
        )}
      />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
