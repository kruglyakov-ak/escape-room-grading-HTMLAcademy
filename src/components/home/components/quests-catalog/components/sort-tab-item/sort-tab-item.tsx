import { ReactComponent as IconAllQuests } from '../../../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../../../assets/img/icon-scifi.svg';
import * as S from './sort-tabs.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentSortType } from '../../../../../../store/selectors';
import { QuestType } from '../../../../../../const';
import { changeSortType } from '../../../../../../store/actions';

const QuestTypeToTabs = {
  [QuestType.All]: {
    title: 'Все квесты',
    icon: <IconAllQuests />,
  },
  [QuestType.Adventures]: {
    title: 'Приключения',
    icon: <IconAdventures />,
  },
  [QuestType.Horror]: {
    title: 'Ужасы',
    icon: <IconHorrors />,
  },
  [QuestType.Mystic]: {
    title: 'Мистика',
    icon: <IconMystic />,
  },
  [QuestType.Detective]: {
    title: 'Детектив',
    icon: <IconDetective />,
  },
  [QuestType.SciFi]: {
    title: 'Sci-Fi',
    icon: <IconScifi />,
  },
}

type SortTabItemProps = {
  sortType: QuestType,
}

const SortTabItem = ({ sortType }: SortTabItemProps): JSX.Element => {
  const currentSortType = useSelector(getCurrentSortType);
  const dispatch = useDispatch();

  const handleSortTabClick = () => {
    dispatch(changeSortType(sortType));
  }

  return (
    <S.TabItem onClick={handleSortTabClick}>
      {sortType === currentSortType ?
        <S.TabBtn isActive>
          {QuestTypeToTabs[sortType].icon}
          <S.TabTitle>{QuestTypeToTabs[sortType].title}</S.TabTitle>
        </S.TabBtn> :
        <S.TabBtn>
          {QuestTypeToTabs[sortType].icon}
          <S.TabTitle>{QuestTypeToTabs[sortType].title}</S.TabTitle>
        </S.TabBtn>}
    </S.TabItem>
  )
};

export default SortTabItem;
