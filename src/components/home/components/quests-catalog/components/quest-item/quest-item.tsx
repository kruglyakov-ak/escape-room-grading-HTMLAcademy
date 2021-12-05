import { ReactComponent as IconPerson } from '../../../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../../../assets/img/icon-puzzle.svg';
import * as S from './quest-item.styled';

const QuestsItem = (): JSX.Element => (
  <S.QuestItem>
    <S.QuestItemLink to="/quest">
      <S.Quest>
        <S.QuestImage
          src="img/preview-sklep.jpg"
          width="344"
          height="232"
          alt="квест Склеп"
        />

        <S.QuestContent>
          <S.QuestTitle>Склеп</S.QuestTitle>

          <S.QuestFeatures>
            <S.QuestFeatureItem>
              <IconPerson />
              2–5 чел
            </S.QuestFeatureItem>
            <S.QuestFeatureItem>
              <IconPuzzle />
              сложный
            </S.QuestFeatureItem>
          </S.QuestFeatures>
        </S.QuestContent>
      </S.Quest>
    </S.QuestItemLink>
  </S.QuestItem>
);

export default QuestsItem;
