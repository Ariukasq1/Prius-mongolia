import React from 'react';
import Branches from '../components/Branches';
import { Store } from '../../types';
import Layout from '../../main/containers/Layout';
function BranchesContainer() {
  return (
    <Layout headingSpacing={true}>
      {(props: Store) => {
        return <Branches {...props} />;
      }}
    </Layout>
  );
}

export default BranchesContainer;
