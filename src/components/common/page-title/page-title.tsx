import { ReactNode } from 'react';
import * as S from './page-title.styled';

type PageTitleProps = {
  children: ReactNode;
};

const PageTitle = ({ children, ...props }: PageTitleProps): JSX.Element => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
