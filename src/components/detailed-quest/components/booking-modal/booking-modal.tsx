import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { useState } from 'react';
import { BOOKING_ERROR_PEOPLE, BOOKING_ERROR_PHONE, NameBookingInputs } from '../../../../const';
import { OrderPost } from '../../../../types/orderPost';
import { postBookingOrderAction } from '../../../../store/api-actions';
import { useDispatch } from 'react-redux';

type BookingModalProps = {
  onBookingCloseClick: () => void;
}

const BookingModal = ({ onBookingCloseClick }: BookingModalProps): JSX.Element => {
  const dispatch = useDispatch();

  const [isError, setIsError] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [peopleValue, setPeopleValue] = useState(0);
  const [legalValue, setLegalValue] = useState(false);

  const orderPost: OrderPost = {
    name: nameValue,
    peopleCount: peopleValue,
    phone: phoneValue,
    isLegal: legalValue,
  }

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    switch (target.name) {
      case NameBookingInputs.Name:
        setNameValue(target.value);
        break;
      case NameBookingInputs.People:
        if (+target.value <= 0) {
          setPeopleValue(+target.value);
          setIsError(true);
          break;
        }
        setPeopleValue(+target.value);
        setIsError(false);
        break;
      case NameBookingInputs.Phone:
        if (+target.value < 999999999 || +target.value > 9999999999) {
          setPhoneValue(target.value);
          setIsError(true);
          break;
        }
        setPhoneValue(target.value);
        setIsError(false);
        break;
      case NameBookingInputs.Legal:
        setLegalValue(target.checked);
        break;
    }
  }

  const handleSubmitForm = (evt: React.BaseSyntheticEvent) => {
    evt.preventDefault();
    dispatch(postBookingOrderAction(orderPost, onBookingCloseClick));
  }

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onBookingCloseClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>?????????????? ????????</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>???????????????? ????????????</S.ModalTitle>
        <S.BookingForm
          onSubmit={handleSubmitForm}
          action="http://localhost:3001/orders"
          method="post"
          id="booking-form"
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">???????? ??????</S.BookingLabel>
            <S.BookingInput
              onChange={handleInput}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="??????"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              ???????????????????? ??????????????
            </S.BookingLabel>
            <S.BookingInput
              onChange={handleInput}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="??????????????"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              ???????????????????? ????????????????????
            </S.BookingLabel>
            <S.BookingInput
              onChange={handleInput}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="???????????????????? ????????????????????"
              required
            />
          </S.BookingField>
          {isError ?
            <S.BookingSubmit type="submit" disabled>?????????????????? ????????????</S.BookingSubmit> :
            <S.BookingSubmit type="submit">?????????????????? ????????????</S.BookingSubmit>
          }
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              onChange={handleInput}
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                ?? ???????????????? ??{' '}
                <S.BookingLegalLink href="#">
                  ?????????????????? ?????????????????? ???????????????????????? ???????????? ?? ????????????????????????????????
                  ??????????????????????
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
        {isError && <S.BookingErrorPostText>
          {BOOKING_ERROR_PEOPLE}<br/>
          {BOOKING_ERROR_PHONE}
        </S.BookingErrorPostText>}
      </S.Modal>
    </S.BlockLayer>
  )
};

export default BookingModal;
