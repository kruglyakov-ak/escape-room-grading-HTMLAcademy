import QuestsItem from './components/quest-item/quest-item';
import Tabs from './components/sort-tabs/sort-tabs';
import * as S from './quests-catalog.styled';

const QuestsCatalog = (): JSX.Element => (
  <>
    <Tabs />
    <S.QuestsList>
      <QuestsItem />
    </S.QuestsList>
  </>
);

export default QuestsCatalog;
