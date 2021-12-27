import React from 'react';
import CategoryList from '../components/CategoryList';
import { Store } from '../../types';
import Layout from '../../main/containers/Layout';

function CategoriesContainer() {
  return (
    <Layout headingSpacing={true}>
      {(props: Store) => {
        return <CategoryList {...props} />;
      }}
    </Layout>
  );
}

export default CategoriesContainer;
