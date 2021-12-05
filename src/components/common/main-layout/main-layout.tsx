import { ReactNode } from 'react';
import { Header, Footer } from '../common';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
