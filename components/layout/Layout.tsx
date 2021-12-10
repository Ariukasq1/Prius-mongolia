import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
type Props = {
  children: any;
  title: string;
  menus?: any;
};

function Layout({ children, title, menus }: Props) {
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
