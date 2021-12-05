import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import Tabs from './components/sort-tabs/sort-tabs';
import * as S from './quests-catalog.styled';

const QuestsCatalog = (): JSX.Element => (
  <>
    <Tabs/>
    <S.QuestsList>
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

      <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-maniac.jpg"
              width="344"
              height="232"
              alt="квест Маньяк"
            />

            <S.QuestContent>
              <S.QuestTitle>Маньяк</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  3–6 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  средний
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

      <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-ritual.jpg"
              width="344"
              height="232"
              alt="квест Ритуал"
            />

            <S.QuestContent>
              <S.QuestTitle>Ритуал</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  3–5 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  легкий
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

      <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-old-ceil.jpg"
              width="344"
              height="232"
              alt="квест История призраков"
            />

            <S.QuestContent>
              <S.QuestTitle>История призраков</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  5–6 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  легкий
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

      <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-final-frontier.jpg"
              width="344"
              height="232"
              alt="квест Тайны старого особняка"
            />

            <S.QuestContent>
              <S.QuestTitle>Тайны старого особняка</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  2–3 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  легкий
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

      <S.QuestItem>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-house-in-the-woods.jpg"
              width="344"
              height="232"
              alt="квест Хижина в лесу"
            />

            <S.QuestContent>
              <S.QuestTitle>Хижина в лесу</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  4–7 чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  средний
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>
    </S.QuestsList>
  </>
);

export default QuestsCatalog;
