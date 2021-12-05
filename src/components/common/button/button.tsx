import { ReactNode } from 'react';
import * as S from './button.styled';

type ButtonProps = {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps): JSX.Element => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
