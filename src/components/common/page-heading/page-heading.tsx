import { ReactNode } from 'react';
import * as S from './page-heading.styled';

type PageHeadingProps = {
  children: ReactNode;
};

const PageHeading = ({ children, ...props }: PageHeadingProps): JSX.Element => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
