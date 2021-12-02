import React from 'react';
import Home from '../components/Home';
import { Store } from '../../types';
import Layout from '../../main/containers/Layout';

function HomeContainer() {
  return (
    <Layout headingSpacing={true}>
      {(props: Store) => {
        return <Home {...props} />;
      }}
    </Layout>
  );
}

export default HomeContainer;
