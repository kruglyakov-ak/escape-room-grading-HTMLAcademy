import { ReactComponent as IconPerson } from '../../../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../../../assets/img/icon-puzzle.svg';
import { AppRoute, DifficultylevelToReadable } from '../../../../../../const';
import { Quest } from '../../../../../../types/quest';
import * as S from './quest-item.styled';

type QuestsItemProps = {
  quest: Quest;
}

const QuestsItem = ({ quest }: QuestsItemProps): JSX.Element => {
  const {
    id,
    title,
    previewImg,
    level,
    peopleCount,
  } = quest;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={`${AppRoute.Main}quest/${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${peopleCount[0]}-${peopleCount[1]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {DifficultylevelToReadable[level]}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  )
};

export default QuestsItem;
