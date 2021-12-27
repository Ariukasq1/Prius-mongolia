import React from 'react';
import '../styles/globals.css';
import '../styles/main.scss';
import { ApolloProvider } from '@apollo/client';
import withApolloClient from './clientPortal/lib/withApolloClient';
import { ApiApolloClientContext } from '../modules/ApiContext';
import NextApp from 'next/app';
import { getAllMenus } from '../lib/menus';
import { getPageBySlug } from '../lib/page';
type Props = {
  apolloClient: any;
  apiClient: any;
  pageProps: any;
  Component: any;
  router: any;
  menus: any;
  page: any;
};

function MyApp({ Component, apolloClient, page, pageProps, apiClient, menus, router }: Props) {
  const layoutProps = {
    menus,
    contactData: page,
    ...pageProps,
  };

  return (
    <ApiApolloClientContext.Provider value={apiClient}>
      <ApolloProvider client={apolloClient}>
        <Component router={router} {...layoutProps} />
      </ApolloProvider>
    </ApiApolloClientContext.Provider>
  );
}

// tslint:disable-next-line:only-arrow-functions
MyApp.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const { menus } = await getAllMenus();
  const { page } = await getPageBySlug('contact');
  return {
    ...appProps,
    menus,
    page,
  };
};

export default withApolloClient(MyApp);
