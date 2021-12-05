import { ReactComponent as IconAllQuests } from '../../../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../../../assets/img/icon-scifi.svg';
import * as S from './sort-tabs.styled';

const SortTabs = (): JSX.Element => (
    <S.Tabs>
      <S.TabItem>
        <S.TabBtn isActive>
          <IconAllQuests />
          <S.TabTitle>Все квесты</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconAdventures />
          <S.TabTitle>Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconHorrors />
          <S.TabTitle>Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconMystic />
          <S.TabTitle>Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconDetective />
          <S.TabTitle>Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn>
          <IconScifi />
          <S.TabTitle>Sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>
);

export default SortTabs;
