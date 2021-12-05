import React from 'react';
import Faq from '../components/Faq';
import { Store } from '../../types';
import Layout from '../../main/containers/Layout';
function FaqContainer() {
  return (
    <Layout headingSpacing={true}>
      {(props: Store) => {
        return <Faq {...props} />;
      }}
    </Layout>
  );
}

export default FaqContainer;
