import * as S from './sort-tabs.styled';
import { QuestType } from '../../../../../../const';
import SortTabItem from '../sort-tab-item/sort-tab-item';

const SortTabs = (): JSX.Element => {

  return (
    <S.Tabs>
      {Object.values(QuestType).map((sortType) => (
        <SortTabItem
          sortType={sortType}
          key={sortType}
        />))}
    </S.Tabs>
  )
};

export default SortTabs;
