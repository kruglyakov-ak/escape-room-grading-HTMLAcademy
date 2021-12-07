import { useHistory } from 'react-router-dom';
import logo from '../../../assets/img/logo.svg';
import { AppRoute } from '../../../const';
import * as S from './header.styled';

const Header = (): JSX.Element => {
  const history = useHistory();

 return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Link to={AppRoute.Main}>
            <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
          </S.Link>
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link $isActiveLink={history.location.pathname === AppRoute.Main} to={AppRoute.Main}>
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link $isActiveLink={history.location.pathname === AppRoute.Contacts} to={AppRoute.Contacts}>
                Контакты
                </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  )
};

export default Header;
