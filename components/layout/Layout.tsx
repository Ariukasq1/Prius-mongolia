import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
type Props = {
  children: any;
  title: string;
};

function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
