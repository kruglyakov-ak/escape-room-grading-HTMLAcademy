import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestsAction } from '../../../../store/api-actions';
import { getQuests } from '../../../../store/selectors';
import QuestsItem from './components/quest-item/quest-item';
import Tabs from './components/sort-tabs/sort-tabs';
import * as S from './quests-catalog.styled';

const QuestsCatalog = (): JSX.Element => {
  const dispatch = useDispatch();
  const quests = useSelector(getQuests);

  useEffect(() => {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  return (
    <>
      <Tabs />
      <S.QuestsList>
        {quests.map((quest) => <QuestsItem quest={quest} key={quest.id}/>)}
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;
