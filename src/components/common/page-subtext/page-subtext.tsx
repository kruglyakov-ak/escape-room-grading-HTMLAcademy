import { ReactNode } from 'react';
import * as S from './page-subtext.styled';

type PageSubtextProps = {
  children: ReactNode;
};

const PageSubtext = ({ children, ...props }: PageSubtextProps): JSX.Element => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
