import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../common/common';
import QuestsCatalog from './components/quests-catalog/quests-catalog';
import * as S from './home.styled';

const HomePage = (): JSX.Element => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>Выберите тематику</PageTitle>
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </PageHeading>
      <QuestsCatalog />
    </S.Main>
  </MainLayout>
);

export default HomePage;
