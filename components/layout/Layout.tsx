import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
type Props = {
  children: any;
  title?: string;
  menus: any;
  contactData?: any;
};

function Layout({ children, title, menus, contactData }: Props) {
  const footerMenus = {
    aboutMenu: menus[1],
    footerMenu: menus[2],
    linkMenu: menus[3],
    contactData,
  };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header menu={menus[0]} contactData={contactData} />
      <div>{children}</div>
      <Footer {...footerMenus} />
    </>
  );
}

export default Layout;
