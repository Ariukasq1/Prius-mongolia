import React from 'react';
import Banner from './Banner';
import ProductsRow from './ProductsRow';
type Props = {};

class Home extends React.Component<Props> {
  render() {
    return (
      <>
        <Banner />
        <ProductsRow title="Баталгаат сэлбэг худалдаа" />
        <ProductsRow title="Танд хэрэгтэй зар" type="user" />
      </>
    );
  }
}

export default Home;
