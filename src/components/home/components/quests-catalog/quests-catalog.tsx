import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuestType } from '../../../../const';
import { fetchQuestsAction } from '../../../../store/api-actions';
import { getCurrentSortType, getQuests } from '../../../../store/selectors';
import QuestsItem from './components/quest-item/quest-item';
import SortTabs from './components/sort-tabs/sort-tabs';
import * as S from './quests-catalog.styled';

const QuestsCatalog = (): JSX.Element => {
  const dispatch = useDispatch();
  const quests = useSelector(getQuests);
  const sortType = useSelector(getCurrentSortType);

  useEffect(() => {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  return (
    <>
      <SortTabs />
      <S.QuestsList>
        {/*eslint-disable-next-line array-callback-return*/}
        {quests.map((quest) => {
          switch (sortType) {
            case quest.type:
              return <QuestsItem quest={quest} key={quest.id} />
            case QuestType.All:
              return <QuestsItem quest={quest} key={quest.id} />
          }
        })}
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;
