import React from "react";
import "../styles/globals.css";
import "../styles/main.scss";
import { ApolloProvider } from "@apollo/client";
import withApolloClient from "./clientPortal/lib/withApolloClient";
import { ApiApolloClientContext } from "../modules/ApiContext";
import NextApp from "next/app";
import { getAllMenus } from "../lib/menus";

type Props = {
  apolloClient: any;
  apiClient: any;
  pageProps: any;
  Component: any;
  router: any;
  menus: any;
};

function MyApp({
  Component,
  pageProps,
  apolloClient,
  apiClient,
  menus,
  router,
}: Props) {
  return (
    <ApiApolloClientContext.Provider value={apiClient}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} router={router} menus={menus} />
      </ApolloProvider>
    </ApiApolloClientContext.Provider>
  );
}

// tslint:disable-next-line:only-arrow-functions
MyApp.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const { menus } = await getAllMenus();

  return {
    ...appProps,
    menus,
  };
};

export default withApolloClient(MyApp);
