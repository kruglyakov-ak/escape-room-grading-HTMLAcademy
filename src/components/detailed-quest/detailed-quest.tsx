import { useEffect, useState } from 'react';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import BookingModal from './components/booking-modal/booking-modal';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestByIdAction } from '../../store/api-actions';
import { getCurrentQuest } from '../../store/selectors';
import { DifficultylevelToReadable, QuestTypeToReadable } from '../../const';
import Page404 from '../page-404/page-404';

type RouteParams = {
  id: string,
}

const DetailedQuest = (): JSX.Element => {
  const dispatch = useDispatch();
  const { id } = useParams<RouteParams>();
  const currentQuest = useSelector(getCurrentQuest);
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  useEffect(() => {
    dispatch(fetchQuestByIdAction(+id));
  }, [id, dispatch]);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onBookingCloseClick = () => {
    setIsBookingModalOpened(false);
  };

  if (currentQuest !== null) {
    const {
      title,
      description,
      coverImg,
      type,
      level,
      peopleCount,
      duration,
    } = currentQuest;

    return (
      <MainLayout>
        <S.Main>
          <S.PageImage
            src={`/${coverImg}`}
            alt={`квест ${title}`}
            width="1366"
            height="768"
          />
          <S.PageContentWrapper>
            <S.PageHeading>
              <S.PageTitle>{title}</S.PageTitle>
              <S.PageSubtitle>{QuestTypeToReadable[type]}</S.PageSubtitle>
            </S.PageHeading>

            <S.PageDescription>
              <S.Features>
                <S.FeaturesItem>
                  <IconClock width="20" height="20" />
                  <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPerson width="19" height="24" />
                  <S.FeatureTitle>{`${peopleCount[0]}-${peopleCount[1]} чел`}</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPuzzle width="24" height="24" />
                  <S.FeatureTitle>{DifficultylevelToReadable[level]}</S.FeatureTitle>
                </S.FeaturesItem>
              </S.Features>

              <S.QuestDescription>{description}</S.QuestDescription>

              <S.QuestBookingBtn onClick={onBookingBtnClick}>
                Забронировать
              </S.QuestBookingBtn>
            </S.PageDescription>
          </S.PageContentWrapper>

          {isBookingModalOpened && <BookingModal onBookingCloseClick={onBookingCloseClick} />}
        </S.Main>
      </MainLayout>
    );
  }

  return (
    <Page404 />
  );

};

export default DetailedQuest;
