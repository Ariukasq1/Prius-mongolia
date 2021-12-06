import React from "react";
import "react-select-plus/dist/react-select-plus.css";
import "../public/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import withApolloClient from "./clientPortal/lib/withApolloClient";
import { ApiApolloClientContext } from "../modules/ApiContext";

type Props = {
  apolloClient: any;
  apiClient: any;
  pageProps: any;
  Component: any;
  router: any;
};

function MyApp({
  Component,
  pageProps,
  apolloClient,
  apiClient,
  router,
}: Props) {
  return (
    <ApiApolloClientContext.Provider value={apiClient}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} router={router} />
      </ApolloProvider>
    </ApiApolloClientContext.Provider>
  );
}

export default withApolloClient(MyApp);
