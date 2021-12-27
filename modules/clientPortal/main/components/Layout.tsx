import React from 'react';
import Footer from './Footer';
import Header from '../containers/Header';
import { Config, IUser } from '../../types';

type Props = {
  topic: any;
  config: Config;
  children: any;
  currentUser: IUser;
  headerBottomComponent?: React.ReactNode;
  headingSpacing?: boolean;
};

function Layout({ config, topic, children, currentUser, headingSpacing, headerBottomComponent }: Props) {
  return (
    <>
      <Header config={config} currentUser={currentUser} headingSpacing={headingSpacing} headerBottomComponent={headerBottomComponent} />
      <div>{children({ config, topic })}</div>
      <Footer />
    </>
  );
}

export default Layout;
