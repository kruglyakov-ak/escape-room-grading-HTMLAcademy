import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../common/common';
import * as S from './page-404.styled';

const Page404 = (): JSX.Element => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>Страница не найдена.<br /> Ошибка 404.</PageTitle>
        <PageSubtext>
          <S.Link to="/">
            на главную
          </S.Link>
        </PageSubtext>
      </PageHeading>
    </S.Main>
  </MainLayout>
);

export default Page404;
