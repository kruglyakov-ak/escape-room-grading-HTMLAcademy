import { useHistory } from 'react-router';
import { AppRoute, PageName } from '../../const';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../common/common';
import * as S from './page-in-dev.styled';

const PageInDev = (): JSX.Element => {
  const history = useHistory();
  const getPageNameByPath = () => {
    switch (history.location.pathname) {
      case AppRoute.New:
        return PageName.New;
      case AppRoute.Action:
        return PageName.Action;
      case AppRoute.Reviews:
        return PageName.Reviews;
    }
  }

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Страница &laquo;{getPageNameByPath()}&raquo; находится в разработке.</PageTitle>
          <PageSubtext>
            <S.Link to={AppRoute.Main}>
              на главную
            </S.Link>
          </PageSubtext>
        </PageHeading>
      </S.Main>
    </MainLayout>
  )
};

export default PageInDev;
